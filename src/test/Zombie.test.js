import Zombie from '../class/Zombie';

describe('Zombie creation', () => {
  test('should create a Zombie correctly', () => {
    const zombie = new Zombie('Nikita', 'Zombie');
    const correctZombie = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Nikita',
    type: 'Zombie',
  };

  expect(zombie).toEqual(correctZombie);
});
});