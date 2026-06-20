const maleUser = {
    name: "John Doe",
    gender: "Male",
    image: "../images/john.png"
};
const femaleUser = {
    name: "Jane Doe",
    gender: "Female",
    image: "../images/jane.png"
};
let curId = maleUser;
function toggle() {
    curId =
        curId.gender === "Male"
            ? femaleUser
            : maleUser;
    document.getElementById("user-name").innerText =
        curId.name;
    document.getElementById("user-gender").innerText =
        curId.gender;
    document.getElementById("user-img").src =
        curId.image;
}