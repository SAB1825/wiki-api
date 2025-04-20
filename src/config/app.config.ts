import { getEnv } from "../utils/get-env";


const CONFIG = {
    PORT : getEnv('PORT'),
    NODE_ENV : getEnv("NODE_ENV", "development"),
    BASE_PATH : getEnv("BASE_PATH", "/api"),
    ACCESS_TOKEN : getEnv("ACCESS_TOKEN"),
    REFRESH_TOKEN : getEnv("REFRESH_TOKEN"),
    FRONTEND_ORIGIN : getEnv("FRONTEND_ORIGIN"),
    FRONTEND_INTEGRATION_URL : getEnv("FRONTEND_INTEGRATION_URL")
}

export default CONFIG;