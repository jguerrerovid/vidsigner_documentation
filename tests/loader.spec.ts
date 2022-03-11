import { load } from "js-yaml";
import Loader from "../src/loader";

jest.mock("fs", () => ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  ...jest.requireActual("fs"),
  readFileSync: jest.fn().mockReturnValue(""),
}));

jest.mock("js-yaml", () => ({
  load: jest.fn(),
}));
jest.mock("../src/config/configuration", () => ({
  config: {
    url: "url",
    description: "desc",
    logLevel: "debug",
    openapis: [
      { name: "VIDchain API", file: "vidchain" },
      { name: "VIDconnect API", file: "vidconnect" },
    ],
  },
}));

describe("loader suite tests", () => {
  it("should return apis", () => {
    expect.assertions(3);
    (load as jest.Mock).mockReturnValue({});
    const openapis = Loader.loadApis();
    expect(openapis).toHaveLength(2);
    expect(openapis).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: "vidchain",
          jsonfile: "openapi-vidchain.json",
          name: "VIDchain API",
          url: "/docs/openapi-vidchain.json",
        }),
      ])
    );
    expect(openapis).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: "vidconnect",
          jsonfile: "openapi-vidconnect.json",
          name: "VIDconnect API",
          url: "/docs/openapi-vidconnect.json",
        }),
      ])
    );
    jest.clearAllMocks();
  });
});
