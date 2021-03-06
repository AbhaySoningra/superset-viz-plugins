# superset-viz-plugins
![release-workflow](https://github.com/nielsen-oss/superset-viz-plugins/workflows/release-workflow/badge.svg)

## Project Overview

#### Template repository
This repository is a [template repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) that enables you to create a custom set of plugins that by Github workflow process generate a ready to load docker image bundled with the plugins

#### Monorepo
This repository is using a monorepo strategy which lets us have one source of truth for ***many projects***. All the projects hosted here rely on the same tools.


#### Artifacts Deployment

  Npm pacakges are deployed [here](https://www.npmjs.com/search?q=%40superset-viz-plugins)

  Docker Image is deployed [here](https://hub.docker.com/r/nielsenoss/apache-superset)

## Project Stack

- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [Lerna](https://github.com/lerna/lerna)
- [Typescript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)

## Project Setup

To work with this repository you'll need to install `yarn` and `lerna` globally on your machine.

Installing `yarn`:

```bash
brew install yarn
```

Installing `lerna`:

```bash
yarn global add lerna
```

## Commands

### Bootstrap Project

To link all packages together and install all dependencies, you should use

```bash
lerna bootstrap
```

This will:

- Install all external dependencies
- Symlink together all the Lerna packages that are dependencies of each other.
- Run prepublish in all bootstrapped packages.

With the help of `yarn workspaces`, any external dependency will be installed in the root and linked to all packages instead of installed in every package on it's own.

### Adding workspace dependencies

```bash
yarn workspace <workspace_name> <command>
```

This will run the chosen Yarn command in the selected workspace.

Example:

```bash
yarn workspace @maf/b2b add @testing-library/react -D
```

This will add `@testing-library/react` as `devDependency` in your `packages/b2b/package.json`.

This command can be used to run any script you'd like on a specific workspace: `test`, `dist` and every script defined in the workspace `package.json`.

### Adding root devDependencies

```bash
yarn add @babel/cli -DW
```

This will install `@babel/cli` as a `devDependency` on the monorepo root. the `-D` is for `devDependency`, the `-W` is to install in the root.

### Running scripts on all workspaces

To run scripts on all workspaces, we use `lerna`.  
All you need to do is run `lerna run` and the script you want.

This command will run the `test` script defined in every workspace

```bash
lerna run test
```

### Running scripts on workspaces changed

```bash
lerna run test --since master
```

This will run `test` script defined in the workspaces that changed from `master` branch.

### Print all changes in workspaces

```bash
lerna diff
```

This will print all the changes from `master` by commits.

### Print which packages have been changed in workspace

```bash
lerna changed
```

This will print all packages changed from `master` by name.


## Deployment


```bash
lerna publish from-package
```

This will publish the packages that not found at the registy with the latest version.
