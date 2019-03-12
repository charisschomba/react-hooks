export const delay = (time = 500) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(true);
        }, time);
    });
};
