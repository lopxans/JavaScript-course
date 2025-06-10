/* 1. Synchronous means one task at a time — each line of code runs in order, and 
the next one waits until the current one finishes. */
console.log('sync operation 1');
console.log('sync operation 2');
console.log('sync operation 3');

/* 1. Asynchronous:- Asynchronous means non-blocking. JS can start a task, and 
continue to the next one without waiting for the previous one to finish.

* JS handles async using:
    a. setTimeout()
    b. Promises
    c. async/await
    d. APIs like fetch()*/
console.log('async operation 1');
setTimeout(() => {
    console.log('async operation 2');
}, 2000);            // 1000 milliseconds = 1 second
console.log('async operation 3');

