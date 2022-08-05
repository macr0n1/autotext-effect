function switchMenu() {
  var navel = document.querySelectorAll('.navel');
  var icon = document.getElementById('switcher-menu');
  var degCurrent = +icon.style.transform.replace(/\D+/g,"");

  if(degCurrent == 90) {
    degCurrent += 90;  
  } else {
    degCurrent -= 90
  }
  icon.style.transform = "rotate(" + degCurrent + "deg)";

  navel.forEach(function(item) {    
    item.classList.toggle('visible');
  });
}