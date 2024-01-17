import Bowman from '../class/Bowman.js';
import Character from '../class/Character.js'; 

describe('Character creation', () => {
  test('should create a Character correctly', () => {
    const character = new Character('Hero', 'Bowman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw an error for incorrect name length', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('LongerThanTenChars', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('should throw an error for incorrect type', () => {
    expect(() => new Character('Hero', 'Unknown')).toThrow('Некорректный тип персонажа');
  });
});

describe('Inherited character classes', () => {
  test('should create a Bowman correctly', () => {
    const bowman = new Bowman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});
