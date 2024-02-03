import Character from '../class/Character';

describe('Character creation', () => {
    test('should create a Character correctly', () => {
      const character = new Character('Hero', 'Bowman');
      const correctCharacter = {
        name: 'Hero',
        type: 'Bowman',
        health: 100,
        level: 1,
      };
  
      expect({
        name: character.name,
        type: character.type,
        health: character.health,
        level: character.level
      }).toEqual(correctCharacter);
    });
  
    test('should throw an error for incorrect name length', () => {
      expect(() => new Character('A', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
      expect(() => new Character('LongerThanTenChars', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    });
  
    test('should throw an error for incorrect type', () => {
      expect(() => new Character('Hero', 'Unknown')).toThrow('Некорректный тип персонажа');
    });
  });