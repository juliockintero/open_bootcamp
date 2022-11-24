class Estudiante {

    _nombre;
    _asignarutas = ['Javascript', 'HTML', 'CSS'];

    constructor() {
        this._nombre = 'Julio Cesar'
    }


    obtenDatos() {
        return {
            nombre: this._nombre,
            asignaturas: this._asignarutas
        }
        //'Mi nombre es '+ this._nombre +' y mis asignaturas son: '+ this._asignarutas
    }

}

nuevoEstudiante = new Estudiante;

console.log(nuevoEstudiante.obtenDatos())