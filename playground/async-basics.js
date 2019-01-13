console.log('Starting app');

//Asynchronuous code
setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Second setTimeout');
}, 0);

console.log('Finiship app');
