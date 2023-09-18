import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  title: "Base/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "extraLarge",
    initials: "HR",
  },
  argTypes: {
    size: {
      required: true,
      defaultValue: "extraLarge",
      control: {
        type: "select",
        options: ["tiny", "small", "medium", "large", "extraLarge"],
      },
    },
    status: {
      control: {
        type: "radio",
        options: ["active", "inactive"],
      },
    },
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Image: Story = {
  args: {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6q1sSJClIv9OuONIcOpFFQUAlbIr6g94oMgsYZp58wkIjaXGF",
  },
};

export const Status: Story = {
  args: {
    status: "active",
  },
};

export default meta;
