// //recebe o click - Seleciona o elemento HTML que possui o ID "openModal"
// const buttonOpenModal = document.getElementById('openModal')

// //Seleciona o primeiro elemento HTML que possui a classe "modal-wrapper"
// const modalWrapper = document.querySelector('.modal-wrapper')

// //Adiciona um evento de clique
// buttonOpenModal.onclick = function(){
//     //Remove a classe "invisible"
//     modalWrapper
//     .classList
//     .remove('invisible')
// }

// //Adiciona um evento de teclado
// document.addEventListener('keydown', function(event){
//     //Verifica se a tecla pressionada foi a tecla "Esc"
//     const isEscKey = event.key === 'Escape'
//     if(isEscKey){
//         //adiciona a class "invisible"
//         modalWrapper.classList.add('invisible')
//     }
// })


// Tornando o código mais claro, legível e fácil de entender e manter.


// Seleciona o botão de abrir o modal pelo ID
const buttonOpenModal = document.getElementById('openModal');

// Seleciona o wrapper do modal pela classe
const modalWrapper = document.querySelector('.modal-wrapper');

// Define as constantes de classe e tecla a serem usadas
const CLASS_INVISIBLE = 'invisible';
const KEY_ESCAPE = 'Escape';

// Função para abrir o modal
function openModal(){
    // Remove a classe 'invisible' 
 modalWrapper.classList.remove(CLASS_INVISIBLE)
};

// Função para fechar o modal
function closeModal(event){
    // Verifica se a tecla pressionada é a tecla 'Escape'
    const isEscKey = event.key === KEY_ESCAPE
     // Verifica se o modal está visível
    const isVisible = !modalWrapper.classList.contains(CLASS_INVISIBLE);
    // Se a tecla 'Escape' foi pressionada e o modal está visível, fecha o modal
    if(isEscKey && isVisible){
        modalWrapper.classList.add(CLASS_INVISIBLE)
    }
};

// Adiciona o evento de click no botão para abrir o modal
buttonOpenModal.addEventListener('click', openModal);
// Adiciona o evento de tecla pressionada para fechar o modal
document.addEventListener('keydown', closeModal);





// function openModal(){
//     modalWrapper.classList.toggle(CLASS_INVISIBLE);
// };

// function closeModal(event){
//     const isEscKey = event.key === KEY_ESCAPE;
//     if(isEscKey && !modalWrapper.classList.contains(CLASS_INVISIBLE)){
//         modalWrapper.classList.add(CLASS_INVISIBLE);
//     }
// };
/*
O método classList.contains() é útil quando precisamos verificar se um elemento 
possui uma determinada classe, retornando um valor booleano true ou false com base 
na presença ou ausência da classe. Por outro lado, o método classList.toggle() é útil
quando precisamos alternar entre adicionar e remover uma classe de um elemento, com base em seu estado atual.
No exemplo específico do modal, ambos os métodos são viáveis e funcionais. 
No entanto, usar o método classList.toggle() pode tornar o código mais conciso e fácil de ler, já que 
a lógica para adicionar e remover a classe invisible é centralizada em uma única função, 
em vez de ser dividida em duas funções separadas (openModal() e closeModal()). */