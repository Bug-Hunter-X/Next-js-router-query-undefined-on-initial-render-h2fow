# Next.js router.query undefined on initial render

This repository demonstrates a common issue in Next.js applications where `router.query` is undefined on the initial render of a component.  This typically happens when accessing route parameters before the component has fully hydrated.

The `bug.js` file shows the problematic code, and `bugSolution.js` provides a working solution using the `router.isReady` property.