import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

class Config {
    private PORT: number | undefined;
    private HOST: string;

    constructor() {
        this.PORT = process.env.PORT ? Number(process.env.PORT) : undefined;
        this.HOST = 'localhost';
    }

    public get<T>(key: string): T {
        return Object.getOwnPropertyDescriptor(this, key)?.value as T;
    }
}

export default new Config();
