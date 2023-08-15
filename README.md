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
- Your favorite code editor. I'm standing for VSCode (just my preference, hold on 🙀🫸). You need the following plugins:
   - EditorConfig ([download](https://editorconfig.org/#download)).
   - ESLint ([download](https://eslint.org/docs/latest/use/integrations#editors)).
   - Prettier ([download](https://prettier.io/docs/en/editors)).
   - Vitest (optional, [download](https://vitest.dev/guide/ide.html)).
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
Good practice of convenient open source project are clear commits. <br>
To provide it, we could follow some rules and style guide ([more details in this article](https://drbrain.ru/articles/git-commit-message/)). <br>
**Usually the commit should looks like this:** <br>
`<type>(<scope>): <subject>`<br>
I identified the following `types` of commits:

- `feat`: new functionality or components (example: add Button component).
- `fix`: some fixes (example: fix Button on click callback).
- `docs`: docs change (example: add Button docs to storybook).
- `style`: styles change (example: change Button default radius).
- `test`: editing or creating new tests (example: add Button unit tests).
- `build`: changes with build (example: add new package).
- `chore`: changes, that the user may not see (example: change .gitignore).
- `refactor`: changes that aren't new functionality or fixes (example: change variable name).

`scope` is the changed section of the project. For example, it can be directory. <br>
`subject` is the description of your changes. Please, use only lower case letters, don't use dot at the end.

## CI/CD

## Testing:

## Code rules:

## Folders structure:
