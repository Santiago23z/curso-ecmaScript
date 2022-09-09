class Persona {
    constructor(nombre, edad, estatura, fecha_nacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.estatura = estatura;
        this.fecha_nacimiento = fecha_nacimiento;
    }
    // funciiones de la persona

    saludos () {
       return 'holass';
    }
    Presentacion () {
        return `${this.saludos()}, mi nombre es ${this.nombre} tengo ${this.edad} y mi fecha de nacimiento es ${this.fecha_nacimiento}`;
    }
}

const santiagoPresenta = new Persona('Santiago', 17, 1.76, '23/12/2004');
console.log(santiagoPresenta.Presentacion());

export default Persona;