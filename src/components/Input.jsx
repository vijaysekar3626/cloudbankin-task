import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function Input({
  label,
  contClass,
  type,
  id,
  dropOptions,
  placeholder,
  handlechange,
  value,
  required,
  errors,
}) {
    const [error, setError] = useState("");
    const validate = () => {
        if (required && !value) {
          setError(`${label} is required`);
          return false;
        }
        setError("");
        return true;
      };
      useEffect(() => {
        // Validate when value changes
        validate();
      }, [value]);

  return (
    <>
       <div className={`input_container ${contClass}`}>
      <label htmlFor={id} className="label_class">
        {label}
      </label>
      {type === "dropdown" ? (
        <Dropdown
          options={dropOptions}
          placeholder={placeholder}
          onChange={handlechange}
          value={value}
        />
      ) : type === "textarea" ? (
        <textarea
          rows={6}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handlechange(e.target.value)} // Add this for textarea
        />
      ) : type === "file" ? (
        <>
          <input type="file" onChange={handlechange} />
          <div className="custom_file_upload">
            <div>
              <span style={{ color: "#0073FF" }}>Browse</span> or Drag and
              Drop to Upload the file
            </div>
          </div>
        </>
      ) : type === "number" ? (
        <input
          type="number"
          className="input_class"
          value={value}
          onChange={(e) => handlechange(e.target.value)} // Ensure to handle change here too
        />
      ) : type === "email" ? (
        <input
          type="email"
          className="input_class"
          value={value}
          onChange={(e) => handlechange(e.target.value)} // Add this for email
        />
      ) : type === "date" ? (
        <input
          type="date"
          className="input_class"
          value={value}
          onChange={(e) => handlechange(e.target.value)} // Add this for date
        />
      ) : (
        <input
          type={type}
          className="input_class"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handlechange(e.target.value)} // Add this for text fields
        />
      )}
      <span className="error-message" style={{visibility:errors?'visible':'hidden'}}>{errors? errors : "."}</span>
    </div>
    </>
  );
}

export default Input;
