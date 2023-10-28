const confirm = document.getElementById("sub");
const selected = document.querySelector("select");
const old = document.getElementById("age");
const drive = document.querySelector(".drive");
const options = document.querySelectorAll("option");

function canDrive() {
  const selectOld = old.value;
  const pays = selected.value;

  if (
    (pays === "" && selectOld === "") ||
    (pays != "" && selectOld === "") ||
    (pays === "" && selectOld != "")
  ) {
    alert("Veuillez remplir correctement le formulaire");
    return;
  }

  if (pays === "Belgique" && selectOld >= 18) {
    drive.innerHTML = `<h3>Vous avez (<span>${selectOld} ans</span>) et en Belgique l'âge légal est 18 ans, vous pouvez donc conduire</h3>`;
    drive.style.visibility = "visible";
  } else if (pays === "Canada" && selectOld >= 18) {
    drive.innerHTML = `<h3>Vous avez (<span>${selectOld} ans</span>) et au Canada l'âge légal est 18 ans, vous pouvez donc conduire</h3>`;
    drive.style.visibility = "visible";
  } else if (pays === "Australie" && selectOld >= 21) {
    drive.innerHTML = `<h3>Vous avez (<span>${selectOld} ans</span>) et en Australie l'âge légal est 21 ans, vous pouvez donc conduire</h3>`;
    drive.style.visibility = "visible";
  } else {
    drive.innerHTML = `<h3>Vous avez (<span>${selectOld} ans</span>) et vous n'avez pas l'age légal pour conduire dans ce pays (<span>${pays}</span>)</h3>`;
    drive.style.visibility = "visible";
  }
}

selected.addEventListener("change", function () {
  const index = selected.value;
});

confirm.addEventListener("click", (e) => {
  e.preventDefault();
  canDrive();
});
