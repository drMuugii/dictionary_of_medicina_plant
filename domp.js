const button = document.querySelector("#button4");
const searchbutton = document.querySelector("#input");
button.onclick = (event) => {
  fetch("http://localhost:3000?name=" + searchbutton.value).then((x) => {
    x.json().then((data) => {
      document.getElementById("pname").value = data.name;
      console.log(data);
    });
  });
};
