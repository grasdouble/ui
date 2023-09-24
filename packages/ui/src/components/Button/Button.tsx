// Define a component using Tailwind CSS
import { getTailwindColor, getTailwindSize } from "../Button/ButtonHelpers";

interface ButtonProps {
  label: string;
  variant: "solid" | "text" | "link" | "dashed";
  danger?: boolean;
  disabled?: boolean;
  size: "x-small" | "small" | "medium" | "large";
}

/** Button component */
export const Button = ({
  label,
  variant = "solid",
  danger = false,
  disabled = false,
  size,
}: ButtonProps) => {
  const { bgColorClass, textColorClass, shadowColorClass, extraClass } =
    getTailwindColor(variant, danger, disabled);
  const sizeClass = getTailwindSize(size);

  return (
    <button
      className={`${sizeClass} ${bgColorClass} ${textColorClass} ${shadowColorClass} ${extraClass}`}
    >
      {label}
    </button>
  );
};
