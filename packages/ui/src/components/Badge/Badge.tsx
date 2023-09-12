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
  let bgColorClass = "bg-gray-50";
  let textColorClass = "text-gray-600";
  switch (color) {
    case "red":
      bgColorClass = "bg-red-50";
      textColorClass = "text-red-600";
      break;
    case "yellow":
      bgColorClass = "bg-yellow-50";
      textColorClass = "text-yellow-600";
      break;
    case "green":
      bgColorClass = "bg-green-50";
      textColorClass = "text-green-600";
      break;
    case "blue":
      bgColorClass = "bg-blue-50";
      textColorClass = "text-blue-600";
      break;
    case "indigo":
      bgColorClass = "bg-indigo-50";
      textColorClass = "text-indigo-600";
      break;
    case "purple":
      bgColorClass = "bg-purple-50";
      textColorClass = "text-purple-600";
      break;
    case "pink":
      bgColorClass = "bg-pink-50";
      textColorClass = "text-pink-600";
      break;
    default:
      bgColorClass = "bg-gray-50";
      textColorClass = "text-gray-600";
      break;
  }
  return { bgColorClass, textColorClass };
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

export const Badge = ({
  size = "medium",
  label,
  color = "gray",
  ...props
}: BadgeProps) => {
  const { bgColorClass, textColorClass } = getTailwindColor(color);
  const sizeClass = getTailwindSize(size);

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 ${bgColorClass} ${sizeClass} ${textColorClass} ring-1 ring-inset ring-gray-500/10`}
    >
      {label}
    </span>
  );
};
