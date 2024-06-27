declare global {
  namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        readonly URL_LOGIN_API: string;
        readonly CORS_URL_FOR_EXPRESS: string
        // add more environment variables and their types here
      }
    }
}

export {};
