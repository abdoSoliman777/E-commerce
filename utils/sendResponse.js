const sendResponse = (res, statusCode, message, result = null ) => {
    return res.status(statusCode).json({
        statusCode: statusCode,
        message: message,
        result: result
    })
}
module.exports = sendResponse;