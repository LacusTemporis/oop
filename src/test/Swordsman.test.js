import Swordsman from '../class/Swordsman';

describe('Swordsman creation', () => {
  test('should create a Swordsman correctly', () => {
    const swordsman = new Swordsman('Arthur', 'Swordsman');
    const correctSwordsman = {
      name: 'Arthur',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    expect(swordsman).toEqual(correctSwordsman);
  });
});