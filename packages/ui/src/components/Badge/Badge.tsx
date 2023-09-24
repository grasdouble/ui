import { getTailwindColor, getTailwindSize } from "./BadgeHelpers";

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
