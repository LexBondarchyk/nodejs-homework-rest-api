const errorMessage = {
  400: "Bad Reqest",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const HttpError = (status, message = errorMessage[status]) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

module.exports = HttpError;