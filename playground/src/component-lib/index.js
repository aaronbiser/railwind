/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

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

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var StyledMyComponent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (p) { return p.color || 'pink'; });
var MyComponent = function (_a) {
    var text = _a.text, color = _a.color;
    return (React.createElement(StyledMyComponent, { color: color }, text));
};
var templateObject_1;

var StyledMyComponent$1 = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (p) { return p.color || 'pink'; });
var Meh = function (_a) {
    var text = _a.text, color = _a.color;
    return (React.createElement(StyledMyComponent$1, { color: color }, text));
};
var templateObject_1$1;

export { Meh, MyComponent };
