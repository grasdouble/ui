import type { Meta, StoryObj } from "@storybook/react";

import { ResumeNotFound } from "@grasdouble/ui";

const meta = {
  title: "1. Resume/NotFound",
  component: ResumeNotFound,
  parameters: {
    layout: "centered",
  },
  tags: [""],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ResumeNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
