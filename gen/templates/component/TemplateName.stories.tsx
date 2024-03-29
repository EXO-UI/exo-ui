import type { Meta, StoryObj } from "@storybook/react";
import { TemplateName } from "./TemplateName";

const meta = {
  title: "Base/TemplateName",
  component: TemplateName,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof TemplateName>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};

export default meta;
