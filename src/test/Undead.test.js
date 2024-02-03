import Undead from '../class/Undead.js';

describe('Undead creation', () => {
  test('should create a Undead correctly', () => {
    const undead = new Undead('Oleg', 'Undead');
    const correctUndead = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Oleg',
    type: 'Undead',
  };

  expect(undead).toEqual(correctUndead);
});
});

