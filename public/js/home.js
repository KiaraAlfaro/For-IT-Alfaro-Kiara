fetch("./js/usuarios.json")
    .then(response => response.json())
    .then(data => {
        usuarios = data;
        cargarUsuarios(usuarios);
    });

const contenedorUsuarios = document.querySelector("#contenedor-usuario");
const buscarUsuario = document.getElementById('buscador');

buscarUsuario.addEventListener('input', function() {
    const query = buscarUsuario.value.toLowerCase();
    const usuariosFiltrados = usuarios.filter(usuario => {
        return usuario.name.toLowerCase().includes(query) ||
               usuario.email.toLowerCase().includes(query) ||
               usuario.address.city.toLowerCase().includes(query); 
    });
    cargarUsuarios(usuariosFiltrados);
});

function cargarUsuarios(usuariosMostrar) {

    contenedorUsuarios.innerHTML = "";

    usuariosMostrar.forEach(usuario=> {

        const div = document.createElement("div");
        div.classList.add("usuario");
        div.innerHTML = `
            <img class="us-imagen" src="/img/usuario.png" alt="usuario">
            <div class="us-detalles">
                <h3 class="us-name">${usuario.name}</h3>
                <p class="us-username">Username: ${usuario.username}</p>
                <p class="us-email">E-mail: ${usuario.email}</p>
                <p class="us-ciudad">Ciudad: ${usuario.city}</p>
                <p class="us-telefono">Telefono: ${usuario.phone}</p>
            </div>
        `;
        contenedorUsuarios.append(div);
    })

}

document.getElementById('form-nuevo-usuario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;

    const nuevoUsuario = {
        id: usuarios.length + 1, 
        name: name,
        username: '', 
        email: email,
        address: {
            street: '',
            suite: '',
            city: city,
            zipcode: ''
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    };

    usuarios.push(nuevoUsuario);
    cargarUsuarios(usuarios);
    document.getElementById('form-nuevo-usuario').reset();
});