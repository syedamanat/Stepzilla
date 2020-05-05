import React,  { useRef, useEffect }  from 'react';
import StepZilla from "react-stepzilla";

import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';

function App(props) {

  const steps =
    [
      {name: 'Step 1', component: <Step1 />},
      {name: 'Step 2', component: <Step2 />},
      {name: 'Step 3', component: <Step3 />},
      {name: 'Step 4', component: <Step4 />}
    ]
    const refs = useRef(null);

    function stepChange(e){
      console.log(e)
    }
  return (
    <div className='step-progress'>
      <StepZilla
      ref={refs}
      showNavigation={true} 
      showSteps={false} 
      dontValidate={false} 
      preventEnterSubmission={true} 
      startAtStep={0} 
      onStepChange={stepChange} 
      steps={steps}
      hocValidationAppliedTo= {[0]}
     />
    </div>
  );
}

export default App;
