import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error";
import config from "../config";

const globalErrorHandler:ErrorRequestHandler = (err, req, res, next) => {
    console.log(err.statusCode);
    //setting default values
    let statusCode = 500;
    let message = "Something went wrong!";
    let errorSources: TErrorSources = [
        {
            path: "",
            message: "Something went wrong",
        },
    ];

    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err,
        stack: config.NODE_ENV === 'development' ? err?.stack : null,
      });
};
export default globalErrorHandler
