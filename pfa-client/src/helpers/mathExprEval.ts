export const applyMinus = (s: string): string => {
  if (s.indexOf('-') === -1) return s;
  return s
    .split('-')
    .reduce((acc, curr, idx) => {
      if (idx === 0) return +curr;
      return acc - +curr;
    }, 0)
    .toFixed(2);
}

const mathExprEval = (expr: string): string => expr
  .split('+')
  .map(s => applyMinus(s))
  .reduce((acc, curr) => acc + +curr, 0)
  .toFixed(2);

export default mathExprEval;



