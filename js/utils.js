function createTThead(tableId, arrayHeaders) {
    let ttable = document.getElementById(tableId);

    let theader = document.createElement("thead");

    let tr = document.createElement("tr");

    for (let i = 1; i < arrayHeaders.length; i++) {
        let th = document.createElement('th');
        th.innerHTML = arrayHeaders[i];
        tr.appendChild(th);
    }

    theader.appendChild(tr);

    ttable.appendChild(theader);
    return ttable;
}


function createTBody(tableId, arrayElemnet) {
    let ttable = document.getElementById(tableId);

    let tbody = document.createElement("tbody");

    for (let i = 0; i < arrayElemnet.length; i++) {
        let tr = document.createElement("tr");

        // Items
        let tdnombre = document.createElement('td');
        tdnombre.innerHTML = arrayElemnet[i]['nombre'];
        tr.appendChild(tdnombre);
        let tdpais = document.createElement('td');
        tdpais.innerHTML = arrayElemnet[i]['pais'];
        tr.appendChild(tdpais);
        let tdedad = document.createElement('td');
        tdedad.innerHTML = arrayElemnet[i]['edad'];
        tr.appendChild(tdedad);
        let tdocupacion = document.createElement('td');
        tdocupacion.innerHTML = arrayElemnet[i]['ocupacion'];
        tr.appendChild(tdocupacion);

        // Botones
        let tdacciones = document.createElement("td");
        let deleteIcon = document.createElement("img");
        let editIcon = document.createElement("img");
        let separador = document.createTextNode(" - ");

        deleteIcon.setAttribute("class", "far fa-trash-alt");
        deleteIcon.setAttribute("data-action", "loadDelete");
        deleteIcon.setAttribute("data-target", "#deleteModal");
        deleteIcon.setAttribute("data-toggle", "modal");
        deleteIcon.setAttribute("data-id", arrayElemnet[i]['id'];);

        editIcon.setAttribute("class", "far fa-edit");
        editIcon.setAttribute("data-action", "loadEdit");
        editIcon.setAttribute("data-target", "#editModal");
        editIcon.setAttribute("data-toggle", "modal");
        editIcon.setAttribute("data-id", arrayElemnet[i]['id'];);

        tdacciones.appendChild(deleteIcon);
        tdacciones.appendChild(separador)
        tdacciones.appendChild(editIcon);

        tdacciones.setAttribute("class", "acciones")
        tr.appendChild(tdacciones);
        tbody.appendChild(tr);
    }
    ttable.appendChild(tbody);
    return ttable;
}