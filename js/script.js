alert("Bem vindo ao meu portifólo!");
function troca_titulo() {
    document.getElementById("destaque").innerHTML = prompt ("Digite o nome:");
}

function troca_cor() {
    document.getElementById("tecnologias").style.color = "#ffffff";
    document.getElementById("tecnologias").style.backgroundColor = "#4f4f4f";
    document.getElementById("tabela").style.backgroundColor = "#2f2f2f";

    let buttcor = document.getElementsByClassName("butt-cor-troca");
    for(let i=0; i<buttcor.length; i++){
        buttcor[i].style.background = "#2f2f2f";
        
    }
    
    let tabelas = document.getElementsByClassName("tabelas");
    for(let i=0; i<tabelas.length;i++){
        tabelas[i].style.backgroundColor = "#141414";
    }
    let titulo = document.getElementsByClassName("titulo_troca_cor");

    for(let i=0; i<titulo.length; i++){
        titulo[i].style.color = "#FFFFFF"
        titulo[i].style.backgroundColor = "#000000";
        
    }
}

let clique = 0;

function contarClick(){
    clique = clique + 1;
    document.getElementById("cont").innerHTML = clique;
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nome = document.getElementById("nomeContato").value;
    let email = document.getElementById("emailContato").value;
    let assunto = document.getElementById("assunto").value;
    let feedback = document.getElementById("feedback");

    feedback.textContent = "";

    if (nome.length < 5) {
        feedback.textContent = "O nome deve ter pelo menos 5 caracteres.";
        feedback.className = "erro";
        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        feedback.textContent = "Por favor, insira um e-mail válido.";
        feedback.className = "erro";
        return;
    }

    if (assunto.length < 10) {
        feedback.textContent = "O assunto deve ter pelo menos 10 caracteres.";
        feedback.className = "erro";
        return;
    }

    feedback.textContent = "Formulário enviado com sucesso!";
    feedback.className = "sucesso";

    this.reset();
});