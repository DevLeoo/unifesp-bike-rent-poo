import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/index";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await UserRepository.getUsers();
  return res.status(200).json(users);
};
