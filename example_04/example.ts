interface IPerson {
    name: string;
    age?: number;
    foo?: (number: number) => string;
    arr?: Array<string>
}

class Person implements IPerson {
    [x: number]: String;
}

// class Person implements IPerson {
//     public readonly name = "";
//     arr = ["asd"];
//
//     foo(number: number): string {
//         return "";
//     }
// }
