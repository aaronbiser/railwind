/* eslint-disable */
import React from 'react';
import classnames from 'classnames';

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

var getClassNamesFromProp = function (value) {
    return Array.isArray(value) ? value.join(' ') : value;
};
var getClassNames = function (value) {
    var _a;
    if (!value)
        return {};
    return _a = {}, _a[getClassNamesFromProp(value)] = true, _a;
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

var Div = function (_a) {
    var _b;
    var 
    // Element props
    forwardRef = _a.forwardRef, _c = _a.as, as = _c === void 0 ? 'div' : _c, _d = _a.container, container = _d === void 0 ? false : _d, onClick = _a.onClick, 
    // HTMLPrimitiveProps
    id = _a.id, children = _a.children, cursor = _a.cursor, dataTestId = _a.dataTestId, pointerEvents = _a.pointerEvents, 
    // LayoutProps
    display = _a.display, flex = _a.flex, position = _a.position, zIndex = _a.zIndex, width = _a.width, height = _a.height, margin = _a.margin, padding = _a.padding, float = _a.float, 
    // AppearanceProps
    opacity = _a.opacity, shadow = _a.shadow, overflow = _a.overflow, borderRadius = _a.borderRadius, style = _a.style, _e = _a.className, className = _e === void 0 ? '' : _e, 
    // BackgroundProps
    bgColor = _a.bgColor, 
    // BorderProps
    borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, borderColor = _a.borderColor, outline = _a.outline, 
    // FontProps
    font = _a.font, fontSize = _a.fontSize, leading = _a.leading, textAlign = _a.textAlign, textDecoration = _a.textDecoration, tracking = _a.tracking, textColor = _a.textColor, 
    // TransitionProps
    _f = _a.transition, 
    // TransitionProps
    transition = _f === void 0 ? { property: 'transition-none' } : _f;
    var classNames = classnames(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, container ? { 'container': true } : {}), getClassNames(cursor)), getClassNames(pointerEvents)), getClassNames(as === 'span' ? 'inline-block' : display)), getClassNames(flex)), getClassNames(position)), getClassNames(zIndex)), getClassNames(width)), getClassNames(height)), getClassNames(margin)), getClassNames(padding)), getClassNames(float)), getClassNames(opacity)), getClassNames(shadow)), getClassNames(overflow)), getClassNames(borderRadius)), getClassNames(bgColor)), getClassNames(borderStyle)), getClassNames(borderWidth)), getClassNames(borderColor)), getClassNames(outline)), getClassNames(font)), getClassNames(fontSize)), getClassNames(leading)), getClassNames(textAlign)), getClassNames(textDecoration)), getClassNames(tracking)), getClassNames(textColor)), getTransitionClassNames(transition)), (_b = {}, _b[className] = true, _b)));
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
    return (React.createElement(Div, __assign({}, props, { as: props.as || 'div', display: props.display || 'block' }), props.children));
};

var Image = function (_a) {
    var src = _a.src, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement("img", { src: src, className: className }));
};

export { Box, Image };
