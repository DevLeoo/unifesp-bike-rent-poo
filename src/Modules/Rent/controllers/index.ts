import { NextFunction, Request, Response } from "express";
import RentRepository from "../repository/index";
import { IRent } from "../interfaces";
import { RentNotFoundError } from "../../../errors/rent-not-found-error";

export const getAllRents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const rents = await RentRepository.getRents();
  return res.status(200).json(rents);
};

export const registerRent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Rent: IRent = req.body;

  const Rents = await RentRepository.registerRent(Rent);
  return res.status(200).json(Rents);
};

export const deleteRent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.query.id as string;
  //await RentRepository.find(email);
  // if ((await this.rentRepo.findOpenFor(email)).length > 0) {
  //   throw new UserHasOpenRentError();
  // }
  const affected: number = await RentRepository.remove(id);
  const success: boolean = affected === 1 ? true : false;
  return res.status(200).json({ success });
};

export const findOneRent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.query.id as string;
  const foundRent = await RentRepository.find(id);
  if (!foundRent) {
    throw new RentNotFoundError();
  }
  return res.status(200).json(foundRent);
};
