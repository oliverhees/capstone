import { useState } from "react";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";

const MultiStepForm = ({ setFormData, formData }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <Step1
          nextStep={nextStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {currentStep === 2 && (
        <Step2
          nextStep={nextStep}
          setFormData={setFormData}
          formData={formData}
          prevStep={prevStep}
        />
      )}
      {currentStep === 3 && (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {currentStep === 4 && <Step4 nextStep={nextStep} setFormData={setFormData}
          formData={formData}/>}
    </div>
  );
};

export default MultiStepForm;
