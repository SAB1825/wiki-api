import "dotenv/config";

import express, { Request, Response } from 'express';
import CONFIG from './config/app.config';
import { HTTPSTATUS } from "./config/http.config";
import { ErrorHandler } from "./middleware/error.handler";
import { BadRequestException } from "./utils/app-error";

const app = express();
const port = CONFIG.PORT;

//ERROR HANDLER
app.use(ErrorHandler);

//SERVER TESTING 
app.get("/api", async (req : Request, res : Response) => {
    throw new BadRequestException("User not found")
})

//SERVER STARTING 
app.listen(port, () => {
    console.log(`Server started at ${port}`);
})