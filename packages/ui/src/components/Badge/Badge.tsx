interface BadgeProps {
  size?: "small" | "medium" | "large";
  label: string;
  color:
    | "gray"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "purple"
    | "pink";
}

const getTailwindColor = (color: string) => {
  //match color to tailwind color
  let bgColorClass = "";
  let textColorClass = "";
  let shadowColorClass = "";
  switch (color) {
    case "red":
      bgColorClass = "bg-red-50";
      textColorClass = "text-red-600";
      shadowColorClass =
        "shadow-inner shadow-red-500/50 dark:shadow-md dark:shadow-red-500/50";
      break;
    case "yellow":
      bgColorClass = "bg-yellow-50";
      textColorClass = "text-yellow-600";
      shadowColorClass =
        "shadow-inner shadow-yellow-500/50 dark:shadow-md dark:shadow-yellow-500/50";
      break;
    case "green":
      bgColorClass = "bg-green-50";
      textColorClass = "text-green-600";
      shadowColorClass =
        "shadow-inner shadow-green-500/50 dark:shadow-md  dark:shadow-green-500/50";
      break;
    case "blue":
      bgColorClass = "bg-blue-50";
      textColorClass = "text-blue-600";
      shadowColorClass =
        "shadow-inner shadow-blue-500/50 dark:shadow-md dark:shadow-blue-500/50";
      break;
    case "indigo":
      bgColorClass = "bg-indigo-50";
      textColorClass = "text-indigo-600";
      shadowColorClass =
        "dark:shadow-md shadow-inner shadow-indigo-500/50 dark:shadow-md dark:shadow-indigo-500/50";
      break;
    case "purple":
      bgColorClass = "bg-purple-50";
      textColorClass = "text-purple-600";
      shadowColorClass =
        "shadow-inner shadow-purple-500/50 dark:shadow-md dark:shadow-purple-500/50";
      break;
    case "pink":
      bgColorClass = "bg-pink-50";
      textColorClass = "text-pink-600";
      shadowColorClass =
        "shadow-inner shadow-pink-500/50 dark:shadow-md dark:shadow-pink-500/50";
      break;
    case "gray":
    default:
      bgColorClass = "bg-gray-50";
      textColorClass = "text-gray-600";
      shadowColorClass =
        "shadow-inner shadow-gray-500/50 dark:shadow-md dark:shadow-gray-500/50";
      break;
  }
  return { bgColorClass, textColorClass, shadowColorClass };
};

const getTailwindSize = (size: string) => {
  let sizeClass = "text-sm font-medium";
  switch (size) {
    case "small":
      sizeClass = "text-xs font-medium";
      break;
    case "medium":
      sizeClass = "text-sm font-medium";
      break;
    case "large":
      sizeClass = "text-base font-medium";
      break;
    default:
      sizeClass = "text-sm font-medium";
      break;
  }
  return sizeClass;
};

/** Badge component */
export const Badge = ({
  size = "medium",
  label,
  color = "gray",
  ...props
}: BadgeProps) => {
  const { bgColorClass, textColorClass, shadowColorClass } =
    getTailwindColor(color);
  const sizeClass = getTailwindSize(size);

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 ${bgColorClass} ${sizeClass} ${textColorClass} ring-1 ring-inset ring-gray-500/10 shadow-black ${shadowColorClass}`}
    >
      {label}
    </span>
  );
};
