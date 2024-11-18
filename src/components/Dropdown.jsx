import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({
  label,
  options = [],
  placeholder = "Select an option",
  value = "",
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Handle option selection
  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className={`custom-dropdown ${className}`}>
      {/* Dropdown Header */}
      <label className="label_class">{label}</label>
      <div
        className="dropdown-header"
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
      >
         <span
          className={`placeholder ${!value ? "show-placeholder" : ""}`}
        >
          {value ? options.find((opt) => opt.value === value)?.label : placeholder}
        </span>
        {/* {value ? options.find((opt) => opt.value === value)?.label : placeholder} */}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`dropdown-option ${
                value === option.value ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
              role="option"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
