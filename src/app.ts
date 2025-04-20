import "dotenv/config";

import express from 'express';
import CONFIG from './config/app.config';

const app = express();
const port = CONFIG.PORT;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
})