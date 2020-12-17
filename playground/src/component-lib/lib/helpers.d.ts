import { TransitionProps } from '../types';
export declare const getClassNamesFromProp: (value: any) => any;
export declare const getClassNames: (value: any) => {
    [x: number]: boolean;
};
/**
 * Pass all props and return a classname string
 *
 * @param props
 */
export declare const getAllClassNames: (props: any) => string;
export declare const getTextDecoration: (value?: "underline" | "sm:underline" | "md:underline" | "lg:underline" | "xl:underline" | "hover:underline" | "focus:underline" | "line-through" | "sm:line-through" | "md:line-through" | "lg:line-through" | "xl:line-through" | "hover:line-through" | "focus:line-through" | "no-underline" | "sm:no-underline" | "md:no-underline" | "lg:no-underline" | "xl:no-underline" | "hover:no-underline" | "focus:no-underline" | import("../types/tailwind.types").TextDecorationOptions[] | undefined) => {
    [x: string]: boolean;
};
export declare const getTransitionClassNames: (transitionProps: TransitionProps | TransitionProps[]) => {
    [x: string]: boolean;
};
