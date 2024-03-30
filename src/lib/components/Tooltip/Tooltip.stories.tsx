import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import styled from "@emotion/styled";

const IconContainer = styled.span`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.background.dark[400]};
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TooltipIcon() {
  return (
    <IconContainer tabIndex={0}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_269_2507)">
          <path
            d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666Z"
            stroke="white"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 5.33331V7.99998"
            stroke="#C7C8D9"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 10.6667H8.00667"
            stroke="#C7C8D9"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_269_2507">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconContainer>
  );
}

const meta = {
  title: "Base/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Tooltip Text",
    children: <TooltipIcon />,
  },
  argTypes: {
    position: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "select", default: "right" },
    },
    variant: {
      options: ["default", "contrast"],
      control: { type: "select", default: "default" },
    },
    children: {
      description: "The element that will trigger the tooltip",
      control: { disable: true },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};

export const DifferentPosition: Story = {
  args: {
    position: "top",
  },
};

export const ContrastVariant: Story = {
  args: {
    variant: "contrast",
  },
};

export default meta;
