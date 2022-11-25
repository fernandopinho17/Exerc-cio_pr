const form = document.getElementById('form-inserir')
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    atualizaTabela();

});

function adicionarlinha() {
    const inputNomeinserir = document.getElementById('nome-inserir');
    const inputNumeroinserir = document.getElementById('numero-inserir');

    
    let linha = '<tr>'
    linha += `<td>${inputNomeinserir.value}</td>`;
    linha += `<td>${inputNumeroinserir.value}</td>`;
    linha += `<td>$</td>`;
    linha += `</tr>`

    linhas += linha;

    inputNomeinserir.value = '';
    inputNumeroinserir = '';
}

function atualizaTabela () {
    const agendaContato = documento.querySelector('tbody');
    agendaContato.innerHTML = linha;
}