/*
namespace Animals{
    export class Zebra { }
}

namespace Animals{
    export interface Legged {numberOflegs: number; }
    export class Dog { }
}*/

// above two can marge in one see below
namespace Animals{
    export interface Legged {numberOflegs: number; }
    export class Dog { }
    export class Zebra { }
}