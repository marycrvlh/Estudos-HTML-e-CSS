// const botoes = document.querySelectorAll(".botao");
// const personagem = document.querySelectorAll(".personagem");

// botoes.forEach((botao, indice) => {
//     botao.addEventListener("click", () => {
//         const botaoSelecionado = document.querySelector(".botao.Selecionado");
//         botaoSelecionado.classList.remove("Selecionado");
//         botao.classList.add("Selecionado");

//         const personagemSelecionado = document.querySelector(".personagem.Selecionado");
//         personagemSelecionado.classList.remove("Selecionado");
//         personagens[indice].classList.add("Selecionado");
//     });
// });

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
 
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
 
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});