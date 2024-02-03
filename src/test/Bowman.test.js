import Bowman from '../class/Bowman.js';

describe('Bowman creation', () => {
  test('should create a Bowman correctly', () => {
    const bowman = new Bowman('Robin', 'Bowman');
    const correctBowman = {
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(bowman).toEqual(correctBowman);
  });
});