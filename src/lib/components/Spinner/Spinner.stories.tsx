import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta = {
  title: "Base/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default", "primary"],
      description: "The color of the spinner.",
      control: { type: "select", default: "default" },
    },
    size: {
      options: ["small", "medium", "large"],
      description:
        "The size of the spinner. <br> Can also be a custom size in pixels.",
      control: { type: "select", default: "medium" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    variant: "default",
    size: "medium",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
  },
};

export const CustomSize: Story = {
  args: {
    variant: "default",
    size: 75,
  },
  argTypes: {
    size: {
      control: { type: "number", min: 0 },
    },
  },
};

export default meta;
