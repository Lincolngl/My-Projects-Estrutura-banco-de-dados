'use strict';

const myForm = document.getElementById("myForm");
myForm.addEventListener('submit',cadastrar)

function cadastrar(e){
    e.preventDefault();
    const formData = new FormData(this);
    const searchParams = new URLSearchParams(); 
    for(const par of formData){
        searchParams.append(par[0],par[1],par[2],par[3]);
    }
    fetch('cadastrodeclientes.php',{
        method:'POST',
        body:formData
    }).then(function(response){
        document.getElementById('nome').value="";
        document.getElementById('email').value="";
        document.getElementById('dataNascimento').value="";
        document.getElementById('senha').value="";
        return alert('Dados Gravados Com Sucesso!');
    }).catch(function(error){
        console.log(error);
    })
}

let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let dataNascimento = document.querySelector('#dataNascimento')
let labelDate = document.querySelector('#labelDate')
let validDate = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false


nome.addEventListener('keyup',()=>{
  if(nome.value.trim().length <=2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML= 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style','border-color: red')
    validNome = false
  }else{
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML= 'Nome'
    nome.setAttribute('style','border-color: green')
    validNome = true
    
  }
})

email.addEventListener('keyup', ()=>{
  if(email.value.trim().length <=10){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML= 'E-mail * Complete o capo '
    email.setAttribute('style','border-color: red')
    validEmail = false
  }else{
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML= 'E-mail'
    email.setAttribute('style','border-color: green')
    validEmail = true
    
  }
})

dataNascimento.addEventListener('keyup', ()=>{
  if(data.value.trim().length <=9){
    labelDate.setAttribute('style', 'color: red')
    labelDate.innerHTML= 'Data de Nascimento * Complete o capo '
    dataNascimento.setAttribute('style','border-color: red')
    validDate = false
  }else{
    labelDate.setAttribute('style', 'color: green')
    labelDate.innerHTML= 'Data de Nascimento'
    dataNascimento.setAttribute('style','border-color: green')  
    validDate = true
  }
})

senha.addEventListener('keyup', ()=>{
  if(senha.value.trim().length <=5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML= 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style','border-color: red')
    validSenha = false
  }else{
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML= 'Senha'
    senha.setAttribute('style','border-color: green')
    validSenha = true
    
  }
})

confirmSenha.addEventListener('keyup', ()=>{
  if(senha.value.trim() != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML= 'Confirmar Senha * As senhas nao conferem'
    confirmSenha.setAttribute('style','border-color: red')
    validConfirmSenha = false
  }else{
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML= 'Confirmar Senha'
    confirmSenha.setAttribute('style','border-color: green')
    validConfirmSenha = true
    
  }
})


btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if (inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')}  
  else {
    inputSenha.setAttribute('type', 'password')}
})

btnConfirm.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#confirmSenha')
  
  if (inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')}  
  else {
    inputSenha.setAttribute('type', 'password')}
})

