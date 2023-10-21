import { NextFunction, Request, Response } from "express";
import BikeRepository from "../repository/index";
import { IBike } from "../interfaces";
import { BikeNotFoundError } from "../../../errors/bike-not-found-error";

export const getAllBikes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bikes = await BikeRepository.getBikes();
  return res.status(200).json(bikes);
};

export const registerBike = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bike: IBike = req.body;

  const Bikes = await BikeRepository.registerBike(bike);
  return res.status(200).json(Bikes);
};

export const deleteBike = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.query.id as string;
  //await BikeRepository.find(email);
  // if ((await this.rentRepo.findOpenFor(email)).length > 0) {
  //   throw new UserHasOpenRentError();
  // }
  const affected: number = await BikeRepository.remove(id);
  const success: boolean = affected === 1 ? true : false;
  return res.status(200).json({ success });
};

export const findOneBike = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.query.id as string;
  const foundBike = await BikeRepository.find(id);
  if (!foundBike) {
    throw new BikeNotFoundError();
  }
  return res.status(200).json(foundBike);
};
