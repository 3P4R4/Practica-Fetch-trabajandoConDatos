const dat = document.querySelector("#contenido");

function traerDatos() {
    fetch("datos.json")
        .then(datos => datos.json())
        .then(datos => {
            for (let i of datos) {
                dat.innerHTML +=`
            <tr>
            <th scope="row">${i.id}</th>
            <td>${i.nombre}</td>
            <td>${i.email}</td>
            <td>${i.estado ? "Dentro del país":"Fuera del país"}</td>
          </tr>`
            }
        })
}