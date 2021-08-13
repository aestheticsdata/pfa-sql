import toFixedEval, { accurateFixed } from './mathExprEval';

describe('accurateFixed', () => {
  it('should return the correct rounding', () => {
    expect(accurateFixed(12.39525, 2)).toEqual(12.4);
  });
});

describe('toFixedEval', () => {
  it('3 should be evaluated to 3', () => {
    expect(toFixedEval('3')).toEqual(3);
  });

  it('4.82 should be evaluated to 4.82', () => {
    expect(toFixedEval('4.82')).toEqual(4.82);
  });

  it('12+5 should be evaluated to 17', () => {
    expect(toFixedEval('12+5')).toEqual(17);
  });

  it('12-5 should be evaluated to 7', () => {
    expect(toFixedEval('12-5')).toEqual(7);
  });

  it('12+5-4.23-1.98+6 should be evaluated to 28.79', () => {
    expect(toFixedEval('24+5-4.23-1.98+6')).toEqual(28.79);
  });

  it('5.6-1.2+38-2.13 should be evaluated to 40.27', () => {
    expect(toFixedEval('5.6-1.2+38-2.13')).toEqual(40.27);
  });

  it('abcd should return NaN', () => {
    expect(toFixedEval('abcd')).toEqual(NaN);
  });
});
