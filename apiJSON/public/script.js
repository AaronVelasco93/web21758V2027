const table = document.getElementById('tabla');
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');

let editando = false;
let usuarioId = null;

// mostrar usuarios en tabla
async function cargarUsuarios() {
    const res = await fetch('/api/usuarios');
    const datos = await res.json();
    table.innerHTML='';

    datos.forEach(u => {
        const row = document.createElement('tr');

        row.innerHTML=`
        <td>${u.id}</td>
        <td>${u.nombre}</td>
        <td>${u.correo}</td>
        <td>
            <button onclick="llenarFormulario(${u.id},'${u.nombre}','${u.correo}')" >Editar</button>
            <button onclick="eliminar(${u.id})">Eliminar</button>
        </td>
        `;
        table.appendChild(row);
    });
}

function llenarFormulario(id, nombreValor, correoValor){
    nombre.value = nombreValor;
    correo.value = correoValor;
    usuarioId = id;
    editando = true;

    document.querySelector('button[type="submit"]').textContent="Actualizar";
}
// evento para agregar o actualizar usuario
form.addEventListener('submit', async e =>{
    e.preventDefault();
    const datos ={
        nombre: nombre.value,
        correo: correo.value
    };
    if(editando){
        //actualizar
        await fetch('/api/usuarios/'+ usuarioId,{
            method: 'PUT',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(datos)
        });
        editando = false;
        usuarioId = null;
        document.querySelector('button[type="submit"]').textContent='Agregar';
    }else{
        await fetch('/api/usuarios',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(datos)
        });
    }
    form.reset();
    cargarUsuarios();
});
//eliminar usuario

async function eliminar(id) {
    if(confirm('¿Eliminar usuario?')){
        await fetch('/api/usuarios'+ id,{method:'DELETE'});
        cargarUsuarios();
    }
    
}
cargarUsuarios();

