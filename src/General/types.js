export const isEqualType = (a, b) => {
    if (typeof a === 'object' && Object.hasOwnProperty(a, 'type')) {
        return isEqualType(a.type, b);
    }
    if (typeof b === 'object' && Object.hasOwnProperty(b, 'type')) {
        return isEqualType(a, b.type);
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a === b;
    }
    return false;
};