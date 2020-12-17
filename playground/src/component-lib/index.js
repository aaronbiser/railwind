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

var Image = function (_a) {
    var rwStyle = _a.rwStyle, props = __rest(_a, ["rwStyle"]);
    return (React.createElement("img", __assign({}, props, { ref: props.forwardRef, "data-testid": props.dataTestId, className: getAllClassNames(rwStyle) })));
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

var Text = function (_a) {
    var forwardRef = _a.forwardRef, id = _a.id, dataTestId = _a.dataTestId, style = _a.style, onClick = _a.onClick, children = _a.children, rwStyle = _a.rwStyle;
    return (React.createElement("p", { ref: forwardRef, id: id, "data-testid": dataTestId, style: style, onClick: onClick, className: getAllClassNames(rwStyle) }, children));
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

export { Anchor, Box, Button, Image, Text };
