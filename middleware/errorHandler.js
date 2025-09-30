import STATUS_CODES from "../constants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || STATUS_CODES.SERVER_ERROR;

  let title = "";
  switch (statusCode) {
    case STATUS_CODES.BAD_REQUEST:
      title = "Validation Failed";
      break;
    case STATUS_CODES.UNAUTHORIZED:
      title = "Unauthorized";
      break;
    case STATUS_CODES.FORBIDDEN:
      title = "Forbidden";
      break;
    case STATUS_CODES.NOT_FOUND:
      title = "Not Found";
      break;
    case STATUS_CODES.SERVER_ERROR:
      title = "Server Error";
      break;
    default:
      title = "Error";
      break;
  }

  res.status(statusCode).json({
    title,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
};

export default errorHandler;
