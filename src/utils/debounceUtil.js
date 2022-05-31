const debounceUtil = (debounceFunc, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        setTimeout(() => {
            debounceFunc(...args);
        }, delay);
    };
};

export { debounceUtil };