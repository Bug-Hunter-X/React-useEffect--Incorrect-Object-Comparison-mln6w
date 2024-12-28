# React useEffect: Incorrect Object Comparison

This example demonstrates a common error in React's `useEffect` hook when dealing with object comparisons.  Directly comparing objects using `!==` will not reliably detect changes because it compares object references, not the values within the objects.

## Bug

The `bug.js` file shows an incorrect implementation of `useEffect`. The comparison `someObject !== previousSomeObject` will often fail to trigger the effect even when the content of `someObject` has changed, leading to unexpected behavior or potentially infinite loops if the effect attempts to update `someObject` based on its previous state.

## Solution

The `bugSolution.js` file provides a corrected version.  It utilizes `JSON.stringify` to compare the stringified versions of the objects, ensuring that changes in the object's content trigger the effect appropriately.  Alternatively, use a library like `lodash`'s `isEqual` function for deep object comparison.