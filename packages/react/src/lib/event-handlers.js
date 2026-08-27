export const preventTriggerPointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
};
