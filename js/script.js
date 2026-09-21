/* ==========================================
   ROYA BRICKX
   MAIN JAVASCRIPT
========================================== */


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


/* ==========================================
   MOBILE MENU
========================================== */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("open");

        menuToggle.classList.toggle("active");


        const isOpen =
            navMenu.classList.contains("open");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    /* ======================================
       CLOSE MENU WHEN A LINK IS CLICKED
    ====================================== */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* ======================================
       RESET MENU WHEN RETURNING TO DESKTOP
    ====================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 767) {

            navMenu.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}