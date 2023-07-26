/**
 * connectToDB Function:
 *
 * This function is responsible for establishing a connection to a MongoDB database using Mongoose.
 * It checks if a connection has already been established (by checking the `isConnected` flag). If a connection
 * is already present, it logs a message indicating that MongoDB is already connected and returns immediately.
 *
 * If there is no existing connection, the function attempts to connect to the MongoDB database using the provided
 * `MONGODB_URI` environment variable. It sets certain options for the connection, such as the database name, and
 * the use of the new URL parser and unified topology. If the connection is successful, it sets the `isConnected`
 * flag to true and logs a message indicating that MongoDB is connected.
 *
 * If any errors occur during the connection process, they are caught in a try-catch block, and the error is logged.
 *
 * Note: The function uses the `mongoose` library to connect to the MongoDB database. The `MONGODB_URI` environment
 * variable should contain the connection string to the MongoDB database.
 */

import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
};
