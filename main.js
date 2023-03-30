function CriarItem(){
    var item = document.getElementById('valor')
    if(item.value){

    var container = document.getElementById('table')

    var itemDiv = document.createElement('div')
    container.appendChild(itemDiv)

    itemDiv.classList.add('item')

    var p = document.createElement('p')
    p.textContent = item.value
    itemDiv.appendChild(p)

    var label = document.createElement('label')
    itemDiv.appendChild(label)

    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    label.appendChild(btnEditar);
  
    // Cria o botão "Excluir" e o adiciona ao <label>
    var btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", function() {
        var divItem = this.closest('.item');
        divItem.remove();
      });
    label.appendChild(btnExcluir);

    item.value = ''

} else {
    alert('Insira um valor')
}

}

function clearAll(){
    var tamanho = document.getElementsByClassName('item').length
    
    for( i = tamanho-1; i>=0; i-- ){
        document.getElementsByClassName('item')[i].remove()
    }

    
}

function excluir(){
    var btnExcluir = document.querySelector('.item button:nth-child(2)');
    btnExcluir.addEventListener('click', function() {
        var divItem = this.closest('.item');
      
        divItem.remove();
    });
}