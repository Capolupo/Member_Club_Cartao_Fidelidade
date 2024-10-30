const clientId = document.querySelector("form input");

clientId.addEventListener("input", (e) => {
  /*const formatter = new stringMask("###-###-###-###");*/
  let value = clientId.value.replace(/\D/g, "");
  // Adiciona os hífens após cada três dígitos
  if (value.length > 3) value = value.slice(0, 3) + '-' + value.slice(3);
  if (value.length > 7) value = value.slice(0, 7) + '-' + value.slice(7);
  if (value.length > 11) value = value.slice(0, 11) + '-' + value.slice(11);

  // Limita o valor em no máximo 12 dígitos (excluindo os hífens)
  value = value.slice(0, 15);

  // Atualiza o campo de entrada com o valor formatado
  // e.target.value = 'ID-' + value;
  e.target.value = value;  
  /*clientId.value = formatter.apply(value);*/
});