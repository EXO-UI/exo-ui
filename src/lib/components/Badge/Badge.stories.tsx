import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Base/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    controls: { exclude: ["alt"], sort: "requiredFirst" },
  },
  tags: ["autodocs"],
  args: {
    label: "label",
  },
  argTypes: {
    icon: {
      control: "text",
    },
    reverse: {
      defaultValue: false,
      control: "boolean",
    },
    size: {
      options: ["small", "large"],
      control: { type: "radio", default: "large" },
    },
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: "http://cdn.onlinewebfonts.com/svg/img_182127.png",
  },
};

export const Reversed: Story = {
  args: {
    icon: "http://cdn.onlinewebfonts.com/svg/img_182127.png",
    reverse: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const SmallWithIcon: Story = {
  args: {
    size: "small",
    icon: "http://cdn.onlinewebfonts.com/svg/img_182127.png",
  },
};

export const SmallReversed: Story = {
  args: {
    size: "small",
    icon: "http://cdn.onlinewebfonts.com/svg/img_182127.png",
    reverse: true,
  },
};

export default meta;
