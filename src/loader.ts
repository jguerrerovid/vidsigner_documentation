/* eslint-disable @typescript-eslint/no-unsafe-member-access, no-param-reassign */
import { load } from "js-yaml";
import { resolve } from "path";
import { readFileSync, writeFileSync } from "fs";

import type { OpenAPIV3 } from "openapi-types";
import { APIObject } from "./types/openapi.interface";
import { config } from "./config/configuration";

export default class Loader {
  static getOpenApiUrls(
    openapis: APIObject[]
  ): Record<"url" | "name", string>[] {
    return openapis.map((el: APIObject) => {
      return {
        url: el.url ?? "",
        name: el.name,
      };
    });
  }

  static loadApis(): APIObject[] {
    const res: APIObject[] = [];

    config.openapis.forEach((el) => {
      const api: APIObject = { file: el.file, name: el.name };
      const filename = `openapi-${api.file}`;
      const pathyaml = `../api/${filename}.yaml`;

      api.jsonfile = `${filename}.json`;

      try {
        api.content = load(readFileSync(resolve(__dirname, pathyaml), "utf8"), {
          json: true,
        }) as OpenAPIV3.Document;

        // Override "servers" field
        api.content.servers = [
          {
            url: config.url,
            description: config.description,
          },
        ];

        api.url = `/docs/${api.jsonfile}`;

        // Filter out invalid examples
      } catch (error) {
        api.content = null;
      }
      res.push(api);
      const openapi = `../api-json/${api.jsonfile}`;
      writeFileSync(resolve(__dirname, openapi), JSON.stringify(api.content));
    });
    return res;
  }
}

Loader.loadApis();
