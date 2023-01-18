//Declaracion de variables con o sin tipado
const username: string = 'rParadas';
const age = 32;

//Funcion con tipado de datos
const sum = (a: number, b: number) => {
  return a + b;
}

sum(15, 17);

//Clases y POO
class Person{
  /*age: number;
  userName: string;

  constructor(age: number, userName: string){
    this.age = age;
    this.userName = userName;
  }*/

//Reduccion de lineas de codigo
  constructor(public age: number, public userName: string){}
}

//Creacion de objeto de una clase
const nico = new Person(32, 'Paradas');

nico.userName;
