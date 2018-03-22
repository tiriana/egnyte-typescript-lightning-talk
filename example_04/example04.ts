interface IPerson {
    name: string;
    age?: number;
    foo?: (number: number) => string;
    arr?: Array<string>
}

interface IRadek extends IPerson {
    isRadek: boolean;
}

class Radek implements IRadek {
    isRadek = true;
    name = "radek";
}

// class Person implements IPerson {
//     public readonly name = "";
//     arr = ["asd"];
//
//     foo(number: number): string {
//         return "";
//     }
// }
