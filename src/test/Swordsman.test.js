import Swordsman from '../class/Swordsman';
import Character from '../class/Character'; 

describe('Character creation', () => {
  test('should create a Character correctly', () => {
    const character = new Character('Hero', 'Swordsman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Swordsman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw an error for incorrect name length', () => {
    expect(() => new Character('A', 'Swordsman')).toThrow('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('LongerThanTenChars', 'Swordsman')).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('should throw an error for incorrect type', () => {
    expect(() => new Character('Hero', 'Unknown')).toThrow('Некорректный тип персонажа');
  });
});

describe('Inherited character classes', () => {
  test('should create a Swordsman correctly', () => {
    const swordsman = new Swordsman('Robin');
    expect(swordsman.name).toBe('Robin');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});