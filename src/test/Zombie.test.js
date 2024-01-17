import Zombie from '../class/Zombie';
import Character from '../class/Character'; 

describe('Character creation', () => {
  test('should create a Character correctly', () => {
    const character = new Character('Hero', 'Zombie');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Zombie');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw an error for incorrect name length', () => {
    expect(() => new Character('A', 'Zombie')).toThrow('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('LongerThanTenChars', 'Zombie')).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('should throw an error for incorrect type', () => {
    expect(() => new Character('Hero', 'Unknown')).toThrow('Некорректный тип персонажа');
  });
});

describe('Inherited character classes', () => {
  test('should create a Zombie correctly', () => {
    const zombie = new Zombie('Robin');
    expect(zombie.name).toBe('Robin');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});