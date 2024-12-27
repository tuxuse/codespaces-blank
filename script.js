document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
      Swal.fire({ // Usando SweetAlert2 para o erro
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, preencha todos os campos.',
      });
      return;
  }

  if (!email.includes("@")) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, insira um endereço de e-mail válido.',
      });
      return;
  }

  Swal.fire({ // Usando SweetAlert2 para o sucesso
      icon: 'success',
      title: 'Mensagem enviada!',
      text: 'Obrigado por entrar em contato, ' + name + '! Entraremos em contato com voc\u00EA em breve.',
      confirmButtonColor: '#ff5722', // Cor do botão de confirmação (laranja)
  }).then(() => {
      // Código a ser executado após o usuário clicar em "OK"
      document.getElementById("contactForm").reset(); // Limpa o formulário
  });
});