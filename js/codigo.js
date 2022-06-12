class Curso {
    constructor(titulo, profesor, precio, categoria, nivel, puntuacion, descuento, vendido) {
        this.titulo = titulo;
        this.profesor = profesor;
        this.precio = precio;
        this.categoria = categoria;
        this.nivel = nivel;
        this.puntuacion = puntuacion;
        this.descuento = descuento;
        this.vendido = vendido;
    }
    mostrarDatos() {
        return (`Título:  \t\t${this.titulo}\nProfesor: \t${this.profesor} \nCategoría: \t${this.categoria}\nNivel: \t\t${this.nivel} \nPRECIO: \t${this.precio} €`);
    }

    comprarCurso(arrayCursosDisponibles, arrayCursos) {
        if (this.vendido == false) {
            let curso = arrayCursosDisponibles.find(curso => curso.titulo === this.titulo);
            arrayCursos.push(curso);
            alert(`Ha añadido a su cesta el curso: ${this.titulo}`);
            this.vendido = true;
        } else {
            alert("Este curso ya está en su cesta.");
        }
    }
}

//Instancias de los objetos de la clase Cursos
const curso1 = new Curso("HTML5", "Juanita López", 99, "Desarrollo Web", "Principiante", 0, 0, false);
const curso2 = new Curso("CSS3", "Juanita López", 149, "Desarrollo Web", "Medio", 0, 0, false);
const curso3 = new Curso("JavaScript", "Cristian Hourcade", 199, "Programación", "Medio", 0, 0, false);
const curso4 = new Curso("React", "Cristian Hourcade", 149, "Programación", "Avanzado", 0, 0, false);
const curso5 = new Curso("SEO", "Juan Chapur", 99, "Marketing", "Avanzado", 0, 0, false);
const curso6 = new Curso("CopyWriting", "Juan Chapur", 99, "Marketing", "Principiante", 0, 0, false);

//VARIABLES
let cursosDisponibles = [curso1, curso2, curso3, curso4, curso5, curso6];
let cursos = [];
let nombre;
    
//FUNCION PARA COMPRAR CURSOS
function comprar(cursosDisponibles, cursos) {
    let repetir = true;
    let curso;
    let menu = "Selecciona el curso del que quieres obtener información o pulsa 0 para finalizar:\n\t1. " +  curso1.titulo + "\n\t2. " +  curso2.titulo + "\n\t3. " +  curso3.titulo + "\n\t4. " +  curso4.titulo + "\n\t5. " +  curso5.titulo + "\n\t6. " +  curso6.titulo + "\n\t0. Finalizar\n\n"; 

    let opcion = parseInt(prompt(menu));
    
    while(repetir) {
        if (opcion >= 0 && opcion <=6) {
            if (opcion != 0) {
                curso = cursosDisponibles[opcion-1];
                console.log("Curso: ")
                console.log(curso);
                let confirmacion = confirm(curso.mostrarDatos() + "\n\n¿Deseas añadir este curso a tu carrito?"); 

                if (confirmacion) {
                    curso.comprarCurso(cursosDisponibles, cursos);
                    console.log(cursos);
                    opcion = parseInt(prompt(menu));
                } else {
                    opcion = parseInt(prompt(menu));
                }  
            } else {
                alert("Has seleccionado finalizar compra");
                repetir = false;
            }
        } else {
            alert("No has insertado una opción válida");
            opcion = parseInt(prompt(menu));
        }
    }
}

function finalizarCompra(cursos) {
    //Mostrar datos de los cursos añadidos al carrito
    let mensaje = "";
    cursos.forEach(curso => mensaje += curso.mostrarDatos() + "\n\n");
    
    //Precio total a pagar de los cursos añadidos al carrito
    let total = cursos.reduce((acumulador, curso) => acumulador + curso.precio, 0);
    if (cursos.length != 0) {
        let finalizacion = confirm(`${cursos.length} cursos añadidos a tu carrito:\n\n${mensaje}\nEl total a pagar es:\n\n${total} €\n\n¿Quieres efectuar la compra?`);
    
        if (finalizacion) {
            alert(`Compra realizada con éxito. Hasta tu próxima visita`);
        } else {
            alert(`Has cancelado la compra. Hasta tu próxima visita`);
        }
    } else {
        alert(`No hay cursos en el carrito. Hasta tu próxima visita`);
    }
    
}

//Llamar a las funciones
comprar(cursosDisponibles, cursos);
finalizarCompra(cursos);