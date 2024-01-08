function checkAge() {
    var age = parseInt(document.getElementById("userAge").value);
    var result = document.getElementById("result");
  
    if (isNaN(age)) {
      result.textContent = "Por favor, insira um número válido.";
    } else {
      if (age >= 18) {
        result.textContent = "Idade verificada! Bem-vindo!";
        // Redirecionamento para index.html após 2 segundos
        setTimeout(function() {
          window.location.href = "index1.html";
        }, 2000); // Redireciona após 2 segundos (2000 milissegundos)
      } else {
        result.textContent = "Você é menor de idade. Acesso negado.";
        // Aqui você pode redirecionar ou bloquear o acesso ao site
      }
    }
  }
  