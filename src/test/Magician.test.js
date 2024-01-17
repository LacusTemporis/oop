import Magician from '../class/Magician';
import Character from '../class/Character'; 

describe('Character creation', () => {
  test('should create a Character correctly', () => {
    const character = new Character('Hero', 'Magician');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Magician');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw an error for incorrect name length', () => {
    expect(() => new Character('A', 'Magician')).toThrow('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('LongerThanTenChars', 'Magician')).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('should throw an error for incorrect type', () => {
    expect(() => new Character('Hero', 'Unknown')).toThrow('Некорректный тип персонажа');
  });
});

describe('Inherited character classes', () => {
  test('should create a Magician correctly', () => {
    const magician = new Magician('Robin');
    expect(magician.name).toBe('Robin');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});