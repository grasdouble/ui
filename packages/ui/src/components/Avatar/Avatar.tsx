import { getAvatarClasses, getNotificationClasses } from "./AvatarHelpers";

import "./Avatar.css";

export interface AvatarImageProps {
  variant?: "circle" | "square";
  imgURL: string;
}
export interface AvatarNotificationProps {
  color: "none" | "green" | "orange" | "red" | "gray";
  position: "top" | "bottom";
}
export interface AvatarProps {
  avatar: AvatarImageProps;
  notification?: AvatarNotificationProps;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
}

/** Avatar component */
export const Avatar = ({
  avatar,
  notification = { color: "none", position: "top" },
  size = "medium",
}: AvatarProps) => {
  const { variant, imgURL } = avatar;
  const { color, position } = notification;
  return (
    <span className="relative inline-block">
      <img
        className={`${getAvatarClasses(variant, size)}`}
        src={imgURL}
        alt=""
      />
      {color && color !== "none" && (
        <span
          className={`${getNotificationClasses(
            size,
            variant,
            color,
            position
          )}`}
        />
      )}
    </span>
  );
};
