import Daemon from '../class/Daemon';
import Character from '../class/Character'; 

describe('Character creation', () => {
  test('should create a Character correctly', () => {
    const character = new Character('Hero', 'Daemon');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Daemon');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw an error for incorrect name length', () => {
    expect(() => new Character('A', 'Daemon')).toThrow('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('LongerThanTenChars', 'Daemon')).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('should throw an error for incorrect type', () => {
    expect(() => new Character('Hero', 'Unknown')).toThrow('Некорректный тип персонажа');
  });
});

describe('Inherited character classes', () => {
  test('should create a Daemon correctly', () => {
    const daemon = new Daemon('Robin');
    expect(daemon.name).toBe('Robin');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});