var select = document.querySelector("#input");
function fromdatabase() {
  // 1. query буцаах
  // back end бэлэн болгох
  // DOMParser.js ээс back endрүү хандаад consolelog рүү
  // for each
}

for (var i = min; i <= max; i++) {
  var opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}

const button = document.querySelector("#button4");
const searchbutton = document.querySelector("#input");
button.onclick = (event) => {
  fetch("http://localhost:3000/test?search=" + searchbutton.value, {
    method: "get",
  }).then((x) => {
    x.json().then((data) => {
      document.getElementById("name").innerHTML = "Name: " + data.latinName;
      console.log(data);
      document.getElementById("Definition").innerHTML =
        "Definition: " + data.definition;
      document.getElementById("Synonyms").innerHTML =
        "Synonyms: " + data.synonyms;
      document.getElementById("Description").innerHTML =
        "Description:" + data.description;
      document.getElementById("PlantMaterialOfInterest").innerHTML =
        "Plant Material Of Interest: " + data.plantMaterialOfInterest;
      document.getElementById("GeneralAppearance").innerHTML =
        "General Appearance: " + data.generalAppearance;
      document.getElementById("GeographicalDistribution").innerHTML =
        "Geographical Distribution: " + data.geographicalDistribution;
      document.getElementById("MedicinalUses").innerHTML =
        "Medicinal Uses: " + data.medicinalUses;
      document.getElementById("img1").src = data.img1;
      document.getElementById("img1").src = data.img2;
      document.getElementById("img1").src = data.img3;
    });
  });
};
