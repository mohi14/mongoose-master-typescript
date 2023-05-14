import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {

    // creating a new user
    const user = new User(payload);// User -> class user -> instance
    await user.save(); // build in instance methods

    // user.fullName() // custom instance method

    console.log(user.fullName());
    return user
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find({});
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 })
    return user
}

export const getAllAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers()
    return admins
}