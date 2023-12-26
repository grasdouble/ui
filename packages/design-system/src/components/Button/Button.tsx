// Define a component using Tailwind CSS
import { getButtonClasses } from "./ButtonHelpers";

import "./Button.css";
export interface ButtonProps {
  label: string;
  variant: "solid" | "text" | "link" | "dashed";
  danger?: boolean;
  disabled?: boolean;
  size: "xsmall" | "small" | "medium" | "large";
}

/** Button component */
export const Button = ({
  label,
  variant = "solid",
  danger = false,
  disabled = false,
  size,
}: ButtonProps) => {
  const buttonClasses = getButtonClasses(variant, danger, disabled, size);

  return <button className={`${buttonClasses}`}>{label}</button>;
};
