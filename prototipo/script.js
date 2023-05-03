function gerarsenha(nome,atendimento,prioridade){ 

     const nome = document.getElementById('nome').value 
     const atendimento = document.getElementById('atendimento').value
     const prioridade = document.getElementById('prioridade').value
        //teste para saber se há a validação do campo e se está recuperando a variável
    /*document.write(`Nome: ${nome}<br> Atendimento: ${atendimento}<br> Prioridade: ${prioridade}`)*/
    
}
function senhagerada(){
    window.location.href=("senha-gerada.html");
}

function validardados(){
    if(nome.value==''||atendimento.value ==''||prioridade.value==''){
        alert("campo obrigatório!");
    }
}



