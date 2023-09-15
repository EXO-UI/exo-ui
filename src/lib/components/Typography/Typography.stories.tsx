import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Base/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      defaultValue: "body1",
    },
    element: {
      defaultValue: "p",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Display1: Story = {
  args: {
    children: "Display1",
    variant: "display1",
  },
};

export const Display2: Story = {
  args: {
    children: "Display2",
    variant: "display2",
  },
};

export const Headline1: Story = {
  args: {
    children: "Headline1",
    variant: "headline1",
  },
};

export const Headline2: Story = {
  args: {
    children: "Headline2",
    variant: "headline2",
  },
};

export const Headline3: Story = {
  args: {
    children: "Headline3",
    variant: "headline3",
  },
};

export const Headline4: Story = {
  args: {
    children: "Headline4",
    variant: "headline4",
  },
};

export const Headline5: Story = {
  args: {
    children: "Headline5",
    variant: "headline5",
  },
};

export const Headline6: Story = {
  args: {
    children: "Headline6",
    variant: "headline6",
  },
};

export const Body1: Story = {
  args: {
    children: "Body1",
    variant: "body1",
  },
};

export const Body2: Story = {
  args: {
    children: "Body2",
    variant: "body2",
  },
};

export const Lead: Story = {
  args: {
    children: "Lead",
    variant: "lead",
  },
};

export const Blockquote: Story = {
  args: {
    children: "Blockquote",
    variant: "blockquote",
  },
};

export const Capitalized: Story = {
  args: {
    children: "Capitalized",
    variant: "capitalized",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    variant: "small",
  },
};

export const Tiny: Story = {
  args: {
    children: "Tiny",
    variant: "tiny",
  },
};
