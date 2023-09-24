export const getAvatarSizeClasses = (size?: string) => {
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

export const getAvatarTypeClasses = (variant?: string) => {
  switch (variant) {
    case "circle":
      return "rounded-full";
    case "square":
      return "rounded-md";
    default:
      return "rounded-full";
  }
};

export const getNotificationColorClasses = (color?: string) => {
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

export const getNotificationSizeClasses = (size: string) => {
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

export const getNotificationPositionClasses = (
  variant?: string,
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
  switch (variant) {
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
