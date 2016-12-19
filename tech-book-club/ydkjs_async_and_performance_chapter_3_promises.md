--

# YDKJS: Async & Performance
## Chapter 3: Promises

---

# Overview
* What is a Promise?
* Thenable Duck Typing
* Promise Trust
* Chain Flow
* Error Handling
* Promise Patterns
* Promise Limitations
* Promise API Recap

---

# More Fun Overview
* I, Promise
* If it Quacks like a Promise...
* Circle of Trust
* Smooth like Butter
* Oopsie
* Pretty Patterns
* No One's Perfect
* Promise API Recap
* Exercise Problems


---

# I, Promise

* Wrapper around a future value (or error)
* Internally, use callbacks resolve, reject
* All operations become async
* "Uninversion of control"
* Resovled `Promise` is immutable

---

# If it Quacks like a Promse...

* Use "thenables" to perfom type checking
* `then` is now a reserved word

---

# Circle of Trust

* Promises basically solve all problems associated with callbacks...
* ...but there are some edgecases
* Don't rely on ordering of multiple callbacks
* Explicit race condition with `Promise.race([..])`
* Multiple paramters in reject/resolve will be silently ignored - must be wrapped in array/object
* Error handling behaviour follows from immutability of resolved Promises
* `Promise.resolve(..)` will always return a genuine Promise 
* Good pattern to wrap all async tasks with `Promise.resolve(..)`

---

# Smooth like Butter

* Two basic behaviours,
	1. Calling `then(..)` on a Promise creates and returns a new, chainable Promise
	2. First parameter of `then(..)` is set a fulfillment
* `then(..)` will happily unwrap received Promise
* Catch error at any step of Promise chain
* Substitutes missing fulfilment/rejection handler

---

# Terminology: Resolve, Fulfill, and Reject

* Promise callbacks
	-  resolve = 'fulfilled' || 'rejected'
	-  reject = 'rejected'
* Basically first callback of `Promise` consistent with unwrapping behaviour of `Promise.resolve(..)`
* `reject` callback doesn't deal with unwrapping 
* Then callbacks, always true
	- fulfilled
	- rejected

---

# Oopsie

---

# Promise Patterns

* `Promise.all([..])`
* `Promise.race([..])`
* `none([..])`, `any([..])`, `first([..])`, `last([..])`
* Async iterations

---

# No Ones Perfect

---

# Promise API Recap

* `new Promise(..)` constructor
* `reject`, `resolve` callbacks
* `Promise.resolve(..)`, `Promise.reject(..)`
* `then(..)`, `catch(..)`
* `Promise.all([..])`, `Promise([..])`
