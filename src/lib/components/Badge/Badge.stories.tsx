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
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="white"/></svg>',
  },
};

export const Reversed: Story = {
  args: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="white"/></svg>',
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
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="white"/></svg>',
  },
};

export const SmallReversed: Story = {
  args: {
    size: "small",
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="white"/></svg>',
    reverse: true,
  },
};

export default meta;
