import adjustFontColor from './adjustFontColor';

describe('foo', () => {
  it('should return #ffffff', () => {
    expect(adjustFontColor('#12AA36')).toEqual('#ffffff');
  });
  it('should return #111111', () => {
    expect(adjustFontColor('#c9f3d1')).toEqual('#111111');
  })
});
