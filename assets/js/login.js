document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificação de credenciais (usuário e senha)
    if ((username === "NataNunes" && password === "534512") || 
        (username === "Fatalle" && password === "83090838")) {
      window.location.href = "dashboard.html"; // Redireciona para o Dashboard após o login
    } else {
      alert("Credenciais incorretas. Tente novamente.");
    }
  });