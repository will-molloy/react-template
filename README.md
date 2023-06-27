# react-template

[![build](https://github.com/will-molloy/react-template/workflows/build/badge.svg?event=push)](https://github.com/will-molloy/react-template/actions?query=workflow%3Abuild)
[![release](https://github.com/will-molloy/react-template/workflows/release/badge.svg?event=push)](https://github.com/will-molloy/react-template/actions?query=workflow%3Arelease)
[![codecov](https://codecov.io/gh/will-molloy/react-template/branch/main/graph/badge.svg)](https://codecov.io/gh/will-molloy/react-template)

template repository for React projects

## Usage
* Go to: https://github.com/will-molloy/react-template/generate
  * This will prompt you to create a new repository with all the files setup
* Rename the project (currently `react-template`) to your liking
* Configure GitHub Pages to point at the `gh-pages` branch
* Create your README
* Delete anything you won't use

#### Install dependencies and start
```
npm i
npm start
```

#### Format code
```
npm run eslint -- --fix
npm run stylelint -- --fix
```

#### Deploy
```
npm run deploy
```
The site will be available at: `https://{username}.github.io/{repo-name}/`
