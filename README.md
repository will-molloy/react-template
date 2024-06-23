# react-template

[![build](https://github.com/will-molloy/react-template/workflows/build/badge.svg?event=push)](https://github.com/will-molloy/react-template/actions?query=workflow%3Abuild)
[![codecov](https://codecov.io/gh/will-molloy/react-template/branch/main/graph/badge.svg)](https://codecov.io/gh/will-molloy/react-template)

template repo for React projects

## Features

- React + Typescript + [Vite](https://vitejs.dev/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions) CICD, with deployment to [GitHub Pages](https://pages.github.com/)
- Code linting/formatting via [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- Test support via [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/react)
- Code coverage reporting via [Codecov](https://codecov.io/)
- Dependency upgrades via [Renovate bot](https://renovatebot.com)

## Usage

- Click [Use this template](https://github.com/will-molloy/react-template/generate)
  - This will prompt you to create a new repo with all the files setup
- Rename the project (currently `react-template`) to your liking
- Configure GitHub Pages to point at the `gh-pages` branch
- Delete anything you won't use
- Update the README
- Other non-code setup like your GitHub branch protections
- **NOTE:** if creating a private repo, you probably want to disable the windows and mac builds

### Install dependencies and start

```bash
pnpm install
pnpm dev
```

### Format code

```bash
pnpm lint --fix
```

### Deploy

**TBD**

The site will be available at: `https://{username}.github.io/{repo-name}/`
