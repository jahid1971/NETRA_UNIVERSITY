import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = catchAsync(async (req, res) => {
    const { password, student: studentData } = req.body;

    const result = await userServices.createStudentIntoDb(password, studentData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student is created succesfully",
        data: result,
    });
});

export const UserControllers = {
    createStudent,
};
