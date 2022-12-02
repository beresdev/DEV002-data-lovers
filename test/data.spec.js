import {getCharactersFrom, createArrayObjects, filterCompare, filterAscendent, filterDescendent, countMale, countFemale} from '../src/data.js';

const data = 
  {
    characters: [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "gender": "Male",
        "house": "Gryffindor",
      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "gender": "Male",
        "house": "Ravenclaw",
      },
      {
        "id": 231,
        "name": "Silvanus Kettleburn",
        "gender": "Male",
        "house": "Hufflepuff",
      },
      {
        "id": 496,
        "name": "Zoo director",
        "gender": "Male",
        "house": null,
      },
      {
        "id": 630,
        "name": "Mafalda",
        "gender": "Female",
        "house": "Slytherin",
      }
    ]
  }

describe('getCharactersFrom', () => {
  it('is a function', () => {
    expect(typeof(getCharactersFrom)).toBe('function');
  });

  it('should return array length 5', () => {
    expect(getCharactersFrom(data)).toHaveLength(5);
  })

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => getCharactersFrom(undefined)).toThrow(TypeError);
    expect(() => getCharactersFrom(null)).toThrow(TypeError);
  })
});

describe('createArrayObjects', () => {
  it('is a function', () => {
    expect(typeof(createArrayObjects)).toBe('function')
  });

  it('should return an array of objects with name and house properties only even if a property does not exist', () => {
    expect(createArrayObjects(data)).toEqual ([
      {"gender":"Male", "house": "Gryffindor", "name": "Euan Abercrombie"},
      {"gender":"Male", "house": "Ravenclaw", "name": "Stewart Ackerley"},
      {"gender":"Male","house": "Hufflepuff", "name": "Silvanus Kettleburn"}, 
      {"gender":"Male","house": null, "name": "Zoo director"}, 
      {"gender":"Female","house": "Slytherin", "name": "Mafalda"},
    ])
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => createArrayObjects(undefined)).toThrow(TypeError);
    expect(() => createArrayObjects(null)).toThrow(TypeError);
  })

});

describe ('filterCompare', () => {
  it('is a function', () => {
    expect(typeof(filterCompare)).toBe('function')
  });

  it('should compare every element of an array with an string', () => {
    expect(filterCompare(data.characters, 'euan')).toEqual([
      {
        "id": 1,
        "gender":"Male", 
        "house": "Gryffindor", 
        "name": "Euan Abercrombie"
      }
    ]);

    expect(filterCompare(data.characters, 'ZOO')).toEqual(
      [
        {
          "id": 496,
          "name": "Zoo director",
          "gender": "Male",
          "house": null,
        }
      ]);

    expect(filterCompare(data.characters, 'A')).toEqual([
      {"gender":"Male", "house": "Gryffindor", "id": 1, "name": "Euan Abercrombie"},
      {"gender":"Male", "house": "Ravenclaw", "id": 2,"name": "Stewart Ackerley"},
      {"gender":"Male","house": "Hufflepuff", "id": 231,"name": "Silvanus Kettleburn"}, 
      {"gender":"Female","house": "Slytherin", "id": 630,"name": "Mafalda"},
    ])
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => filterCompare(undefined,0)).toThrow(TypeError);
    expect(() => filterCompare(null,null)).toThrow(TypeError);
  })
});

describe("filter characters in ascendent sort", () => {
  it("is function", () => {
    expect(typeof(filterAscendent)).toBe('function');
  });

  it("sort list", () => {
    let result = filterAscendent(data.characters);

    expect(result).toEqual([
      {"gender":"Male", "house": "Gryffindor", "id": 1, "name": "Euan Abercrombie"},
      {"gender":"Female","house": "Slytherin", "id": 630,"name": "Mafalda"},
      {"gender":"Male","house": "Hufflepuff", "id": 231,"name": "Silvanus Kettleburn"}, 
      {"gender":"Male", "house": "Ravenclaw", "id": 2,"name": "Stewart Ackerley"},
      {"gender":"Male","house": null,  "id": 496,"name":"Zoo director"} 
    ])
  });

  it("should throw TypeError when invoked with wrong argument types", ()=> {
    expect(() => filterAscendent(undefined)).toThrow(TypeError);
    expect(() => filterAscendent(null)).toThrow(TypeError);
  })
});

describe("filter characters in descendent sort", () => {
  test("is function", () => {
    expect(typeof(filterDescendent)).toBe('function');
  });

  test("sort list", () => {

    let result = filterDescendent(data.characters);

    expect(result).toEqual([
      {"gender":"Male","house": null,  "id": 496,"name":"Zoo director"},
      {"gender":"Male", "house": "Ravenclaw", "id": 2,"name": "Stewart Ackerley"},
      {"gender":"Male","house": "Hufflepuff", "id": 231,"name": "Silvanus Kettleburn"}, 
      {"gender":"Female","house": "Slytherin", "id": 630,"name": "Mafalda"},
      {"gender":"Male", "house": "Gryffindor", "id": 1, "name": "Euan Abercrombie"}
    ])
  });

  test("should throw TypeError when invoked with wrong argument types", ()=> {
    expect(() => filterDescendent(undefined)).toThrow(TypeError);
    expect(() => filterDescendent(null)).toThrow(TypeError);
  });
});

describe ("countMale", () => {
  it('is a function', () => {
    expect(typeof(countMale)).toBe('function');
  });

  it('should returns 3', () => {
    expect(countMale(data.characters)).toBe(4)
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => countMale(undefined)).toThrow(TypeError);
    expect(() => countMale(null)).toThrow(TypeError);
  });
});

describe ("countFemale", () => {
  it('is a function', () => {
    expect(typeof(countFemale)).toBe('function');
  });

  it('should returns 2', () => {
    expect(countFemale(data.characters)).toBe(1)
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => countFemale(undefined)).toThrow(TypeError);
    expect(() => countFemale(null)).toThrow(TypeError);
  })
});