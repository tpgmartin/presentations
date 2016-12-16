---

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

# I, Promise

* Wrapper around a future value (or error)
* Internally, use callbacks resolve, reject

---

# If it Quacks like a Promse...

* Use `thenables` to perfom type checking
* `then` is now a reserved word

---

# Circle of Trust

* Promises basically solve all problems associated with callbacks...
* ...but there are some edgecases

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
