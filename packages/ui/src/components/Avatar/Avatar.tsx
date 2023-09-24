import {
  getAvatarSizeClasses,
  getAvatarTypeClasses,
  getNotificationSizeClasses,
  getNotificationColorClasses,
  getNotificationPositionClasses,
} from "./AvatarHelpers";

export interface AvatarProps {
  avatar: {
    variant?: "circle" | "square";
    imgURL: string;
  };
  notification?: {
    color: "none" | "green" | "orange" | "red" | "gray";
    position: "top" | "bottom";
  };
  size?:
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "2xlarge"
    | "3xlarge"
    | "4xlarge";
}

/** Avatar component */
export const Avatar = ({
  avatar,
  notification = { color: "none", position: "top" },
  size = "small",
}: AvatarProps) => {
  return (
    <span className="relative inline-block">
      <img
        className={`${getAvatarSizeClasses(size)} ${getAvatarTypeClasses(
          avatar.variant
        )} ring-2 ring-white`}
        src={avatar.imgURL}
        alt=""
      />
      {notification?.color && notification.color !== "none" && (
        <span
          className={`absolute right-0 block rounded-full ring-2 ring-white ${getNotificationSizeClasses(
            size
          )} ${getNotificationColorClasses(
            notification?.color
          )} ${getNotificationPositionClasses(
            avatar.variant,
            notification?.position
          )}`}
        />
      )}
    </span>
  );
};
