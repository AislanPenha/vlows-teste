(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  let cep = document.querySelector('#cep');
  let localidade = document.querySelector('#localidade');
  fetch('https://viacep.com.br/ws/65110000/json/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    cep.value = data.localidade;
  })