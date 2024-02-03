import Daemon from '../class/Daemon';
 

describe('Daemon creation', () => {
  test('should create a Daemon correctly', () => {
    const daemon = new Daemon('Ivan', 'Daemon');
    const correctDaemon = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Ivan',
    type: 'Daemon',
  };

  expect(daemon).toEqual(correctDaemon);
});
});
