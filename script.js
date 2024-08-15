//$('body').hide(1);
$('#texto').fadeOut();
$('header').fadeOut(1);
$('section').fadeOut(1);
$('footer').fadeOut(1);

$('header').fadeIn(2000);
$('section').fadeIn(3000);
$('footer').fadeIn(5000);
const calcular = document.getElementById('calcular');



setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();

function clear(){ 
    console.log("teste")
    $("#nome").clear();
    $("#altura").clear();
    $("#peso").clear();

}

function pace(){
  
   let nome = document.getElementById("nome").value;
   let distancia = document.getElementById("distancia").value;
   let peso = document.getElementById("peso").value;
   let time = document.getElementById("time").value;
   let hora_t = time.split(':');
   let horas = parseInt( hora_t[0]);
   let minutos = parseInt( hora_t[1]);
   let segundos = parseInt( hora_t[2]);

   

  const tempo_minutos = horas*60 + minutos + segundos/60;
  const tempo_horas = horas + minutos/60 + segundos/3600; 
  const velocidade = (distancia/(tempo_horas));


   let pace = (60/velocidade).toFixed(2);
   let calorias;


   calorias = (velocidade * peso * 0.0175 *(tempo_minutos) ).toFixed(1);
// if (nome !="" && distancia !="" && peso !="" && horas !="" && minutos !="" && segundos !=""){
  if (true){

    var texto = "Senhor "+ nome +", ao calcular seu PACE, chegamos a conclusão de que ele tem o valor de " + pace + "! E após percorrer "+ distancia +"Km em "+ horas +"h "+ minutos +"min "+ segundos +"s o número de calorias perdida foi de " + calorias +"Kcal" ;
  }else{
    var texto = "Por gentileza preencha todos os campos para ser feito o calculo!"
  }


   $('#texto').fadeIn(2000);

   document.getElementById("texto").innerHTML = texto;
   console.log(texto)
   
   
}

calcular.addEventListener('click', pace);
