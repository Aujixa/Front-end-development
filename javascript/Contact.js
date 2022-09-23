/*
Contact javascript Page of Kayven's website
ST0501: Front-End Web Development
CA2:Interactive Website
File Name: Contact.js
Author: Kayven Chieng Yan Heng
Date:  29/07/2022
Class: DCITP/FT/1A/02
Student ID:P2222639
*/




// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var checkforms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(checkforms)
    .forEach(function (formFormat) {
      formFormat.addEventListener('submit', function (event) {
        if (!formFormat.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        formFormat.classList.add('was-validated')
      }, false)
    })
})()

