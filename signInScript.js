
    var togglePassword = document.querySelector('#showPassword');
    var password = document.querySelector('#password');
  
    togglePassword.addEventListener('click', function (e) {
        
        var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
       
        this.classList.toggle('fa-eye-slash');
    });

    


    
