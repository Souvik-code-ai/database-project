import  { forwardRef } from "react";

interface ButtonProps {
  title: string;
  functionName?: () => void;
  style?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, functionName, style }, ref) => {
    return (
      <div>
        <button
          className={style}
          onClick={functionName}
          ref={ref}
        >
          {title}
        </button>
      </div>
    );
  }
);

export default Button;
