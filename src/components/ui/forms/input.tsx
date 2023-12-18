import React from "react";

function Input({
  label = "Label",
  placeholder = "Enter text",
  type = "text",
  value = "",
  onChange,
  btm = null,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  btm?: React.ReactNode;
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
            rows={6}
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
        {btm}
      </div>
    </label>
  );
}

export default Input;
