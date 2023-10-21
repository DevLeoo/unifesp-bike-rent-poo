import { AppDataSource } from "../../../database/connection";
import User from "../entities/user-entity";
import { IUser } from "../interfaces";

const userRepository = AppDataSource.getRepository(User);

const getUsers = async (): Promise<IUser[]> => {
  return await userRepository.find();
};

export default { getUsers };
