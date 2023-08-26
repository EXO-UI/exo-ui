# Installation guide (skip for now 🚧):
Currently the package is not released for end user, so we don't need this section.
# Technologies:
# For contributors 👩‍💻👨‍💻:
We are really appreciate your contributions. Here are some helpful points for to getting started:
## Setup development 💻️:
### Requirements to run 🏃‍♂️:
You need the following tools to be installed 🔧:
- `node-js` ([download link](https://nodejs.org/en/download)).
- `pnpm` ([download link](https://pnpm.io/installation)).
- `commitizen`, optional, see [commit rules](#commit-rules) ([download link](https://github.com/commitizen/cz-cli)).
- Your favorite code editor. I'm standing for VSCode (just my preference, hold on 🙀🫸). You need the following plugins:
   - `EditorConfig` ([download](https://editorconfig.org/#download)).
   - `ESLint` ([download](https://eslint.org/docs/latest/use/integrations#editors)).
   - `Prettier` ([download](https://prettier.io/docs/en/editors)).
   - `Vitest`, optional ([download](https://vitest.dev/guide/ide.html)).
### Start development 🛠️:
Clone repo using ⬇️: `git clone daniknewgarden/exo-ui` <br>
Install dependencies running 📦️: `pnpm install` <br>
Start dev mode 👩‍💻: `pnpm dev` <br>
Start Storybook to watch changes 📕: `pnpm storybook:dev` <br>
## Build your first component 🧩:
Let's quickly show you how to start building a new component 🏃‍♀️. Imagine it will be a button component 🔘.
### Organizing files 📂:
All components are stored in the `src/lib/components` folder. So, let's create a new folder here called "Button". <br>
Good, the next what you need is to create an `index.ts` file and component's file, in our case `Button.tsx`. Let's put some simple layout there. <br>
```tsx
// Button.tsx
export function Button() {
  return <button>Click me</button>;
}
```
You are doing very good. Now let's create a story file, called `Button.stories.tsx`, to develop our component 👨‍💻: <br>
```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  // other args
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    // your component props
  },
};

export default meta;

```
Here we go. Well done 🤗! Now you can see changes on storybook.

## Documentation:

## Commit rules:
We are using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to keep our commits clean and readable. <br>
Generally ou commits should look like this:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
### Making a commit:
For making a commits easier you can use some automation tool, called [commitizen](https://commitizen-tools.github.io/commitizen/). <br>
We recommend to install the `commitizen` globally via `npm i -g commitizen`. Then you can use `git cz` to make a commit. <br>
Otherwise you can use `pnpm cz` to make a semantic commit. <br>
But we still support the regular way of making a commit via `git commit` command or from your IDE. Just follow the rules of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). <br>
### Commit types:
We are using the following types:
- `feat`: for new features.
- `fix`: for bug fixes.
- `docs`: for documentation changes.
- `style`: for changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: for code changes that neither fixes a bug nor adds a feature.
- `perf`: for code changes that improves performance.
- `test`: for adding missing tests or correcting existing tests.
- `build`: for changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- `ci`: for changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
- `chore`: for other changes that don't modify src or test files.
- `revert`: for reverting commits.
## CI/CD
In progress 🚧

## Testing:
In progress 🚧

## Code rules:
In progress 🚧

## Folders structure:
In progress 🚧
