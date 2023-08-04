import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  className?: string;
  outline?: boolean;
}
const Button = ({ className, outline, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-md font-medium flex justify-center items-center transition-colors duration-150",
        " focus:outline-black-100 outline-offset-1",
        outline
          ? "bg-white hover:bg-white-400 text-black-500 border border-black-500"
          : "bg-neutral-800 text-white hover:bg-neutral-700 ",
        "h-8",
        "text-sm px-4",
        className
      )}
      {...props}
    >
      Click me
    </button>
  );
};
export default Button;
