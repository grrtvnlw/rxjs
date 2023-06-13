"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observable$ = new rxjs_1.Observable((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(() => subscriber.next('Charlie'), 2000);
});
console.log('Observable executed');
observable$.subscribe((value) => console.log(value));
console.log('After subscribe');
