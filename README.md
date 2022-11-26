# Katzen Turborepo starter

```
cd katzen
nvm use
```

## Запуск

```
yarn install
yarn dev
```

## CodeGen

В папке web

```
yarn gen:watch
```

## TODO

- tailwind-prettier-plugin +
- graphql client +
- modern module resolution ++/-
- tweak configs +
- develop some kind of dev conventions ...
- layout "/app" - droped at least for 4-6 months due to unstability of new features of next 13
- dark mode ...
- now web uses graphql@^15 because of strapi-graphql dependent on version 15. Migrate both workspaces to graphql@^16 !!!
- ladel installed
- big cleanup +/-
- docuemnt via mdx at least parts that can be difficult to understand
- create docs folder where project will be documented
- code splitting
- next-auth! package is great. we just meed to makd sense pf it.
- separate user management from other app
- don't include default gql client
- make possible to use urql and react query as gql plugin. Prefer react-query
- make sense of rustywind
- make use of .vscode folder
- remove data.attributes from strapi's responses if possible
- simplify
- remove some configs
- remove packages if possible
- configure strapi
- brand strapi
- more configs in ladel
- adopt [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)
- add ci/cd
- figure out how to sort package json only in own folders

## NOTES

pnpm just doesn't work, so yarn is used

## What's inside?

TODO: what's inside

### Apps and Packages

- `cms`: ...
- `web`: ...
- `play`: ...
- `ui`: a stub React component library shared `web` application
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [rustywind]()

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
