class Class {
    private privateNum: number;
    public publicString: string;
    public publicStringWithDefaultVal: string = "";
    protected protectedField: boolean = !!0;

    get a() { return 5; }
}

class Child extends Class {
    foo(): boolean | number {
        return this.protectedField || this.a;
    }
}
//
// class GrandChild extends Child {
//     bar() {
//         return this.privateNum;
//     }
// }
