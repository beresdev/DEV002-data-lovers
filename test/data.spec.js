import {getCharactersFrom, createArrayObjects, filterCompare, filterAscendent, filterDescendent, countMale, countFemale} from '../src/data.js';

const data = 
  {
    characters: [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Gryffindor",
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
        "books_featured_in": [5]
      },
      {
        "id": 231,
        "name": "Silvanus Kettleburn",
        "birth": "22 November, before 1927[citation needed]",
        "death": "Between 2 May, 1998 and 22 November, 2014",
        "species": "Human",
        "ancestry": "Pure-blood or half-blood",
        "gender": "Male",
        "hair_color": "Silver",
        "eye_color": "Brown",
        "wand": "Chestnut and phoenix feather, 11½\", whippy",
        "patronus": null,
        "house": "Hufflepuff",
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Hufflepuff", "Kettleburn family"],
        "books_featured_in": [3]

      },
      {
        "id": 496,
        "name": "Zoo director",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": "Muggle",
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Zoo"],
        "books_featured_in": [1]
      },
      {
        "id": 618,
        "name": "Aged witch",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Female",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        // "house": null,
        "associated_groups": ["Knockturn Alley"],
        "books_featured_in": [2]
      },
      {
        "id": 630,
        "name": "Mafalda",
        "birth": "between 1 September 1982 and 31 August 1983, Great Britain or Ireland",
        "death": null,
        "species": "Human",
        "ancestry": "Muggle-born or Half-blood (possibly)",
        "gender": "Female",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Slytherin",
        "associated_groups": ["Prewett family", "Weasley Family", "Slytherin", "Hogwarts School of Witchcraft and Wizardry"],
        "books_featured_in": [4]
      }
    ]
  }

  const array = [
    {
      house: 'Gryffindor' ,
      name: "Euan Abercrombie"
    },
    {
      house: "Hufflepuff",
      name: "Silvanus Kettleburn"
    },
    {
      house: null,
      name: "Zoo director"
    },
    {
      house: undefined, 
      name: "Aged witch"
    },

    {
      house: "Slytherin",
      name: "Mafalda"
    }
  ]

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
      {"gender":"Male","house": "Hufflepuff", "name": "Silvanus Kettleburn"}, 
      {"gender":"Male","house": null, "name": "Zoo director"}, 
      {"gender":"Female","house": undefined, "name": "Aged witch" },
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
    expect(filterCompare(array, 'euan')).toEqual([
      {
        house: 'Gryffindor' ,
        name: "Euan Abercrombie"
      }
    ])

    expect(filterCompare(array, 'ZOO')).toEqual(
      [
      {
        house: null,
        name: "Zoo director"
      }
      ])
    
    expect(filterCompare(array, 'A')).toMatchObject([
      {house: "Gryffindor",name: "Euan Abercrombie"}, 
      {house: "Hufflepuff", name: "Silvanus Kettleburn"},
      {house: undefined, name: "Aged witch" },
      {house: "Slytherin", name: "Mafalda"}
    ])
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => filterCompare(undefined,0)).toThrow(TypeError);
    expect(() => filterCompare(null,null)).toThrow(TypeError);
  })
});

describe("filter characters in ascendent sort", () => {
  test("is function", () => {
    expect(typeof(filterAscendent)).toBe('function');
  });

  test("sort list", () => {
    //given
    const arrayData = {
      characters: [
        {
          house: "Gryffindor",
          name: "Euan Abercrombie",
        },
        {
          house: "Ravenclaw",
          name: "Stewart Ackerley",
        },
        {
          house: null,
          name: "African prince",
        },
        {
          house: null,
          name: "Agnes's son",
        },
        {
          house: null,
          name: "Cornelius Agrippa",
        },
        {
          house: null,
          name: "Albino peacock",
        },
      ],
    };

    const expectedArrayData = {
      characters: [
        {
          house: null,
          name: "African prince",
        },
        {
          house: null,
          name: "Agnes's son",
        },
        {
          house: null,
          name: "Albino peacock",
        },
        {
          house: null,
          name: "Cornelius Agrippa",
        },
        {
          house: "Gryffindor",
          name: "Euan Abercrombie",
        },
        {
          house: "Ravenclaw",
          name: "Stewart Ackerley",
        },
      ],
    };

    //when
    let result = filterAscendent(arrayData.characters);

    //then
    expect(result).toStrictEqual(expectedArrayData.characters);
  });

  test("should throw TypeError when invoked with wrong argument types", ()=> {
    expect(() => filterAscendent(undefined)).toThrow(TypeError);
    expect(() => filterAscendent(null)).toThrow(TypeError);
  })
});

describe("filter characters in descendent sort", () => {
  test("is function", () => {
    expect(typeof(filterDescendent)).toBe('function');
  });

  test("sort list", () => {
    //given
    const arrayData = {
      characters: [
        {
          house: "Gryffindor",
          name: "Euan Abercrombie",
        },
        {
          house: "Ravenclaw",
          name: "Stewart Ackerley",
        },
        {
          house: null,
          name: "African prince",
        },
        {
          house: null,
          name: "Agnes's son",
        },
        {
          house: null,
          name: "Cornelius Agrippa",
        },
        {
          house: null,
          name: "Albino peacock",
        },
      ],
    };

    const expectedArrayData = {
      characters: [
        {
          house: "Ravenclaw",
          name: "Stewart Ackerley",
        },
        {
          house: "Gryffindor",
          name: "Euan Abercrombie",
        },
        {
          house: null,
          name: "Cornelius Agrippa",
        },
        {
          house: null,
          name: "Albino peacock",
        },
        {
          house: null,
          name: "Agnes's son",
        },
        {
          house: null,
          name: "African prince",
        },
      ],
    };

    //when
    let result = filterDescendent(arrayData.characters);

    //then
    expect(result).toStrictEqual(expectedArrayData.characters);
    expect(() => filterDescendent(undefined)).toThrow(TypeError);
    expect(() => filterDescendent(null)).toThrow(TypeError);
  });

  test("should throw TypeError when invoked with wrong argument types", ()=> {
    expect(() => filterDescendent(undefined)).toThrow(TypeError);
    expect(() => filterDescendent(null)).toThrow(TypeError);
  })
});

describe ("countMale", () => {
  it('is a function', () => {
    expect(typeof(countMale)).toBe('function');
  });

  it('should returns 3', () => {
    expect(countMale(data.characters)).toBe(3)
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => countMale(undefined)).toThrow(TypeError);
    expect(() => countMale(null)).toThrow(TypeError);
  })

});

describe ("countFemale", () => {
  it('is a function', () => {
    expect(typeof(countFemale)).toBe('function');
  });

  it('should returns 2', () => {
    expect(countFemale(data.characters)).toBe(2)
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => countFemale(undefined)).toThrow(TypeError);
    expect(() => countFemale(null)).toThrow(TypeError);
  })
});