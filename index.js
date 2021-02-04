let a = 0;
const guardar = () => {
    
    // Selección de los campos
    let nombre = document.getElementById('text_nombre').value;
    let edad = document.getElementById('text_edad').value;
    let genero = document.getElementsByName('genero');
    let estudio = document.getElementById('estudios').value;
    // console.log(nombre);
    // console.log(edad);
    // console.log('masculino ' + genero[0].checked); // masculino
    // console.log('femenino ' + genero[1].checked);
    // console.log(estudio);

    const listaPersona = [];

    listaPersona.push(nombre);
    listaPersona.push(edad);

    switch (genero[0].checked) {
        case true:
            listaPersona.push('masculino');
            break;
    
        case false:
            listaPersona.push('femenino');
            break;
    }

    listaPersona.push(estudio);
    console.log(localStorage.length);
           
     if (localStorage.length >= 1)  {
        console.log('test');
       
        localStorage.setItem(localStorage.length + a, JSON.stringify(listaPersona));
        a++;
    } else {
        
        localStorage.setItem(a, JSON.stringify(listaPersona));  
    }


}

const listarPersonas = () => {
    // Seleccionar div tabla
    let tabla = document.getElementById('tabla');

    // Crear elementos
    let divTabla = document.createElement('table')
    let tHead = document.createElement('thead');
    let tr = document.createElement('tr');
    let thNum = document.createElement('th');
    let thNombre = document.createElement('th');
    let thEdad = document.createElement('th');
    let thGenero = document.createElement('th');
    let thEstudio = document.createElement('th');
    let option = document.createElement('th');
    
    let tBody = document.createElement('tbody');
    
    // Agragar text_nombre
     thNum.innerText = '#';
     thNombre.innerText = 'Nombre';
     thEdad.innerText = 'Edad';
     thGenero.innerText = 'Genero';
     thEstudio.innerText = 'Estudios';
     option.innerText ="Opciones";

    // Crear atributo
    let creaClass = document.createAttribute('class');
    creaClass.value = "table table-dark table-striped";
    divTabla.setAttributeNode(creaClass);

    let scope = document.createAttribute('scope');
    scope.value = "row";
    // agragar
    let trCreada = tabla.appendChild(divTabla).appendChild(tHead).appendChild(tr);

    trCreada.appendChild(thNum);
    trCreada.append(thNombre, thEdad, thGenero, thEstudio, option);

    let BodyCreada = divTabla.appendChild(tBody);

    let datos= []
    for (let index = 0; index < localStorage.length; index++) {
        let data = JSON.parse(localStorage.getItem(index));
        datos.push(data);

        let tBodyTr = document.createElement('tr');
        let trBody = BodyCreada.appendChild(tBodyTr);
        trBody.setAttribute('id', index);
    }
    
    for (let index = 0; index < datos.length; index++) {
        const element = datos[index];
        // Crear elementos
        let thBody = document.createElement('th');
        let tdBody1 = document.createElement('td');
        let tdBody2 = document.createElement('td');
        let tdBody3 = document.createElement('td');
        let tdBody4 = document.createElement('td'); 
        let btnOption = document.createElement('td');
        let btnBorrar = document.createElement('input');
        btnBorrar.setAttribute('id', 'option_' + index);
        btnBorrar.setAttribute('class', 'btn btn-danger');
        btnBorrar.setAttribute('value', 'Borrar');
        btnBorrar.setAttribute('type', 'button');
        btnBorrar.setAttribute('onclick', 'borra('+ index +')');


        // Agragar texto
        thBody.innerText = index + 1;
        tdBody1.innerText = element[0];
        tdBody2.innerHTML = element[1];
        tdBody3.innerText = element[2];
        tdBody4.innerText = element[3];
        
        // Selección row
        let row = document.getElementById(index);

        row.appendChild(thBody);
        row.append(tdBody1, tdBody2, tdBody3, tdBody4, btnOption);
        btnOption.appendChild(btnBorrar); 
       
    }

}

let borra = (i) => {

    // Selección
    let selBtnBorrar = document.getElementsByClassName('btn-danger');
    console.log(selBtnBorrar[i]); 

    localStorage.removeItem(i);
    location.reload();

}