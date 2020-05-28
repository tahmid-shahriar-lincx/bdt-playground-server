# Binary Decision Tree

A small utility package that takes a **Binary Decision Tree** as a JSON parameter and executes binary decision tree to return the result. The primary goal is to have a declarative way of writing binary decision trees rather than ugly nested if-else conditionals.

##### Installation 
```
    npm i @somoykhan/binary-decision-tree
```

##### Usage 
```
    const dtCore = require('@somoykhan/binary-decision-tree') 

    const tree = {
    label: 'is somoy > tahmid ?',
    data: { n: 1 },
    evalF: functionForExecution,
    children: [
      {
        label: 'is somoy.age > 21 ?',
        data: { age : 22 },
        evalF: functionForExecution2,
        children: [
          { ... }, { ... } ]
      }
    }

    const executeBDT = dtCore(tree)

    console.log(executeBDT)
```

##### Implementation 

The current implementation takes a following JSON structure where the children array will take 2 same type of object and so on. The first object of children array will be traversed if the root node evalF return true otherwise the second object of children array will be traversed : 
```
{
    label: 'is somoy > tahmid ?',
    data: { n: 1 },
    evalF: functionForExecution,
    children: [
      {
        label: 'is somoy.age > 21 ?',
        data: { age : 22 },
        evalF: functionForExecution2,
        children: [
          { ... }, { ... } 
        ]
```
###### The execution of this object expects: 
- **label: String**
- **data: Object**
- **evalF: Function**
- **children: Array**

The logic behind the execution is simple, is *evalF* function evaluates true, it will traverse the first object of *children* array, otherwise it will traverse the second object.
And it will keep traversing until the *children* property is found **null**, which are the leaf nodes.


### Pros
- Configurable
- Simple

### Cons
- No Fuzzy Logic, only works in binary decision trees
