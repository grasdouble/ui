import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@grasdouble/ui";
import { AvatarProps } from "@grasdouble/ui/src/components/Avatar/Avatar";

type AvatarPropsAndCustomArgs = React.ComponentProps<typeof Avatar> &
  AvatarProps["avatar"] &
  AvatarProps["notification"];

const meta = {
  title: "2. Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: [""],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "select",
      description: "The size of the avatar",
      options: [
        "small",
        "medium",
        "large",
        "xlarge",
        "2xlarge",
        "3xlarge",
        "4xlarge",
      ],
    },
    avatar: {
      control: "object",
      description: "The avatar object",
      table: {
        category: "Avatar",
        disable: true,
      },
    },
    notification: {
      control: "object",
      description: "The notification object",
      table: {
        category: "Notification",
        disable: true,
      },
    },
    type: {
      control: "radio",
      description: "The type of the avatar",
      options: ["circle", "square"],
      name: "avatar.type",
      table: {
        category: "Avatar",
        type: {
          summary: "circle | square",
        },
        defaultValue: {
          summary: "circle",
        },
      },
    },
    imgURL: {
      control: "text",
      description: "The image URL of the avatar",
      name: "avatar.imgURL",
      table: {
        category: "Avatar",
      },
      type: {
        required: true,
        name: "string",
      },
    },
    color: {
      control: "radio",
      description: "The color of the notification",
      options: ["none", "green", "orange", "red", "gray"],
      name: "notification.color",
      table: {
        category: "Notification",
        type: {
          summary: "none | green | orange | red | gray",
        },
        defaultValue: {
          summary: "none",
        },
      },
    },
    position: {
      control: "radio",
      description: "The position of the notification",
      options: ["top", "bottom"],
      name: "notification.position",
      table: {
        category: "Notification",
        type: {
          summary: "top | bottom",
        },
        defaultValue: {
          summary: "top",
        },
      },
    },
  },
  render: ({ type, imgURL, color, position, ...args }) => {
    args.avatar = {
      type,
      imgURL,
    };
    args.notification = {
      color,
      position,
    };

    return <Avatar {...args} />;
  },
} satisfies Meta<AvatarPropsAndCustomArgs>;

export default meta;
type Story = StoryObj<AvatarPropsAndCustomArgs>;

export const Primary: Story = {
  args: {
    size: "small",
    type: "circle",
    imgURL:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    color: "none",
    position: "top",
  },
};
