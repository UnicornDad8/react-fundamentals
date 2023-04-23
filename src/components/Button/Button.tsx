import style from "./Button.module.css";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <div
      className={`${style["btn"]} ${style["btn-" + color]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
