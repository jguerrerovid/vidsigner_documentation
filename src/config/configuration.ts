// CONFIG PROJECT FILE
import * as dotenv from "dotenv";
import Joi from "joi";
import openapis from "../assets/apis.json";
import { APIObject } from "../types/openapi.interface";

// importing .env variables
dotenv.config();

const ENVIRONMENT = ["prod", "staging", "dev", "local"].includes(
  process.env.REACT_APP_ENV
)
  ? process.env.REACT_APP_ENV
  : "test";

export interface ApiConfig {
  openapis: APIObject[];
  env: string;
  url: string;
  description: string;
}
interface Environment {
  url: string;
  description: string;
}

interface DefaultConfig {
  local: Environment;
  test: Environment;
  staging: Environment;
  prod: Environment;
}

// Example of default values to be used, depending on the environment
const defaultConfig: DefaultConfig = {
  local: {
    url: "http://localhost:3000",
    description: "Local Computer Environment",
  },
  test: {
    url: "https://dev.vidchain.net",
    description: "VIDchain Development Environment",
  },
  staging: {
    url: "https://staging.vidchain.net",
    description: "VIDchain Staging Environment",
  },
  prod: {
    url: "https://api.vidchain.net",
    description: "VIDchain Pro Environment",
  },
};

const schema = Joi.object({
  // Common API variables
  openapis: Joi.required(),
  env: Joi.string().valid("local", "test", "staging", "prod").required(),
  url: Joi.string().uri(),
  description: Joi.string(),
});

const config: ApiConfig = {
  openapis: openapis.filter((api) => {
    // Show all APIs in local or test envs
    if (ENVIRONMENT === "test") return true;

    // Show only APIs that are ready
    if (ENVIRONMENT === "staging") {
      return [
        "vidchain-api",
        "vidconnect-api",
        ...(ENVIRONMENT === "staging" ? ["staging"] : []),
      ].includes(api.file);
    }

    // Don't show anything in prod
    return false;
  }),
  env: ENVIRONMENT,
  url:
    process.env.REACT_APP_DOMAIN ||
    (defaultConfig[ENVIRONMENT] as Environment).url,
  description: (defaultConfig[ENVIRONMENT] as Environment).description,
};

const { error } = schema.validate(config);

if (error) {
  throw new Error(`validation error:${error.message}`);
}

export { config };
