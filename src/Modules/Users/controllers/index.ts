import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/index";
import { IUser } from "../interfaces";
import { DuplicateUserError } from "../../../errors/duplicate-user-error";
import { Crypt } from "../../../crypt";
import { UserNotFoundError } from "../../../errors/user-not-found-error";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await UserRepository.getUsers();
  return res.status(200).json(users);
};

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: IUser = req.body;
  if (await UserRepository.find(user.email)) {
    throw new DuplicateUserError();
  }
  const encryptedPassword = await new Crypt().encrypt(user.password);
  user.password = encryptedPassword;

  const users = await UserRepository.registerUser(user);
  return res.status(200).json(users);
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.query.email as string;
  //await UserRepository.find(email);
  // if ((await this.rentRepo.findOpenFor(email)).length > 0) {
  //   throw new UserHasOpenRentError();
  // }
  const affected: number = await UserRepository.remove(email);
  const success: boolean = affected === 1 ? true : false;
  return res.status(200).json({ success });
};

export const findOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.query.email as string;
  const foundUser = await UserRepository.find(email);
  if (!foundUser) {
    throw new UserNotFoundError();
  }
  return res.status(200).json(foundUser);
};
