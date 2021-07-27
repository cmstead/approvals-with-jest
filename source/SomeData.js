class SomeData {
    constructor() {
        this.foo = 'bar';
        this.baz = 'quux';
        this.nestedObject = {
            prop1: 'a property',
            prop2: [1, 2]
        };
    }

    setValue(key, value) {
        this[key] = value;
    }

    toString() { 
        return JSON.stringify(this);
    }
}

module.exports = SomeData;