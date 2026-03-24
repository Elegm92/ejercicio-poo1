//Ejer 1: Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(
      `Te llamas ${this.nombre}, tienes ${this.edad} y eres ${this.genero} `,
    );
  }
}
let miPersona = new Persona("Elena", 34, "mujer");
miPersona.obtDetalles();

//Ejer 2: Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registar() {
    console.log(
      `Te llamas ${this.nombre}, tienes ${this.edad} y eres ${this.genero}. Vas al curso ${this.curso} y al grupo ${this.grupo} `,
    );
  }
}
let miEstudiante = new Estudiante("Elena", 34, "mujer", 6, "A");
miEstudiante.registar();

//Ejer 3: Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
    console.log(
      `Te llamas ${this.nombre}, tienes ${this.edad} y eres ${this.genero}. Das la asignatura de ${this.asignatura} y al nivel ${this.nivel} `,
    );
  }
}
let miProfesor = new Profesor("Elena", 34, "mujer", "Historia", "alto");
miProfesor.asignar();
