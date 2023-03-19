const form = document.querySelector("#form");
const tareas = document.querySelector("#tareas");
const total = document.querySelector("#total");
const id = document.querySelector("#identificador");
const suma = document.querySelector("#suma");
const realizadas = document.querySelector("#realizadas");

// Arreglo de objetos
let arrayTareas = [
    { id: Date.now() + 1, name: "Ir al supermercado", done: false},
    { id: Date.now() + 2, name: "Estudiar para examen", done: false},
    { id: Date.now() + 3, name: "Pasear al perro", done: false},
]; 

// Creacion del variable render
const render = () => {
    total.innerHTML = "";
    let contar = 0;
    arrayTareas.forEach((item) => {
        total.innerHTML += `
<li>
${item.id} - ${item.name} 
<button onclick="eliminar(${item.id})">Eliminar</button>
<input ${item.done ? "checked" : ""} onchange="completar(${item.id})" type="checkbox">
</li>`
contar = contar + 1
;
    });

    suma.innerHTML = contar
    realizadas.innerHTML = arrayTareas.filter((item) => item.done).length
};

render();

// Creacion variable eliminar 
const eliminar = (id) => {
    arrayTareas = arrayTareas.filter((item) => item.id !== id); // filter recoorre el arreglo y verifica donde sean diferentes
    render();
};

const completar = (id) => {

    arrayTareas.forEach((item) => {
        if (item.id === id && !item.done) {
            item.done = true
        } else if (item.id === id && item.done) {
            item.done = false
        }
    }) 

    render()
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita que se ejecute por defecto
    arrayTareas.push({ 
        id: Date.now(),
        name: tareas.value, // El valor del input del form
        done: false,
    });

    render();
    tareas.value = "";
});