const selectSemestre = document.querySelector('#semestre');
const tituloSemestre = document.querySelector('#titulo-semestre');
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js';
document.head.appendChild(script);
		
	selectSemestre.addEventListener('change', () => {
		const semestreSeleccionado = selectSemestre.options[selectSemestre.selectedIndex].text;
        tituloSemestre.textContent = semestreSeleccionado;
		});
        
        const tablaHorario = document.getElementById("tabla-horario");

        // Función para agregar un nuevo registro a la tabla
        function agregarRegistro() {
            // Crear una nueva fila
            const nuevaFila = document.createElement("tr");
          
            // Agregar las celdas a la nueva fila
            
          
            const semestre = document.createElement("td");
            semestre.textContent = "2do Semestre";
            nuevaFila.appendChild(semestre);
          
            const dia = document.createElement("td");
            dia.textContent = "Miércoles";
            nuevaFila.appendChild(dia);
          
            const hora = document.createElement("td");
            hora.textContent = "10:00am - 12:00pm";
            nuevaFila.appendChild(hora);
          
            const curso = document.createElement("td");
            curso.textContent = "Estadística Aplicada";
            nuevaFila.appendChild(curso);
          
            const profesor = document.createElement("td");
            profesor.textContent = "PHD. Ruiz González Oscar Luis";
            nuevaFila.appendChild(profesor);
          
            const acciones = document.createElement("td");
            acciones.innerHTML = '<button onclick="editarRegistro(this)">Editar</button><button onclick="eliminarRegistro(this)">Eliminar</button>';
            nuevaFila.appendChild(acciones);
          
            // Obtener la referencia a la tabla
            const tabla = document.getElementById("tabla-horario");
          
            // Agregar la nueva fila a la tabla
            tabla.appendChild(nuevaFila);
        }
          const botonEditar = document.createElement("button");
          botonEditar.textContent = "Editar";
          botonEditar.addEventListener("click", function () {
            editarRegistro(this);
          });
          acciones.appendChild(botonEditar);
        
          const botonEliminar = document.createElement("button");
          botonEliminar.textContent = "Eliminar";
          botonEliminar.addEventListener("click", function () {
            eliminarRegistro(this);
          });
          acciones.appendChild(botonEliminar);
        
          nuevaFila.appendChild(acciones);
        
          // Agregar la nueva fila al tbody
          tablaHorario.appendChild(nuevaFila);
        
        
        // Función para editar un registro existente
        function editarRegistro(botonEditar) {
          const fila = botonEditar.parentNode.parentNode;
          const celdas = fila.getElementsByTagName("td");
        
          // Obtener los valores actuales de la fila
          const semestreActual = celdas[1].textContent;
          const diaActual = celdas[2].textContent;
          const horaActual = celdas[3].textContent;
          const cursoActual = celdas[4].textContent;
          const profesorActual = celdas[5].textContent;
        
          // Pedir al usuario los nuevos valores
          const semestreNuevo = prompt("Ingrese el nuevo semestre:", semestreActual);
          const diaNuevo = prompt("Ingrese el nuevo día:", diaActual);
          const horaNueva = prompt("Ingrese la nueva hora:", horaActual);
          const cursoNuevo = prompt("Ingrese el nuevo curso:", cursoActual);
          const profesorNuevo = prompt("Ingrese el nuevo profesor:", profesorActual);
        
          // Actualizar los valores en la fila
          celdas[1].textContent = semestreNuevo;
          celdas[2].textContent = diaNuevo;
          celdas[3].textContent = horaNueva;
          celdas[4].textContent = cursoNuevo;
          celdas[5].textContent = profesorNuevo;
        }
        
        // Función para eliminar un registro existente
        function eliminarRegistro(botonEliminar) {
          const fila = botonEliminar.parentNode.parentNode;
          fila.parentNode.removeChild(fila);
        }
        

       
    