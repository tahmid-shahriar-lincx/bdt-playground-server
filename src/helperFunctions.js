const rootF = args => args.a > 2

const aGtb = args => args.a < args.b

const bGta = args => args.b > args.a

const l1 = () => 1

const l2 = () => 2

const l3 = () => 3

const l4 = () => 4

const availF = [
  { label: 'root', evalF: rootF },
  { label: 'aGtb', evalF: aGtb },
  { label: 'bGta', evalF: bGta },
  { label: 'l1', evalF: l1 },
  { label: 'l2', evalF: l2 },
  { label: 'l3', evalF: l3 },
  { label: 'l4', evalF: l4 }
]

const getEvalF = evalF => {
  const node = availF.filter(e => e.label == evalF)
  console.log(node[0].evalF)
  return node[0].evalF
}

module.exports = { availF, getEvalF }
