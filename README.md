# PSY HELP

## 🏃‍♂️ Simple Start

### To have better experience you should install these extentions to VS Code:

-   SVG Previewer;

-   EditorConfig for VS Code;

-   ESLint;

-   Prettier.

1. Clone the repository, run command:

    ```
    git clone https://gitlab.com/test3600025/psy-help.git
    ```

2. Install dependencies with `npm install` command at the root of the project

    ```
    npm install
    ```

3. Start project with command **`npm run start`**

    ```
    npm run start
    ```

## 🥊 Code quality

-   [husky](https://typicode.github.io/husky/) — a tool that lets you easily manage git hooks;
-   [lint-staged](https://www.npmjs.com/package/lint-staged) — run linters on git staged files;
-   [commitlint](https://commitlint.js.org/) — helps your team adhere to a commit convention;
-   [prettier](https://prettier.io/) — an opinionated code formatter;
-   [eslint](https://eslint.org/) — find problems in your JS/TS code;
-   [editorconfig](https://editorconfig.org/) — rewrite ide rules.

## 🗂 Commit convention

-   `feat: new feature`;
-   `fix(scope): bug in scope`;

### Commit types

-   `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm);
-   `ci`: Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs);
-   **`chore`: Changes which doesn't change source code or tests e.g. changes to the build process, auxiliary tools, libraries**;
-   `docs`: Documentation only changes;
-   **`feat`: A new feature**;
-   **`fix`: A bug fix**;
-   `perf`: A code change that improves performance;
-   `refactor`: A code change that neither fixes a bug nor adds a feature;
-   `revert`: Revert something;
-   `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, styles etc).

## ⚙️ Scripts

-   `lint` - run eslint to check your code;
-   `prettier` - run prettier on all project files;
-   `lint:fix` - run eslint with **--fix** flag.

## Husky flow

1. pre-push - `npm run lint`;
2. pre-commit - `npx lint-staged` that include commands `lint:fix` && `prettier`;
3. commit-msg - read `Commit convetion` section.

## Documentation

-   `app` - folder with routing
-   `assets` - folder with .svg, .png images
-   `src` - main folder with app logic and code

    -   `model` - folder with app logic like api request, redux store, slices and context for dark|light theme;

        -   `api` - api for doing requests
        -   `context` - react context for dark|light theme
        -   `store` - redux store and slices

    -   `screens` - folder where screens with their specific components live
    -   `shared` - folder which contains reusable components that are used in the app
        -   `api` - fetch wrapper
        -   `components` - this is a folder with modal chat component and it's part
        -   `constants` - folder with constants, enums and types.
        -   `lib` - folder with custom hooks and helper functions
        -   `ui` - folder with reusable ui components without logic(this components can accept props like onPress etc.)
