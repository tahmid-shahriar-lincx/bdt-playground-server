const { getEvalF } = require('./helperFunctions')
var returingDecision = 0

const traverseChildren = tree => {
  const bool = getEvalF(tree.evalF)(tree.data)
  if (bool) {
    if (!tree.children) {
      console.log(`reached leaf end with ${bool} for label: ${tree.label}`)
      bool > 0 ? (returingDecision = bool) : (returingDecision = 0)
    } else {
      console.log(
        `traversing decision returned ${bool} for label: ${tree.label}`
      )
      traverseChildren(tree.children[0])
    }
  } else {
    if (!tree.children) {
      console.log(`reached leaf end with ${bool} for label: ${tree.label}`)
      bool > 0 ? (returingDecision = bool) : (returingDecision = 0)
    } else {
      console.log(
        `traversing decision returned ${bool} for label: ${tree.label}`
      )
      traverseChildren(tree.children[1])
    }
  }

  return returingDecision
}

const executeTree = tree => {
  returingDecision = 0

  const bool = getEvalF(tree.evalF)(tree.data)
  if (bool) {
    console.log(`root decision returned ${bool} for label ${tree.label}`)
    traverseChildren(tree.children[0])
  } else {
    console.log(`root decision returned ${bool} for label ${tree.label}`)
    traverseChildren(tree.children[1])
  }

  return returingDecision
}

module.exports = executeTree
