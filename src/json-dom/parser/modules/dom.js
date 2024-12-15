import React from 'react';

const dom = (node, key = null) => {
    if (!node) return null;

    const { e: element, p: props = {}, c: children, selfClosing } = node;

    if (selfClosing) {
        return React.createElement(element, { ...props, key });
    }

    const processedChildren = Array.isArray(children)
        ? children.map((child, index) => dom(child, index))
        : children;

    return React.createElement(element, { ...props, key }, processedChildren);
};

export default dom;