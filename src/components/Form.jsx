import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import { formInputs } from "../context/formsinput";

function Form() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess,setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({}); // To store validation errors
  const totalSteps = formInputs.length;

  const handleNextStep = () => {
    const currentPage = formInputs[currentStep];
    const newErrors = {};

    currentPage.fields.forEach((field) => {
      if (field.required && !selectedOptions[field.fieldId]) {
        newErrors[field.fieldId] = `${field.fieldName} is required`;
      }
    });

    // If there are errors, prevent advancing to the next step
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submission
    const newErrors = {};
    formInputs.forEach((page) => {
      page.fields.forEach((field) => {
        if (field.required && !selectedOptions[field.fieldId]) {
          newErrors[field.fieldId] = `${field.fieldName} is required`;
        }
      });
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Proceed with form submission logic
    setShowSuccess(true)
    console.log("Form submitted successfully!");
  };

  const handleChange = (fieldId, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [fieldId]: value,
    }));

    // Clear any existing error when the user changes the input value
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[fieldId];
      return newErrors;
    });
  };
const handleClose = () =>{
  setShowSuccess(false);
  setCurrentStep(0);

}
  const currentPage = formInputs[currentStep];

  return (
    <>
      <Header />
      <div className="main_container">
        <div className="timeline">
          {formInputs.map((_, index) => (
            <div
              key={index}
              className={`timeline-item ${index <= currentStep ? "active" : ""}`}
            >
              <div className="timeline-number">{index + 1}</div>
              <div className="timeline-title">
                {index === 0
                  ? "Borrower Info"
                  : index === 1
                  ? "Director Info"
                  : "Financial Info"}
              </div>
            </div>
          ))}
        </div>

        <div className="form_container">
          <h2 className="capitalise fs_bol_30">{currentPage.PageTitle}</h2>
          <form className="form_control" onSubmit={handleSubmit}>
            {currentPage.fields.map((field) => (
                <Input
                  label={field.fieldName}
                  type={field.type}
                  id={field.fieldId}
                  dropOptions={field.dropoptions || []}
                  placeholder={field.placeholder}
                  handlechange={(value) => handleChange(field.fieldId, value)}
                  value={selectedOptions[field.fieldId] || ""}
                  contClass={field.customClass}
                  errors={errors[field.fieldId]} // Pass error message to Input
                />
            ))}
          </form>

          <div className="navigation-buttons">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className="back_button"
            >
              Back
            </button>

            {currentStep < totalSteps - 1 ? (
              <button type="button" className="next_button" onClick={handleNextStep}>
                Continue
              </button>
            ) : (
              <button type="submit" className="next_button" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="navigation-buttons mobile">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className="back_button"
            >
              Back
            </button>

            {currentStep < totalSteps - 1 ? (
              <button type="button" className="next_button" onClick={handleNextStep}>
                Continue
              </button>
            ) : (
              <button type="submit" className="next_button" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
          {showSuccess && (
        <div className="popup_container">
          <div className="popup_modal">
            <p className="success-message">Form submitted successfully!</p>
            <button className="popupclose" onClick={handleClose}>
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
