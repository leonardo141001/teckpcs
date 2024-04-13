function enviarMensagem() {
  var nome = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var objetivo = document.getElementById("subject").value;
  var mensagem = document.getElementById("message").value;
  
  // Adicionando emojis às informações
  var infoWhatsapp = "Nome: " + nome + " %0A" +
                     "📧 Email: " + email + " %0A" +
                     "🎯 Objetivo: " + objetivo + " %0A" +
                     "💬 Mensagem: " + mensagem;

  // Obtendo a data e hora do envio
  var dataHora = new Date().toLocaleString();

  // Montando o link do WhatsApp com as informações formatadas
  var numeroWhatsapp = "+5562998002926"; // Seu número de WhatsApp
  var linkWhatsapp;

  // Verificando se o usuário está em um dispositivo móvel
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Abrir no WhatsApp do celular
    linkWhatsapp = "https://api.whatsapp.com/send?phone=" + numeroWhatsapp + "&text=" + infoWhatsapp + "%0AData e Hora do Envio: " + dataHora;
  } else {
    // Abrir no WhatsApp Web
    linkWhatsapp = "https://web.whatsapp.com/send?phone=" + numeroWhatsapp + "&text=" + infoWhatsapp + "%0AData e Hora do Envio: " + dataHora;
  }

  // Abrindo o link
  window.open(linkWhatsapp, '_blank');
}