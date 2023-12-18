import React from "react";

function Input({
  label = "Label",
  placeholder = "Enter text",
  type = "text",
  value = "",
  onChange,
  btn = false,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  btn?: React.ReactNode;
}) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            rows={4}
          ></textarea>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="input input-bordered w-full"
          />
        )}
        {btn && (
          <div className="absolute top-0 right-0 rounded-l-none">{btn}</div>
        )}
      </div>
    </label>
  );
}

export default Input;
