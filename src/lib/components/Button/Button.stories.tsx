import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  parameters: {
    layout: "centered",
    controls: { exclude: ["Icon", "reverse"], sort: "requiredFirst" },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content of the button.",
    },
    variant: {
      options: ["default", "outlined", "rounded", "rounded-outlined", "icon"],
      control: { type: "select", default: "default" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio", default: "medium" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
    size: "medium",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: "outlined",
    size: "medium",
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    variant: "rounded",
    size: "medium",
  },
};

export const RoundedOutlined: Story = {
  args: {
    children: "Rounded Outlined",
    variant: "rounded-outlined",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    variant: "default",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    variant: "default",
    size: "small",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "default",
    size: "medium",
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    children: "Disabled Outlined",
    variant: "outlined",
    size: "medium",
    disabled: true,
  },
};

export const TextWithIcon: Story = {
  args: {
    children: "Text with icon",
    reverse: false,
    Icon: (
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289L10.5858 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H10.5858L8.29289 1.70711C7.90237 1.31658 7.90237 0.683418 8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L13.7071 4.29289C14.0976 4.68342 14.0976 5.31658 13.7071 5.70711L9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711Z"
          fill="white"
        />
      </svg>
    ),
  },
  parameters: {
    controls: { exclude: ["Icon"] },
  },
};

export const IconButton: Story = {
  args: {
    children: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Icon">
          <path
            id="Vector"
            d="M15.2222 1H2.77778C1.79594 1 1 1.79594 1 2.77778V15.2222C1 16.2041 1.79594 17 2.77778 17H15.2222C16.2041 17 17 16.2041 17 15.2222V2.77778C17 1.79594 16.2041 1 15.2222 1Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="+">
            <path
              id="Vector_2"
              d="M9.00024 5V13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M5 9H13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    ),
    variant: "icon",
    "aria-label": "Add",
  },
  parameters: {
    controls: { exclude: ["children", "Icon", "reverse"] },
  },
};
