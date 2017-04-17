export let obj = {
    sum: (a, b) => a + b
};
// export let sum = (a, b) => a + b;

export let localSum = (a, b) => obj.sum(a, b);
