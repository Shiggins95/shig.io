import React from 'react';
import '../../../SHIG_Styles/SHIG_QuoteWizard_Style.css';
import { useTransition, animated } from 'react-spring';
import WizardStep from '../SHIG_Wizard_Components/SHIG_WizardStep_Component';
import { useDispatch, useSelector } from 'react-redux';
import { stepOneInputs, stepThreeInputs, stepTwoInputs } from '../../../SHIG_Data/wizardFields';
import { generateFields } from '../../../SHIG_Helpers/generationHelper';

const GetQuoteWizard = () => {
  const dispatch = useDispatch();
  const wizardState = useSelector((state) => state.wizardReducer);
  const { currentStep, direction, steps } = wizardState;
  const { showLabels, title } = steps[currentStep];
  generateFields(stepOneInputs);
  const setupInputs = (inputs) => {
    inputs.forEach((input) => {
      input.defaultValue = steps[currentStep][input.id];
      input.showLabel = showLabels[input.id];
    });
  };

  const mapping = {
    0: stepOneInputs,
    1: stepTwoInputs,
    2: stepThreeInputs
  };

  setupInputs(mapping[currentStep]);

  const transitions = useTransition(currentStep, (p) => p, {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: direction === 'right' ? '100vw' : '-100vw'
    },
    enter: () => async (next) => {
      await next({
        opacity: 1,
        transform: 'translate3d(100%,0,0)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '-80vw'
      });
    },
    leave: () => async (next) => {
      await next({
        opacity: 0,
        transform: 'translate3d(100%,0,0)',
        position: 'absolute',
        width: '0',
        height: '100%',
        left: direction === 'right' ? '-100vw' : '100vw'
      });
    }
  });
  return currentStep !== null ? (
    <div id="quote_wizard">
      {transitions.map(({ props, key }) => {
        return (
          <animated.div style={{ ...props }} key={key}>
            <WizardStep inputs={mapping[currentStep]} title={title} />
          </animated.div>
        );
      })}
    </div>
  ) : null;
};

GetQuoteWizard.propTypes = {};

export default GetQuoteWizard;
