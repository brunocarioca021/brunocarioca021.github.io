const secaoAluno = document.getElementById('mudar');
const momentos = document.querySelector('#momento');
const imagens = document.querySelector('#img');
const btnHumor = document.querySelector('#humor');

// window.onload = function() {
//   alert("Bem-vindo ao Jogo do Humor de Bakugou Katsuki da Classe 1-A");
// };

btnHumor.addEventListener("click",function () {
  // alert ("Opa, Funcionou") //Verificando se o botão está funcionando
  if (btnHumor.value == 'primeiro')
  {
    imagens.src = './image/serio.webp'
    secaoAluno.innerText = 'Katsuki Bakugo'
    momentos.innerText = "Bakugou falando com os amigos sério.Preocupação dos amigos com tal atitude."
    btnHumor.value = 'segundo'
  } 
  else if (btnHumor.value == 'segundo')
  {
    imagens.src = './image/contra1.gif'
    secaoAluno.innerText = 'Katsuki Bakugo Treinamento'
    momentos.innerText = "Bakugou contrariado quando é subestimado."
    btnHumor.value = 'terceiro'
  }
  else 
  {
    imagens.src = './image/vaimorrer.gif'
    secaoAluno.innerText = 'Katsuki Bakugo explosivo'
    momentos.innerText = " Super irritado e explosivo com amigo Deku."
    btnHumor.value = 'primeiro'
  }
});