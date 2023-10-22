import { AppDataSource } from "../../../database/connection";
import Images from "../../Images/entities/image-entity";
import Bikes from "../entities/bike-entity";
import { IBike } from "../interfaces";

const bikeRepository = AppDataSource.getRepository(Bikes);
const imageRepository = AppDataSource.getRepository(Images);

const getBikes = async (): Promise<IBike[]> => {
  return await bikeRepository.find({
    relations: {
      imageUrls: true,
    },
  });
};

const registerBike = async (bike: IBike): Promise<IBike> => {
  const savedBike = await bikeRepository.save(bike);
  const newImage = new Images();

  newImage.bikeId = savedBike.id as any;
  newImage.url = bike.imageUrls as any;

  await imageRepository.save(newImage);
  return savedBike;
};

const find = async (id: string): Promise<IBike> => {
  return await bikeRepository.findOne({
    where: { id },
    relations: { imageUrls: true },
  });
};

const remove = async (id: string): Promise<number> => {
  return (await bikeRepository.delete({ id })).affected;
};

export default { getBikes, find, registerBike, remove };
