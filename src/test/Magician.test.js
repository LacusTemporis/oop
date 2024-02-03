import Magician from '../class/Magician';

describe('Magician creation', () => {
  test('should create a Magician correctly', () => {
    const magician = new Magician('Merlin', 'Magician');
    const correctMagician = {
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    expect(magician).toEqual(correctMagician);
  });
});