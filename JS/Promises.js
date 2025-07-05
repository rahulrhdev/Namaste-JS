Sure! Here's a clear explanation with examples for each of the following:
✅ `Promise.all`
✅ `Promise.allSettled`
✅ `Promise.race`
✅ `Promise.any`

---

### ✅ 1. `Promise.all`

**Waits for *all* promises to fulfill, or rejects if *any* fails.**

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => console.log('All fulfilled:', results))
  .catch(error => console.error('One failed:', error));
```

🧠 If one fails:

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.reject('Error!');
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(error => console.error('Rejected:', error)); // "Error!"
```

---

### ✅ 2. `Promise.allSettled`

**Waits for all promises to settle (either fulfill or reject), and gives the status/result of each.**

```javascript
const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Fail');
const p3 = Promise.resolve('Done');

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
```

🖨️ Output:

```js
[
  { status: 'fulfilled', value: 'Success' },
  { status: 'rejected', reason: 'Fail' },
  { status: 'fulfilled', value: 'Done' }
]
```

---

### ✅ 3. `Promise.race`

**Returns the result (fulfilled/rejected) of the *first settled* promise.**

```javascript
const p1 = new Promise(res => setTimeout(res, 500, 'One'));
const p2 = new Promise(res => setTimeout(res, 100, 'Two'));

Promise.race([p1, p2])
  .then(result => console.log('First to finish:', result));
```

🖨️ Output:

```
First to finish: Two
```

---

### ✅ 4. `Promise.any`

**Returns the *first fulfilled* promise. Ignores rejections. Rejects only if all promises fail.**

```javascript
const p1 = Promise.reject('Err1');
const p2 = Promise.reject('Err2');
const p3 = Promise.resolve('Success!');

Promise.any([p1, p2, p3])
  .then(result => console.log('First fulfilled:', result))
  .catch(error => console.error('All failed:', error));
```

🖨️ Output:

```
First fulfilled: Success!
```

If all fail:

```javascript
Promise.any([Promise.reject('A'), Promise.reject('B')])
  .catch(err => console.error('All failed:', err));
```

🧠 Will throw an `AggregateError`.

---

Let me know if you want **visual timelines**, or real-world examples like **API calls or loading images**.
