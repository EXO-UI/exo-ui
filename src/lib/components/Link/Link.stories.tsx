import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "Base/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  args: {
    href: "#",
  },
  argTypes: {
    children: {
      description: "The content of the link.",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Default",
  },
};

export default meta;
