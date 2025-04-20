
export const getEnv = (value : string, defaultValue : string = "" ) => {
    const secret = process.env[value];
    if(!value) {
        if(defaultValue){
            return process.env[value];
        }
        throw new Error(`Environment variable ${value} is not set`);
    }
    return secret;
}