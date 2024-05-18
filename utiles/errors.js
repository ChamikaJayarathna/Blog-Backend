export const errorHandler = (statusCord, message) => {
    const error = new Error();
    error.statusCord = statusCord;
    error.message = message;
    return error;
};