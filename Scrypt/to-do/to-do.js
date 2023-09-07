// creandon las variables y llamando a los elementos
const inputElement = document.getElementById('input');
const listaElement = document.getElementById('lista');
const addTaskButton = document.getElementById('addTask');

//funcion para agregar elementos a la lista
addTaskButton.addEventListener('click', function() {
    const taskValue = inputElement.value;

    if (taskValue === "") return; // En caso de que el imput este vacio

    const taskElement = document.createElement('li'); //creando el li
    
    //Asignandole un span y una classe
    const textSpan = document.createElement('span'); // Crear un elemento span.
    textSpan.textContent = taskValue;  // Establecer el contenido de texto del span.
    taskElement.appendChild(textSpan); //Agrega el span al li.

    //Boton listo
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '&#10003';
    completeButton.className = "ready";
    completeButton.addEventListener('click', function() {
        taskElement.classList.toggle('completed');
    });
    taskElement.appendChild(completeButton);

    //Boton borrar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Del';
    deleteButton.className = "del";
    deleteButton.addEventListener('click', function() {
        listaElement.removeChild(taskElement);
    });
    taskElement.appendChild(deleteButton);

    listaElement.appendChild(taskElement);
    inputElement.value = ''; //Limpiar imput
});
