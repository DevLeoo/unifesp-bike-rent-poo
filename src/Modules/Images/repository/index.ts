import { AppDataSource } from "../../../database/connection";
import Images from "../entities/image-entity";
import { IImage } from "../interfaces";

const imageRepository = AppDataSource.getRepository(Images);

const getImages = async (): Promise<IImage[]> => {
  return await imageRepository.find();
};

const registerImage = async (image: IImage): Promise<IImage> => {
  return await imageRepository.save(image);
};

const find = async (id: string): Promise<IImage> => {
  return await imageRepository.findOne({ where: { id } });
};

const remove = async (id: string): Promise<number> => {
  return (await imageRepository.delete({ id })).affected;
};

export default { getImages, find, registerImage, remove };
