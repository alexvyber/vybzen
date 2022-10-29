import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://127.0.0.1:7777/graphql",
  documents: ["src/**/*.ts*"],
  generates: {
    "./src/gql/": {
      hooks: {
        afterOneFileWrite: "eslint --fix",
      },
      preset: "client",
      plugins: [],
    },
  },
};
export default config;
