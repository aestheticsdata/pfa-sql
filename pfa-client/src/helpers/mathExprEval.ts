// see https://www.npmjs.com/package/round-tofixed ////
export const accurateFixed = (x: number, digits: number) => {
  return +(Math.round(+(x + 'e' + digits)) + 'e-' + digits);
}
// ////////////////////////////////////////////////////

export const applyMinus = (s: string): number => {
  if (s.indexOf('-') === -1) return +s;
  const result = s
    .split('-')
    .reduce((acc, curr, idx) => {
      if (idx === 0) return +curr;
      return acc - +curr;
    }, 0);
  return accurateFixed(result, 2);
}

const mathExprEval = (expr: string): number => expr
  .split('+')
  .map(s => applyMinus(s))
  .reduce((acc, curr) => acc + +curr, 0);

const toFixedEval = (expr: string) => accurateFixed(mathExprEval(expr), 2);

export default toFixedEval;
