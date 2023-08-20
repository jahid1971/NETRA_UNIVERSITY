import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { USER_ROLE } from "./user.constant";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDb = async (password: string, payload: TStudent) => {
    const userData: Partial<TUser> = {};
    userData.id = "123";
    userData.password = password || config.default_pass;
    userData.role = USER_ROLE.student;
    userData.email = payload.email;

    const newUser = await User.create(userData);

    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
};
export const userServices = {
    createStudentIntoDb,
};
