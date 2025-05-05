const imagens = document.querySelectorAll ('.grid-galeria img');
const modal = document.getElementById ('modal');
const btnFechar = documen.getElementById('fechar');

imagens.forEach(img =>{
    img.addEventListener('click', () =>{
        modal.style.display = 'block'; //mostra o modal
        modalImg.src = img.src; //troca a imagem
        modalImg.alt = img.alt; //define a descricao
    });
});

btnFechar .addEventListener('click', () => { 
    modal.style.display = 'none';

});