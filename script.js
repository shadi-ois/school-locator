const school = document.getElementById("school");
const button = document.getElementById("button");
const image = document.getElementById("qrcode");
const url = document.getElementById("schoollocationurl");
const schoolName = document.getElementById("schoolName");
const buttonContainer = document.getElementById("button-container");

// Add a new event listener for the school dropdown
school.addEventListener("change", () => {
  QRCode.toDataURL(school.value).then((data) => {
    image.src = data;
    url.href = school.value;
    schoolName.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
    </svg> ÙØªØ­ ÙÙŠ Ø®Ø±Ø§Ø¦Ø· Ø¬ÙˆØ¬Ù„`;
    buttonContainer.classList.add("button");
    url.classList.remove("fade-animate");
    void url.offsetWidth;
    url.classList.add("fade-animate");
    image.classList.remove("fade-animate");
    void image.offsetWidth;
    image.classList.add("fade-animate");
  });
});
