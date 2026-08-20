import type { ContactFormBoxInputProps } from "./contactData";

export default function ContactFormBoxInput({
  props,
  className = "gap-2",
}: {
  props: ContactFormBoxInputProps;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 relative group ${className}`}>
      {" "}
      <span className="text-sm font-mono uppercase text-gray-400">
        {props.label}
      </span>
      {props.type === "textarea" ? (
        <textarea
          required
          placeholder={props.placeholder}
          className="h-32 outline-none"
        />
      ) : (
        <input
          type={props.type}
          required
          placeholder={props.placeholder}
          className="outline-none"
        />
      )}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300"></div>
    </label>
  );
}
