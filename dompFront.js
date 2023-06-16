const button = document.querySelector("#button4");
const searchbutton = document.querySelector("#input");
button.onclick = (event) => {
  fetch("http://localhost:3000?search=" + searchbutton.value, {
    method: "POST",
  }).then((x) => {
    x.json().then((data) => {
      document.getElementById("name").innerHTML = "Name: " + data.name;
      console.log(data);
      document.getElementById("Definition").innerHTML =
        "Definition: " + data.Definition;
      document.getElementById("Synonyms").innerHTML =
        "Synonyms: " + data.Synonyms;
      document.getElementById("Description").innerHTML =
        "Description:" + data.Description;
      document.getElementById("PlantMaterialOfInterest").innerHTML =
        "Plant Material Of Interest: " + data.PlantMaterialOfInterest;
      document.getElementById("GeneralAppearance").innerHTML =
        "General Appearance: " + data.GeneralAppearance;
      document.getElementById("GeographicalDistribution").innerHTML =
        "Geographical Distribution: " + data.GeographicalDistribution;
      document.getElementById("MedicinalUses").innerHTML =
        "Medicinal Uses: " + data.MedicinalUses;
      document.getElementById("img1").src = data.img1;
      document.getElementById("img1").src = data.img2;
      document.getElementById("img1").src = data.img3;
    });
  });
};
