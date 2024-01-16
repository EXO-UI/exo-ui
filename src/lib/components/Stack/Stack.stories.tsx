import type { Meta, StoryObj } from "@storybook/react";
import { StackBox } from "./Stack";
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

function Inner(props: PropsWithChildren) {
  return (
    <div
      css={css`
        display: grid;
        place-items: center;
        width: 320px;
        height: 160px;
      `}
      {...props}
    />
  );
}

const meta: Meta<typeof StackBox> = {
  title: "Base/Stack",
  component: StackBox,
  args: {
    level: 2,
  },
  argTypes: {
    level: {
      defaultValue: 0,
      control: {
        type: "range",
        min: -1,
        max: 6,
        step: 1,
      },
    },
    children: {
      control: false,
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StackLevels: Story = {
  args: {
    children: <Inner>Some content</Inner>,
  },
};
