const btn = document.getElementById("transformBtn");
const select = document.getElementById("countries");

function grabCountries() {
  fetch("https://location.wlfpt.co/api/v1/countries")
    .then((response) => response.json())
    .then((countries) =>
      countries.forEach((country) => {
        const option = document.createElement("option");
        option.innerText = country.name;
        option.value = country.name;
        select.appendChild(option);
      })
    );
}

btn.addEventListener("click", () => {
  const label = document.getElementById("countriesLabel");

  label.classList.add("transformed");
});

grabCountries();
