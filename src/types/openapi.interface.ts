import type { OpenAPIV3 } from "openapi-types";

export interface APIObject {
  url?: string;
  description?: string;
  content?: OpenAPIV3.Document;
  jsonfile?: string;
  name: string;
  file: string;
}
