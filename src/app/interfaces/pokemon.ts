export interface Main {
    id:   string;
    name: Name;
    type: Type[];
    base: Base;
}


export interface Name {
    english:  string;
    japanese: string;
    chinese:  string;
    french:   string;
}

export enum Type {
    Bug = "Bug",
    Dark = "Dark",
    Dragon = "Dragon",
    Electric = "Electric",
    Fairy = "Fairy",
    Fighting = "Fighting",
    Fire = "Fire",
    Flying = "Flying",
    Ghost = "Ghost",
    Grass = "Grass",
    Ground = "Ground",
    Ice = "Ice",
    Normal = "Normal",
    Poison = "Poison",
    Psychic = "Psychic",
    Rock = "Rock",
    Steel = "Steel",
    Water = "Water",
}

export interface Base {
    HP:            number;
    Attack:        number;
    Defense:       number;
    "Sp. Attack":  number;
    "Sp. Defense": number;
    Speed:         number;
}
