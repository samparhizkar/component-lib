// handleError.js - Common Error Handler Function
export default function (error) {
    const { status, message } = error;
    switch (status) {
        case 401:
        // do something when you're unauthenticated
            break;

        case 403:
        // do something when you're unauthorized to access a resource
            break;
        case 500:
        // do something when your server exploded
            break;
        default:
        // handle normal errors with some alert or whatever
            console.log("error", message)
            break;
    }
    return message; // I like to get my error message back
}
