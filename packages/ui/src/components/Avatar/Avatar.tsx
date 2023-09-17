export interface AvatarProps {
  avatar: {
    type?: "circle" | "square";
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

const getAvatarSizeClasses = (size?: string) => {
  switch (size) {
    case "small":
      return "h-8 w-8";
    case "medium":
      return "h-12 w-12";
    case "large":
      return "h-16 w-16";
    case "xlarge":
      return "h-20 w-20";
    case "2xlarge":
      return "h-24 w-24";
    case "3xlarge":
      return "h-28 w-28";
    case "4xlarge":
      return "h-32 w-32";
    default:
      return "h-6 w-6";
  }
};

const getAvatarTypeClasses = (type?: string) => {
  switch (type) {
    case "circle":
      return "rounded-full";
    case "square":
      return "rounded-md";
    default:
      return "rounded-full";
  }
};

const getNotificationColorClasses = (color?: string) => {
  switch (color) {
    case "none":
      return "";
    case "green":
      return "bg-green-400";
    case "orange":
      return "bg-orange-400";
    case "red":
      return "bg-red-400";
    case "gray":
      return "bg-gray-400";
    default:
      return "";
  }
};

const getNotificationSizeClasses = (size: string) => {
  switch (size) {
    case "small":
      return "h-2 w-2";
    case "medium":
      return "h-3 w-3";
    case "large":
      return "h-4 w-4";
    case "xlarge":
      return "h-5 w-5";
    case "2xlarge":
      return "h-6 w-6";
    case "3xlarge":
      return "h-7 w-7";
    case "4xlarge":
      return "h-8 w-8";
    default:
      return "";
  }
};

const getNotificationPositionClasses = (
  type?: string,
  position?: "top" | "bottom"
) => {
  let resultPosition = "";
  switch (position) {
    case "top":
      resultPosition = "top-0";
      break;
    case "bottom":
      resultPosition = "bottom-0";
      break;
    default:
      resultPosition = "top-0";
  }

  let result = resultPosition;
  switch (type) {
    case "circle":
      break;
    case "square":
      if (position === "top") result += " -translate-y-1/3 translate-x-1/3";
      if (position === "bottom") result += " translate-y-1/2 translate-x-1/2";
      break;
    default:
      result += "";
  }
  return result;
};

/** Badge component */
export const Avatar = ({
  avatar,
  notification = { color: "none", position: "top" },
  size = "small",
}: AvatarProps) => {
  return (
    <span className="relative inline-block">
      <img
        className={`${getAvatarSizeClasses(size)} ${getAvatarTypeClasses(
          avatar.type
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
            avatar.type,
            notification?.position
          )}`}
        />
      )}
    </span>
  );
};
