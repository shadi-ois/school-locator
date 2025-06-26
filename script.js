const school = document.getElementById("school");
const button = document.getElementById("button");
const image = document.getElementById("qrcode");
const url = document.getElementById("schoollocationurl");
const schoolName = document.getElementById("schoolName");

// Add a new event listener for the school dropdown
school.addEventListener("change", () => {
  QRCode.toDataURL(school.value).then((data) => {
    image.src = data;
    url.href = school.value;
    schoolName.innerHTML = school.value;
    url.classList.remove("fade-animate");
    void url.offsetWidth;
    url.classList.add("fade-animate");
    image.classList.remove("fade-animate");
    void image.offsetWidth;
    image.classList.add("fade-animate");
  });
});
