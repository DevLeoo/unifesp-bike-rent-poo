import { AppDataSource } from "../../../database/connection";
import Bikes from "../entities/bike-entity";
import { IBike } from "../interfaces";

const bikeRepository = AppDataSource.getRepository(Bikes);

const getBikes = async (): Promise<IBike[]> => {
  return await bikeRepository.find();
};

const registerBike = async (bike: IBike): Promise<string> => {
  const saved = await bikeRepository.save(bike);
  console.log(saved);
  return saved as any;
};

const find = async (id: string): Promise<IBike> => {
  return await bikeRepository.findOne({ where: { id } });
};

const remove = async (id: string): Promise<number> => {
  return (await bikeRepository.delete({ id })).affected;
};

export default { getBikes, find, registerBike, remove };
