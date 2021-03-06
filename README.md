# Yet Another Typescript Template

This project is meant to be used as a template. 

## Getting started

- Clone this project
- Change your remote `git remote set-url origin <new-origin>`
- Adjust the `package.json` with the correct name, description, etc.
- Make sure `tsconfig.json` matches your requirements (i.e [target](https://www.typescriptlang.org/tsconfig#target), [lib](https://www.typescriptlang.org/tsconfig#lib), etc.)
- Get cracking :muscle:

## Usage

Install dependencies:
```
npm i
```

Development (watch mode):
```
npm run dev
```

Build and run:
```
npm run build
npm start
```

### Tests

Test are run with [ava](https://github.com/avajs/ava/)

Run tests:
```
npm run test
```

Tests can be added in the `tests/` folder. This is not mandatory and if you like another arrangement better, go ahead!
More info about `ava` and `ts` [here](https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md).

