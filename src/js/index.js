//obejtivo 1

const botoes = document.querySelectorAll(".botao");

const personagens=document.querySelectorAll(".personagem");

//passo2-
botoes.forEach((botao, indice)=>{
  botao.addEventListener("click",()=>{
    desselecionarBotao();

    botao.classList.add("selecionado")
    
    desselecionarPersonagem();
    // console.log(indice)
    // console.log(personagens[indice]);
    personagens[indice].classList.add("selecionado");
  });

});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");

  botaoSelecionado.classList.remove("selecionado");
}
