import { AppDataSource } from "../../../database/connection";
import User from "../entities/user-entity";
import { IUser } from "../interfaces";

const userRepository = AppDataSource.getRepository(User);

const getUsers = async (): Promise<IUser[]> => {
  return await userRepository.find();
};

const registerUser = async (user: IUser): Promise<IUser> => {
  return await userRepository.save(user);
};

const find = async (email: string): Promise<IUser> => {
  return await userRepository.findOne({ where: { email } });
};

const remove = async (email: string): Promise<number> => {
  return (await userRepository.delete({ email })).affected;
};

export default { getUsers, find, registerUser, remove };
