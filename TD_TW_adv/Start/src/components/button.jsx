import { cva } from "class-variance-authority";

// Base definition
const base = "inline-flex ";

const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-button-bg",
        "text-button-text",
        "font-button",
        "font-bold",
        "italic",
        "rounded",
        "hover:bg-button-hover",
      ],
      secondary: [
        "bg-red-600",
        "text-gray-200",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}

export default function Ex3_2() {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <Button intent={"primary"}>S'abonner</Button>
    </div>
  );
}
