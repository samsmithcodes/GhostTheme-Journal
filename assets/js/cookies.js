function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function () {
    const cbElem = document.getElementById("cookie-banner");

    function cbHide() {
        cbElem.style.opacity = "0";
        setTimeout(() => {
            cbElem.style.display = "none";
        }, 200);
    }

    if (!getCookie("cookie_consent")) {
        cbElem.style.display = "block";
        setTimeout(() => {
            cbElem.style.opacity = "1";
        }, 100);
    }

    document.getElementById("cookie-accept-required").addEventListener("click", function () {
        setCookie("cookie_consent", "required", 365);
        cbHide();
    });

    document.getElementById("cookie-accept-all").addEventListener("click", function () {
        setCookie("cookie_consent", "all", 365);
        cbHide();

        // Optionally: Load Matomo immediately on accept
        if (matomoEnabled) {
            if (typeof loadMatomo === "function") {
                loadMatomo();
            }
        }
    });
});