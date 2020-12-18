/* eslint-disable */
import React, { useState, useCallback, useLayoutEffect } from 'react';
import classnames from 'classnames';
import useOnclickOutside from 'react-cool-onclickoutside';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var isTestEnv = function () {
    return process.env.NODE_ENV === 'test';
};
var getClassNamesFromProp = function (value) {
    return Array.isArray(value) ? value.join(' ') : value;
};
var getClassNames = function (value) {
    var _a;
    if (!value)
        return {};
    return _a = {}, _a[getClassNamesFromProp(value)] = true, _a;
};
/**
 * Pass all props and return a classname string
 *
 * @param props
 */
var getAllClassNames = function (props) {
    var _a, _b;
    if (!props)
        return '';
    // skip these props
    var skip = ['children', 'transition'];
    var classNames = {};
    // add classNames if they are passed
    if (props.className) {
        classNames = (_a = {},
            _a[props.className] = true,
            _a);
    }
    if (props.transition) {
        classNames = __assign(__assign({}, classNames), getTransitionClassNames(props.transition));
    }
    for (var prop in props) {
        if (!skip.includes(prop)) {
            classNames = __assign(__assign({}, classNames), (_b = {}, _b[getClassNamesFromProp(props[prop])] = true, _b));
        }
    }
    return classnames(classNames);
};
var getTransitionClassNames = function (transitionProps) {
    var _a;
    var classNames = '';
    var checkPropsAndAddToClassNames = function (props) {
        if (((props === null || props === void 0 ? void 0 : props.property) !== 'transition-none' && (props === null || props === void 0 ? void 0 : props.duration)) || (props === null || props === void 0 ? void 0 : props.timing)) {
            classNames = classNames + " " + props.duration + " " + props.timing + " " + props.property;
        }
    };
    // if array of transition props are passed then handle each obj
    if (Array.isArray(transitionProps)) {
        for (var index = 0; index < transitionProps.length; index++) {
            checkPropsAndAddToClassNames(transitionProps[index]);
        }
    }
    else {
        // if single object is passed then check object for correct props and return
        checkPropsAndAddToClassNames(transitionProps);
    }
    return _a = {}, _a[classNames] = true, _a;
};

var Anchor = function (_a) {
    var rwStyle = _a.rwStyle, props = __rest(_a, ["rwStyle"]);
    var handleOnClick = function (e) {
        if (props.preventDefault) {
            e.preventDefault();
        }
        props.onClick && props.onClick(e);
    };
    return (React.createElement("a", __assign({}, props, { ref: props.forwardRef, "data-testid": props.dataTestId, onClick: handleOnClick, className: getAllClassNames(rwStyle) }), props.children));
};

var Div = function (_a) {
    var _b;
    var _c = _a.as, as = _c === void 0 ? 'div' : _c, _d = _a.container, container = _d === void 0 ? false : _d, forwardRef = _a.forwardRef, id = _a.id, dataTestId = _a.dataTestId, style = _a.style, onClick = _a.onClick, children = _a.children, rwStyle = _a.rwStyle;
    var classNames = classnames(__assign(__assign(__assign({}, getClassNames(as === 'span' ? 'inline-block' : rwStyle === null || rwStyle === void 0 ? void 0 : rwStyle.display)), container ? { 'container': true } : {}), (_b = {}, _b[getAllClassNames(rwStyle)] = true, _b)));
    return React.createElement(as, {
        id: id,
        ref: forwardRef,
        'data-testid': dataTestId,
        className: classNames,
        style: style,
        onClick: onClick
    }, children);
};

var Box = function (props) {
    var _a;
    return (React.createElement(Div, __assign({}, props, { as: props.as || 'div', rwStyle: __assign(__assign({}, props.rwStyle), { display: ((_a = props === null || props === void 0 ? void 0 : props.rwStyle) === null || _a === void 0 ? void 0 : _a.display) || 'block' }) }), props.children));
};

var Button = function (_a) {
    var rwStyle = _a.rwStyle, props = __rest(_a, ["rwStyle"]);
    rwStyle = __assign(__assign({}, rwStyle), { textAlign: 'text-center', display: 'block' });
    var derivedProps = __assign(__assign({ ref: props.forwardRef, id: props.id, 'data-testid': props.dataTestId, className: getAllClassNames(rwStyle), style: props.style, children: props.children }, !props.href ? {
        type: 'submit',
        onClick: function (e) { return props.onClick && props.onClick(e); }
    } : null), props.href ? {
        href: props.href,
        // Using target="_blank" without rel="noopener noreferrer" is a security risk: 
        // see https://mathiasbynens.github.io/rel-noopenereslint(react/jsx-no-target-blank)
        target: '_self',
        rel: 'noopener noreferrer'
    } : null);
    return React.createElement(props.href ? 'a' : 'button', derivedProps);
};

/* global DOMRect */
function getBoundingClientRect (node) {
    return node && node.getBoundingClientRect();
}

/* global HTMLElement */
function getDimensionObject(node) {
    var rect = getBoundingClientRect(node);
    return {
        width: (rect === null || rect === void 0 ? void 0 : rect.width) || 0,
        height: (rect === null || rect === void 0 ? void 0 : rect.height) || 0,
        top: (rect === null || rect === void 0 ? void 0 : rect.top) || 0,
        left: (rect === null || rect === void 0 ? void 0 : rect.left) || 0,
        x: (rect === null || rect === void 0 ? void 0 : rect.x) || 0,
        y: (rect === null || rect === void 0 ? void 0 : rect.y) || 0,
        right: (rect === null || rect === void 0 ? void 0 : rect.right) || 0,
        bottom: (rect === null || rect === void 0 ? void 0 : rect.bottom) || 0
    };
}
function useDimensions(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.liveMeasure, liveMeasure = _c === void 0 ? true : _c, _d = _b.active, active = _d === void 0 ? false : _d;
    var _e = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        x: 0,
        y: 0,
        right: 0,
        bottom: 0
    }), dimensions = _e[0], setDimensions = _e[1];
    var _f = useState(null), node = _f[0], setNode = _f[1];
    var ref = useCallback(function (node) {
        setNode(node);
    }, []);
    useLayoutEffect(function () {
        if (node || isTestEnv()) {
            var measure_1 = function () {
                return window.requestAnimationFrame(function () {
                    return setDimensions(getDimensionObject(node));
                });
            };
            measure_1();
            if (liveMeasure) {
                window.addEventListener('resize', measure_1);
                window.addEventListener('mousewheel', measure_1);
                return function () {
                    window.removeEventListener('resize', measure_1);
                    window.removeEventListener('mousewheel', measure_1);
                };
            }
        }
    }, [active]);
    return [ref, dimensions, node];
}

var useDropdownToggleDimensions = function useDropdownToggleDimensions(isActive) {
    return useDimensions({ active: isActive });
};
var useDropdownContentDimensions = function useDropdownContentDimensions(isActive) {
    return useDimensions({ active: isActive, liveMeasure: true });
};
var exportFunctions = {
    useDimensions: useDimensions,
    useDropdownToggleDimensions: useDropdownToggleDimensions,
    useDropdownContentDimensions: useDropdownContentDimensions
};

var BASE_STYLES = {
    TEXT_COLOR: 'text-gray-700',
    BORDER_RADIUS: 'rounded-md',
    BORDER: {
        borderColor: 'border-gray-400',
        borderWidth: 'border',
        borderStyle: 'border-solid',
    }
};

var DROPDOWN = 'DROPDOWN';
var DROPDOWN_TOGGLE = 'DROPDOWN_TOGGLE';
var DROPDOWN_CONTENT = 'DROPDOWN_CONTENT';
var getPositionOffsets = function (isLeft, isBottom, toggleDim, dropdownDim) {
    return {
        left: (toggleDim && dropdownDim ? toggleDim.right - (isLeft ? dropdownDim.width : toggleDim.width) : 0) + "px",
        top: (isBottom ? toggleDim.bottom : toggleDim.top - dropdownDim.height) + "px"
    };
};
var getIsBottom = function (vertical) { return vertical === 'bottom'; };
var getIsLeft = function (horizontal) { return horizontal === 'left'; };
var DropdownToggle = function (_a) {
    var _b = _a.useDefaultStyles, useDefaultStyles = _b === void 0 ? true : _b, dataTestId = _a.dataTestId, toggle = _a.toggle, dropdownContent = _a.dropdownContent, _c = _a.dropdownAlignment, dropdownAlignment = _c === void 0 ? {
        vertical: 'bottom',
        horizontal: 'left'
    } : _c, _d = _a.dropdownPosition, dropdownPosition = _d === void 0 ? 'absolute' : _d;
    var _e = useState(false), isActive = _e[0], setIsActive = _e[1];
    // get toggle dimensions
    var _f = exportFunctions.useDropdownToggleDimensions(isActive), toggleRef = _f[0], toggleDim = _f[1];
    // get dropdown dimensions
    var _g = exportFunctions.useDropdownContentDimensions(isActive), dropdownContentRef = _g[0], dropdownContentDim = _g[1];
    var ref = useOnclickOutside(function () { return setIsActive(false); });
    var handleClickBtn = function () { return setIsActive(!isActive); };
    var isBottom = getIsBottom(dropdownAlignment.vertical);
    var isLeft = getIsLeft(dropdownAlignment.horizontal);
    var dropdownStyles = dropdownPosition === 'fixed'
        ? __assign({ zIndex: 10 }, getPositionOffsets(isLeft, isBottom, toggleDim, dropdownContentDim)) : __assign(__assign({ zIndex: 100 }, isBottom ? { top: '100%' } : { bottom: '100%' }), isLeft ? { left: 'auto', right: 0 } : { left: 0, right: 'auto' });
    return (React.createElement(Box, { forwardRef: ref, dataTestId: dataTestId || DROPDOWN, rwStyle: {
            position: 'relative',
            display: 'inline-block'
        } },
        React.createElement(Box, { dataTestId: DROPDOWN_TOGGLE, forwardRef: toggleRef, onClick: handleClickBtn, rwStyle: __assign({}, useDefaultStyles ? {
                cursor: 'cursor-pointer',
                bgColor: 'bg-white',
                borderColor: isActive ? BASE_STYLES.BORDER.borderColor : [BASE_STYLES.BORDER.borderColor, 'hover:border-gray-500'],
                borderStyle: BASE_STYLES.BORDER.borderStyle,
                borderWidth: BASE_STYLES.BORDER.borderWidth,
                shadow: isActive ? 'shadow-sm' : ['shadow-sm', 'hover:shadow-lg'],
                borderRadius: BASE_STYLES.BORDER_RADIUS,
                textColor: BASE_STYLES.TEXT_COLOR,
                fontWeight: 'font-semibold',
                padding: ['px-4', 'py-2']
            } : {}) }, typeof toggle === 'function' ? toggle(isActive) : toggle),
        React.createElement(Box, { dataTestId: DROPDOWN_CONTENT, forwardRef: dropdownContentRef, style: __assign({ display: isActive ? 'block' : 'none', position: dropdownPosition }, dropdownStyles), rwStyle: __assign({}, useDefaultStyles ? __assign(__assign({ margin: 'my-2', bgColor: 'bg-white' }, BASE_STYLES.BORDER), { borderRadius: BASE_STYLES.BORDER_RADIUS, shadow: 'shadow-lg', textColor: BASE_STYLES.TEXT_COLOR, padding: ['px-4', 'py-2'] }) : {}) }, dropdownContent)));
};

var Image = function (_a) {
    var rwStyle = _a.rwStyle, props = __rest(_a, ["rwStyle"]);
    return (React.createElement("img", __assign({}, props, { ref: props.forwardRef, "data-testid": props.dataTestId, className: getAllClassNames(rwStyle) })));
};

var Text = function (_a) {
    var forwardRef = _a.forwardRef, id = _a.id, dataTestId = _a.dataTestId, style = _a.style, onClick = _a.onClick, children = _a.children, rwStyle = _a.rwStyle;
    return (React.createElement("p", { ref: forwardRef, id: id, "data-testid": dataTestId, style: style, onClick: onClick, className: getAllClassNames(rwStyle) }, children));
};

export { Anchor, Box, Button, DropdownToggle, Image, Text };
