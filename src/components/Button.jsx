export default function Button({
  children,
  variant = "primary",
  type = "button",
  ...rest
}) {
  const cls = "btn " + (variant === "outline" ? "btn-outline" : "");
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
