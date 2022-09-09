class perro {
    constructor (name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    ladrar() {
        return 'GUAAAAAUUUUUU!'
    }

    saludoPerro() {
        return `${this.ladrar()}, soy ${this.name} y tengo ${this.age} años, sere tu amigo de estatura ${this.height}`;

    }
}

const Venus = new perro('venus', 2, '28.8 cm');
console.log(Venus.saludoPerro());