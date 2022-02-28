const {dateTime} = require('../utils/helpers');

test('dateTime returns the date in the right format', () => {
  const date = new Date('2022-02-28 12:00:00');

  expect(dateTime(date)).toBe('2/28/2022');
});