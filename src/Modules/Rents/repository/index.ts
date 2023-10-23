import { AppDataSource } from "../../../database/connection";
import Rent from "../entities/rent-entity";
import { IRent } from "../interfaces";

const rentRepository = AppDataSource.getRepository(Rent);

const getRents = async (): Promise<IRent[]> => {
  return await rentRepository.find();
};

const registerRent = async (rent: IRent): Promise<IRent> => {
  return await rentRepository.save(rent);
};

const find = async (id: string): Promise<IRent> => {
  return await rentRepository.findOne({ where: { id } });
};

const remove = async (id: string): Promise<number> => {
  return (await rentRepository.delete({ id })).affected;
};

export default { getRents, find, registerRent, remove };
