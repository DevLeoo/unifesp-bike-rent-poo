import { NextFunction, Request, Response } from "express";
import ImageRepository from "../repository/index";
import { IImage } from "../interfaces";
import { ImageNotFoundError } from "../../../errors/image-not-found-error";

export const getAllImages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const images = await ImageRepository.getImages();
  return res.status(200).json(images);
};

export const registerImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const image: IImage = req.body;

  const images = await ImageRepository.registerImage(image);
  return res.status(200).json(images);
};

export const deleteImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.query.id as string;
  //await ImageRepository.find(email);
  // if ((await this.rentRepo.findOpenFor(email)).length > 0) {
  //   throw new UserHasOpenRentError();
  // }
  const affected: number = await ImageRepository.remove(id);
  const success: boolean = affected === 1 ? true : false;
  return res.status(200).json({ success });
};

export const findOneImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.query.id as string;
  const foundImage = await ImageRepository.find(id);
  if (!foundImage) {
    throw new ImageNotFoundError();
  }
  return res.status(200).json(foundImage);
};
