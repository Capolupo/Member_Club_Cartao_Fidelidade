const clientName = document.querySelector("#user-name");
const clientSinceText = document.querySelector("#user-since");
const clientImage = document.querySelector(".img-container img");

export function loadClientInformation(data) {
  try {
    const name = data.name;
    const clientSince = data.clientSince;

    clientName.textContent = name;
    clientSinceText.textContent = `Cliente desde ${clientSince}`;
    clientImage.src = `src/assets/img/${data.id}.png`;

  } catch (error) {
    alert("Não foi possivel exibir os dados do cliente!")
    console.log(error)
  }  
}
