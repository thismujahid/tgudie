// Siweper Configuration
try {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
} catch (e) {
    funcToIgnoreUnimportantErrore(e);
}
// Siweper Configuration
// Start of navigation initialization
let navToggler = document.querySelector(".open"),
    iconCloser = document.getElementById("iconCloser"),
    mobileNav = document.querySelector(".mobile-nav"),
    overlay = document.querySelector(".overlay");

navToggler.onclick = function() {
    mobileNav.classList.add("active");
    overlay.classList.add("active");
}
overlay.onclick = function() {
        mobileNav.classList.remove("active");
        overlay.classList.remove("active");
    }
    // End of navigation initialization

// Toggle SignUp Form
let customerBtn = document.getElementById("customerBtn"),
    activityOwnerBtn = document.getElementById("activityOwnerBtn"),
    customerSginUp = document.getElementById("customer"),
    activityOwnerSginUp = document.getElementById("activityOwner"),
    allInputsInCustomerForm = document.querySelectorAll("#customer input:not(.submitBtn)"),
    allInputsInactivityOwnerForm = document.querySelectorAll("#activityOwner input:not(.submitBtn)");
try {

    customerBtn.onclick = function() {
        if (activityOwnerBtn.classList.contains("active")) {
            activityOwnerBtn.classList.remove("active");
            customerBtn.classList.add("active");
            customerSginUp.classList.add("active");
            activityOwnerSginUp.classList.remove("active");
            for (let i = 0; i < allInputsInactivityOwnerForm.length; i++) {
                allInputsInactivityOwnerForm[i].value = "";
            }
        }
    }
    activityOwnerBtn.onclick = function() {
        if (customerBtn.classList.contains("active")) {
            customerBtn.classList.remove("active");
            activityOwnerBtn.classList.add("active");
            customerSginUp.classList.remove("active");
            activityOwnerSginUp.classList.add("active");
            for (let v = 0; v < allInputsInCustomerForm.length; v++) {
                allInputsInCustomerForm[v].value = "";
            }
        }
    }

} catch (e) {
    funcToIgnoreUnimportantErrore(e);
}

// show and hide Password In SginUp
let iconEyeS = document.querySelectorAll(".signup .left"),
    passwordInputs = document.querySelectorAll(".signup input[type='password']");
for (let i = 0; i < iconEyeS.length; i++) {
    iconEyeS[i].onclick = function() {
        if (iconEyeS[i].classList.contains("fa-eye")) {
            iconEyeS[0].classList.remove("fa-eye");
            iconEyeS[1].classList.remove("fa-eye");
            iconEyeS[2].classList.remove("fa-eye");
            iconEyeS[3].classList.remove("fa-eye");
            iconEyeS[0].classList.add("fa-eye-slash");
            iconEyeS[1].classList.add("fa-eye-slash");
            iconEyeS[2].classList.add("fa-eye-slash");
            iconEyeS[3].classList.add("fa-eye-slash");
            if (passwordInputs[i].type === "text") {
                passwordInputs[0].type = "password";
                passwordInputs[1].type = "password";
                passwordInputs[2].type = "password";
                passwordInputs[3].type = "password";
            }
        } else if (iconEyeS[i].classList.contains("fa-eye-slash")) {
            iconEyeS[2].classList.remove("fa-eye-slash");
            iconEyeS[0].classList.remove("fa-eye-slash");
            iconEyeS[1].classList.remove("fa-eye-slash");
            iconEyeS[3].classList.remove("fa-eye-slash");
            iconEyeS[0].classList.add("fa-eye");
            iconEyeS[1].classList.add("fa-eye");
            iconEyeS[2].classList.add("fa-eye");
            iconEyeS[3].classList.add("fa-eye");

            if (passwordInputs[i].type === "password") {
                passwordInputs[0].type = "text";
                passwordInputs[1].type = "text";
                passwordInputs[2].type = "text";
                passwordInputs[3].type = "text";
            }
        }
    }

}
// show and hide Password In SginUp
// show and hide Password In SginUp
let iconEyeL = document.querySelectorAll(".login .left"),
    passwordInputsL = document.querySelectorAll(".login input[type='password']");
for (let i = 0; i < iconEyeL.length; i++) {
    iconEyeL[i].onclick = function() {
        if (iconEyeL[i].classList.contains("fa-eye")) {
            iconEyeL[0].classList.remove("fa-eye");
            iconEyeL[1].classList.remove("fa-eye");
            iconEyeL[0].classList.add("fa-eye-slash");
            iconEyeL[1].classList.add("fa-eye-slash");
            if (passwordInputsL[i].type === "text") {
                passwordInputsL[0].type = "password";
                passwordInputsL[1].type = "password";
            }
        } else if (iconEyeL[i].classList.contains("fa-eye-slash")) {
            iconEyeL[0].classList.add("fa-eye");
            iconEyeL[1].classList.add("fa-eye");
            iconEyeL[0].classList.remove("fa-eye-slash");
            iconEyeL[1].classList.remove("fa-eye-slash");

            if (passwordInputsL[i].type === "password") {
                passwordInputsL[0].type = "text";
                passwordInputsL[1].type = "text";
            }
        }
    }

}
// End OF show and hide Password In SginUp
// Add Comment Input Validation
let commentInput = document.getElementById("commentInput");
try {

    document.getElementById("commentSend").onclick = (e) => {
        e.preventDefault();
        if (commentInput.value === "") {
            document.querySelector(".comments form .err").innerHTML = "رجاء كتابة تعليق اولا"
        } else {
            document.querySelector(".comments form").submit();
        }
    }

} catch (e) {

    funcToIgnoreUnimportantErrore(e);
}

// Add Comment Input Validation
// tickets Count Cheker
let ticketsCountInput = document.getElementById("ticketsCount"),
    ticketsCountForm = document.getElementById("ticketsCountForm");

try {

    ticketsCountForm.onsubmit = function(e) {
        e.preventDefault();
        let ticketsCount = ticketsCountInput.value;
        let confirmMsg = confirm("لقد اخترت " + ticketsCount + " تذاكر هل تريد المتابعه؟ ");
        if (confirmMsg) {
            ticketsCountForm.submit();
        } else {
            return false;
        }
    }

} catch (e) {

    funcToIgnoreUnimportantErrore(e);
}
// Profile Navigation Validition
let tabsBtns = document.querySelectorAll(".profile-tabs ul li:not(:last-child) a"),
    tabs = document.querySelectorAll(".tabs-content .tab"),

    passwordEditBtn = document.querySelector(".edit-password"),
    passwordTabBtn = document.querySelector(".profile-tabs ul li #password"),
    passwordChangeTab = document.getElementById("change-password"),

    deatailsEditBtn = document.querySelector(".edit-profile"),
    detailsTabBtn = document.querySelector(".profile-tabs ul li #details"),
    editDetailsTab = document.getElementById("edit-details"),

    contactsEditBtn = document.querySelector(".edit-contacts"),
    contactsTabBtn = document.querySelector(".profile-tabs ul li #contacts"),
    contactsTab = document.getElementById("contacts-tab");
for (let t = 0; t < tabsBtns.length; t++) {
    tabsBtns[t].onclick = function(e) {
        e.preventDefault();
        if (tabsBtns[t].classList.contains("active")) {
            return false;
        } else {
            tabsBtns.forEach(tab => {
                tab.classList.remove("active");
            });
            tabsBtns[t].classList.add("active");
            tabs.forEach(tab => {
                tab.classList.remove("active");
            });
            tabs[t].classList.add("active");
        }
    }
}

try {
    passwordEditBtn.onclick = function() {
        tabsBtns.forEach(tab => {
            tab.classList.remove("active");
        });
        passwordTabBtn.classList.add("active");
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        passwordChangeTab.classList.add("active");
    }
    contactsEditBtn.onclick = function() {
        tabsBtns.forEach(tab => {
            tab.classList.remove("active");
        });
        contactsTabBtn.classList.add("active");
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        contactsTab.classList.add("active");
    }
    deatailsEditBtn.onclick = function() {
        tabsBtns.forEach(tab => {
            tab.classList.remove("active");
        });
        detailsTabBtn.classList.add("active");
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        editDetailsTab.classList.add("active");
    }

} catch (e) {

    funcToIgnoreUnimportantErrore(e);
}
//End Of Profile Navigation Validition
// Form Validation Payment Details
let formSubmit = document.getElementById("payTicket"),
    formErrors = document.querySelectorAll(".err"),
    fromInputs = document.querySelectorAll(".pay-methods form input"),
    visaExpireInput = document.getElementById("expire");
try {
    formSubmit.onsubmit = function(ene) {
        ene.preventDefault();
        for (let i = 0; i < fromInputs.length; i++) {
            fromInputs[i].onfocus = () => {
                if (formErrors[i].textContent != null || formErrors[i].textContent != "") {
                    formErrors[i].textContent = "";
                }
            }
            fromInputs[i].onblur = () => {
                if (fromInputs[i].value == null) {
                    if (fromInputs[0].value == null) {
                        formErrors[0].innerHTML = "رجاء كتابة أسمك بالكامل";
                    } else if (fromInputs[1].value == null) {
                        formErrors[1].innerHTML = "رجاء كتابة رقم هاتفك ";
                    } else if (fromInputs[2].value == null) {
                        formErrors[2].innerHTML = "رجاء كتابة بريدك الالكتروني ";
                    } else if (fromInputs[3].value == null) {
                        formErrors[3].innerHTML = "رجاء كتابة عنوانك بالتفصيل ";
                    } else if (fromInputs[4].value == null) {
                        formErrors[4].innerHTML = "رجاء إدخال رقم بطاقة الائتمان  ";
                    } else if (fromInputs[5].value == null) {
                        formErrors[5].innerHTML = "رجاء إدخال تاريخ الانتهاء";
                    }
                }
            }
        }
        if (fromInputs[0].value == "") {
            formErrors[0].innerHTML = "رجاء كتابة أسمك بالكامل";
        } else if (fromInputs[1].value == "") {
            formErrors[1].innerHTML = "رجاء كتابة رقم هاتفك ";
        } else if (fromInputs[2].value == "") {
            formErrors[2].innerHTML = "رجاء كتابة بريدك الالكتروني ";
        } else if (fromInputs[3].value == "") {
            formErrors[3].innerHTML = "رجاء كتابة عنوانك بالتفصيل ";
        } else if (fromInputs[4].value == "") {
            formErrors[4].innerHTML = "رجاء إدخال رقم بطاقة الائتمان  ";
        } else if (fromInputs[5].value == "") {
            formErrors[5].innerHTML = "رجاء إدخال تاريخ الانتهاء";
        } else {
            formSubmit.submit();
        }
    }
} catch (e) {
    funcToIgnoreUnimportantErrore(e)
}

// end of Form Validation Payment Details
// Show and Hie Password In Profile Page In Edit Password
let showPasswordChangingIcon = document.querySelectorAll(".tabs-content .change-password .details .fa-eye-slash"),
    passwordChangeInputs = document.querySelectorAll(".tabs-content .change-password input[type='password']");
for (let i = 0; i < showPasswordChangingIcon.length; i++) {
    showPasswordChangingIcon[i].onclick = function() {
        if (showPasswordChangingIcon[i].classList.contains("fa-eye")) {
            showPasswordChangingIcon[0].classList.remove("fa-eye");
            showPasswordChangingIcon[1].classList.remove("fa-eye");
            showPasswordChangingIcon[2].classList.remove("fa-eye");
            showPasswordChangingIcon[0].classList.add("fa-eye-slash");
            showPasswordChangingIcon[1].classList.add("fa-eye-slash");
            showPasswordChangingIcon[2].classList.add("fa-eye-slash");
            if (passwordChangeInputs[i].type === "text") {
                passwordChangeInputs[0].type = "password";
                passwordChangeInputs[1].type = "password";
                passwordChangeInputs[2].type = "password";
            }
        } else if (showPasswordChangingIcon[i].classList.contains("fa-eye-slash")) {
            showPasswordChangingIcon[0].classList.add("fa-eye");
            showPasswordChangingIcon[1].classList.add("fa-eye");
            showPasswordChangingIcon[2].classList.add("fa-eye");
            showPasswordChangingIcon[0].classList.remove("fa-eye-slash");
            showPasswordChangingIcon[1].classList.remove("fa-eye-slash");
            showPasswordChangingIcon[2].classList.remove("fa-eye-slash");

            if (passwordChangeInputs[i].type === "password") {
                passwordChangeInputs[0].type = "text";
                passwordChangeInputs[1].type = "text";
                passwordChangeInputs[2].type = "text";
            }
        }
    }

}
// End Of Show and Hie Password In Profile Page In Edit Password
// Error Ignore Function
function funcToIgnoreUnimportantErrore(e) {
    return false;
    /*
    We Cant Call Tow Elements form Tow pages By One ClassName In One File Javascript, this will return an Error
    In Console, and Stop JS File Excuting, So I'm Using This Function To Ignore This unimpotant Error, After This I Can call
    tow Elements From tow page In One JS File without any Errors and my Code Will Be More Clean and Good
    */
}