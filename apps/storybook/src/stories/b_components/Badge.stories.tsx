import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@grasdouble/ui";

const meta = {
  title: "2. Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: [""],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      control: "text",
      description: "The text to display",
    },
    color: {
      control: "select",
      description: "The color used in the badge",
      value: "gray",
      options: ["gray", "red", "yellow", "green", "blue", "indigo", "purple"],
    },
    size: {
      control: "select",
      description: "The size of the badge",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Marketing",
    color: "gray",
    size: "small",
  },
};

export const AllColors = {
  decorators: [
    () => (
      <>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} />
        </span>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} color="red" label="Backend" />
        </span>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} color="yellow" label="QA" />
        </span>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} color="green" label="Design" />
        </span>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} color="blue" label="DevOps" />
        </span>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} color="indigo" label="UX" />
        </span>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} color="purple" label="Product" />
        </span>
      </>
    ),
  ],
};

export const AllSize = {
  decorators: [
    () => (
      <>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} label="small" />
        </span>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} size="medium" label="medium" />
        </span>
        <span style={{ margin: "0.5em" }}>
          <Badge {...Primary.args} size="large" label="large" />
        </span>
      </>
    ),
  ],
};

export const RedBadge: Story = {
  args: {
    label: "Backend",
    color: "red",
    size: "small",
  },
};

export const YellowBadge: Story = {
  args: {
    label: "QA",
    color: "yellow",
    size: "small",
  },
};

export const GreenBadge: Story = {
  args: {
    label: "Design",
    color: "green",
    size: "small",
  },
};

export const BlueBadge: Story = {
  args: {
    label: "DevOps",
    color: "blue",
    size: "small",
  },
};

export const IndigoBadge: Story = {
  args: {
    label: "UX",
    color: "indigo",
    size: "small",
  },
};

export const PurpleBadge: Story = {
  args: {
    label: "Product",
    color: "purple",
    size: "small",
  },
};
