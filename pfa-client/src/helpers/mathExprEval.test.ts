import toFixedEval, { accurateFixed } from './mathExprEval';

describe('mathExprEval', () => {
  it('should return the correct thing', () => {
    expect(accurateFixed(12.39525, 2)).toEqual(12.4);
  });

  it('12+5 should be evaluated to 17', () => {
    expect(toFixedEval('12+5')).toEqual(17);
  });

  it('12+5-4.23-1.98+6 should be evaluated to 17', () => {
    expect(toFixedEval('24+5-4.23-1.98+6')).toEqual(28.79);
  });

  it('5.6-1.2+38-2.13 should be evaluated to 17', () => {
    expect(toFixedEval('5.6-1.2+38-2.13')).toEqual(40.27);
  });
});
