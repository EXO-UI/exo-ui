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
    size: "extra large",
    name: "Harry Roberts",
  },
  argTypes: {
    size: {
      required: true,
      defaultValue: "extra large",
      control: {
        type: "radio",
        options: ["tiny", "small", "medium", "large", "extra large"],
      },
    },
    status: {
      control: {
        type: "radio",
        options: [undefined, "online", "offline"],
      },
    },
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Image: Story = {
  args: {
    image:
      "https://i.pinimg.com/564x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
  },
};

export const Status: Story = {
  args: {
    status: "online",
  },
};

export default meta;
