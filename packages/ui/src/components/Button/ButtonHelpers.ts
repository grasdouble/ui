export const getTailwindColor = (
  variant: string,
  danger: boolean,
  disabled: boolean
) => {
  let bgColorClass =
    "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2 transition-colors ease-in duration-400 transition-colors ";
  let textColorClass = "";
  let shadowColorClass = "";
  let extraClass = "";

  if (disabled) {
    bgColorClass +=
      variant != "link" ? "bg-gray-100 border-gray-200 border-2 " : "";
    textColorClass += "text-gray-400 focus-visible:outline-gray-300 ";
    shadowColorClass += "shadow-md shadow-gray-100";
    extraClass += "cursor-not-allowed ";
    switch (variant) {
      case "link":
        bgColorClass += "bg-white-400 ";
        textColorClass += "";
        shadowColorClass = "";
        break;
      case "dashed":
        bgColorClass += "border-dashed";
        break;
      case "text":
      case "solid":
      default:
        bgColorClass += "border-2";
        break;
    }
    return { bgColorClass, textColorClass, shadowColorClass, extraClass };
  }
  if (danger) {
    switch (variant) {
      case "text":
        bgColorClass +=
          "bg-white-400 border-red-300 border-2 hover:bg-red-100 focus-visible:outline-red-500";
        textColorClass = "text-red-500";
        shadowColorClass = "shadow-md shadow-red-100";
        break;
      case "dashed":
        bgColorClass +=
          "bg-white-400 border-red-300 border-2 border-dashed hover:bg-red-100 focus-visible:outline-red-500";
        textColorClass = "text-red-500";
        shadowColorClass = "shadow-md shadow-red-100";
        break;
      case "link":
        bgColorClass += "bg-white-400 focus-visible:outline-red-500";
        textColorClass =
          "text-red-500 hover:underline-offset-2 hover:underline";
        shadowColorClass = "";
        break;
      case "solid":
      default:
        bgColorClass +=
          "bg-red-400 hover:bg-red-500 focus-visible:outline-red-500";
        textColorClass = "text-white";
        shadowColorClass = "shadow-md shadow-red-100";
    }
    return { bgColorClass, textColorClass, shadowColorClass };
  }

  bgColorClass += "focus-visible:outline-blue-500 ";

  switch (variant) {
    case "text":
      bgColorClass += "bg-white-400 border-blue-300 border-2 hover:bg-blue-100";
      textColorClass = "text-blue-500";
      shadowColorClass = "shadow-md shadow-blue-100";
      break;
    case "dashed":
      bgColorClass +=
        "bg-white-400 border-blue-300 border-2 border-dashed hover:bg-blue-100";
      textColorClass = "text-blue-500";
      shadowColorClass = "shadow-md shadow-blue-100";
      break;
    case "link":
      bgColorClass += "bg-white-400";
      textColorClass = "text-blue-500 hover:underline-offset-2 hover:underline";
      shadowColorClass = "";
      break;
    case "solid":
    default:
      bgColorClass += "bg-blue-400 hover:bg-blue-500";
      textColorClass = "text-white";
      shadowColorClass = "shadow-md shadow-blue-100";
  }

  return { bgColorClass, textColorClass, shadowColorClass };
};

export const getTailwindSize = (size: string) => {
  switch (size) {
    case "x-small":
      return "px-1 py-1 text-xs font-semibold rounded";
    case "small":
      return "px-3 py-1 text-sm font-semibold rounded";
    case "large":
      return "px-8 py-3 text-lg font-semibold rounded";
    case "medium":
    default:
      return "px-4 py-2 text-md font-semibold rounded";
  }
};
