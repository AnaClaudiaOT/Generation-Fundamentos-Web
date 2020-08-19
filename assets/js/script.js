/*case sensitive= reconhece letras maisculas e minusculas;
 DOM/validando campo'nome' atraves do seu id=nome
 por Tag: getElementByTagName();
 por Id: getElementById(); 
 por Nome= getElementsByName();
 por classe= getElementsByClassName();
 por seletor= querySelector()*/

 let nome = window.document.getElementById("nome")
 let email= document.querySelector("#e-mail") /*#chamando id, se fosse classe .*/
 let comentario=document.querySelector("#Comentário")
 let nomeOk = false
 let emailOk = false
 let comentarioOk = false
 let mapa = document.querySelector("#mapa")

 /*aumentando o campo de preenchimento de nome e email se igualando ao assunto*/
nome.style.width ="100%"
email.style.width="100%"
comentario.style.width="100%"

/* validando nome/ se nome for menor que 3=imprime nome invalido/ precisa referenciar no contato input de nome/let txt=document.query ("txtNome (id div em input id Nome em contato*/
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
       txtNome.innerHTML = "Nome Inválido"
       txtNome.style.color="red"
    } else{
        txtNome.innerHTML="Nome Válido"
        txtNome.style.color="green"
        nomeOk = true
    }

}
function validaEmail () {
    let txtEmail=document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color="red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color= "green"
        emailOk = true
    }
}
function validaComentario (){
    let txtComentario = document.querySelector("#txtComentario")

    if (comentario.value.length >=100){
        txtComentario.innerHTML = "Digite no máximo 100 caracteres"
        txtComentario.style.color = "red"
        txtComentario.style.display = "block"
    } else {
        txtComentario.style.display = "none"
        comentarioOk = true

    }
}
function enviar(){
    if (nomeOk == true && emailOk == true && comentarioOk == true){
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente!")
    }
}
function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }
 
 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }  