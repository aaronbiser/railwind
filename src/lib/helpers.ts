import { TextDecoration } from '../types/tailwind.types';
import { TransitionProps } from '../types';

const actionPseudoClasses = ['focus', 'hover', 'active'];

export const getClassNamesFromProp = (value: any) =>
  Array.isArray(value) ? value.join(' ') : value;

export const getClassNames = (value: any) => {
  if (!value) return {};
  return { [getClassNamesFromProp(value)]: true };
};

export const getTextDecoration = (value?: TextDecoration) => {
  if (!value) return {};
  const valueWithPseudoClasses = actionPseudoClasses
    .map(c => `${c}:${value}`)
    .join(' ');
  return { [`${value} ${valueWithPseudoClasses}`]: true };
};

export const getTransitionClassNames = (
  transitionProps: TransitionProps | TransitionProps[]
) => {
  let classNames = '';

  const checkPropsAndAddToClassNames = (props: TransitionProps) => {
    if (
      (props?.property !== 'transition-none' && props?.duration) ||
      props?.timing
    ) {
      classNames = `${classNames} ${props.duration} ${props.timing} ${props.property}`;
    }
  };

  // if array of transition props are passed then handle each obj
  if (Array.isArray(transitionProps)) {
    for (let index = 0; index < transitionProps.length; index++) {
      checkPropsAndAddToClassNames(transitionProps[index]);
    }
  } else {
    // if single object is passed then check object for correct props and return
    checkPropsAndAddToClassNames(transitionProps);
  }

  return { [classNames]: true };
};
