const contenedor = document.querySelector(".contenedor");

function llaves(nombre,modelo,presio) {
    img = "<img src='llave.jpg'>"
   nombre = `<h2><b>${nombre}</B></h2>`;
   modelo = `<h3>${modelo}</h3>`;
   precio = `<h4> presio <b>$${presio}</B></h4>`;
    return [img,nombre,modelo,precio];
}

const codigo = (number)=>{
    document.querySelector(".llave").value = number
} 

let docume = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modelo = Math.floor(Math.random()*100);
    let precio = Math.floor(Math.random()*10*30);
    let llave = llaves(`llave ${i}`,`modelo ${modelo}`,precio);
    let div = document.createElement("DIV");
    div.tabIndex = i;
    div.classList.add(`flex-item`);
    div.addEventListener('click',()=>{codigo(modelo); 
        alert(`has seleccionado el: modelo ${modelo}`)});
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    docume.appendChild(div);
}
contenedor.appendChild(docume);