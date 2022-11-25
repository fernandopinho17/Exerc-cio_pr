const form = document.getElementById('form-inserir')
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    atualizaTabela();

});

function adicionarlinha() {
    const inputNomeinserir = document.getElementById('nome-inserir');
    const inputTelefoneinserir = document.getElementById('telefone-inserir');

    
    let linha = '<tr>'
    linha += `<td>${inputNomeinserir.value}</td>`;
    linha += `<td>${inputTelefoneinserir.value}</td>`;
    linha += `<td>$</td>`;
    linha += `</tr>`

    linhas += linha;

    inputNomeinserir.value = '';
    inputTelefoneinserir.value= '';
}

function atualizaTabela () {
    const agendaContato = documento.querySelector('tbody');
    agendaContato.innerHTML = linha;
}