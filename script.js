const PASSINPUT = document.querySelector("#password");
const CONFIRMPASSINPUT = document.querySelector("#confirm-pass");
const CREATEBUTTON = document.querySelector("#create-button");
const WARNINGTEXT = document.querySelector("#notify");


PASSINPUT.addEventListener("input", () => {
    if (PASSINPUT.value !== CONFIRMPASSINPUT.value) {
        document.documentElement.style.setProperty("--ghost",1);
        PASSINPUT.setCustomValidity("Invalid field.");
        CONFIRMPASSINPUT.setCustomValidity("Invalid field.");
        CREATEBUTTON.setAttribute("disabled",true);
    } else {
        document.documentElement.style.setProperty("--ghost",0);
        PASSINPUT.setCustomValidity("");
        CONFIRMPASSINPUT.setCustomValidity("");
        CREATEBUTTON.removeAttribute("disabled",false);
    }
})

CONFIRMPASSINPUT.addEventListener("input", () => {
    if (PASSINPUT.value !== CONFIRMPASSINPUT.value) {
        document.documentElement.style.setProperty("--ghost",1);
        PASSINPUT.setCustomValidity("Invalid field.");
        CONFIRMPASSINPUT.setCustomValidity("Invalid field.");
        CREATEBUTTON.setAttribute("disabled",true);
    } else {
        document.documentElement.style.setProperty("--ghost",0);
        PASSINPUT.setCustomValidity("");
        CONFIRMPASSINPUT.setCustomValidity("");
        CREATEBUTTON.removeAttribute("disabled",false);
    }
})



