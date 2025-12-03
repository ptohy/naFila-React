export default function FeedbackMessage({ type = "info", children }) {
  const cls =
    "feedback " +
    (type === "success"
      ? "feedback-success"
      : type === "error"
      ? "feedback-error"
      : "feedback-info");

  return <div className={cls}>{children}</div>;
}
