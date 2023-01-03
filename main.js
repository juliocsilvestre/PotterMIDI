function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

if ( elemento != null && elemento.localName === 'audio') {
    elemento.play();
    }
else {
    //alert('Elemento não encontrado');
    console.log('Elemento não encontrado ou Seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    //console.log(idAudio);

   tecla.onclick = function () {
        tocaSom(idAudio);   
    };
    
    tecla.onkeydown = function (event)  {

        //console.log(event.code === 'Space')

        if (event.code === 'Space' || event.code === 'Enter') {
        tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {

        tecla.classList.remove('ativa');
    }


}

    //contador = contador + 1
    //contador++ pega o valor atual e soma mais um
    //console.log(contador);


    





