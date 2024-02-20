  const form = document.querySelector(".formulario-fale-conosco")
  const mascara = document.querySelector(".mascara-negra")
  
  
  
  
  
  function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "trans lateX (-50%)"
    mascara.style.visibility = "visible"
  }

  function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "trans lateX (0)"
    mascara.style.visibility = "hidden"

  }