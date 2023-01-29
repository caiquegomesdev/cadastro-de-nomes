var botao = document.getElementById('cadastrar')
botao.addEventListener('click', cadastrar)

var listar = document.getElementById('listar')
listar.addEventListener('click', listar_nomes)

var ul = document.getElementById('listaul')

var nomes = []

function cadastrar(){
    var nome = document.getElementById('nome')
    nomes.push(nome.value)
    alert('Olá ' + nome.value + '! Seu nome foi cadastrado!')
    document.getElementById('nome').value=''   
}

function listar_nomes(){
    ul.innerHTML = ' '
    for (var i = 0; i < nomes.length; i++){
        var item = document.createElement('li')
        item.textContent =`Nome: ${i + 1}: ${nomes[i]}`
        ul.appendChild(item)
    }
}