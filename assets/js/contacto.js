var inputs = document.getElementsByClassName('formulario__input');


function text()
{
  if(this.value.length >1)
  {
    this.nextElementSibling.classList.add('fijar');
  }
  else
  {
    this.nextElementSibling.classList.remove('fijar');
  }
}

for(let i =0 ; i<=inputs.length; i++)
  {
    inputs[i].addEventListener('keyup',text)
  }
