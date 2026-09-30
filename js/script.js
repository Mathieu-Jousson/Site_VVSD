(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (header && toggle && menu) {
    header.classList.add("nav-ready");
    toggle.hidden = false;

    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status && window.fetch && window.FormData) {
    var submitButton = form.querySelector("button[type='submit']");

    var showStatus = function (type, message) {
      status.className = "form-status is-" + type;
      status.textContent = message;
    };

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      submitButton.disabled = true;
      status.className = "form-status";
      status.textContent = "Envoi en cours…";

      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (!response.ok || !data.success) {
              throw new Error(data.message || "Erreur");
            }
          });
        })
        .then(function () {
          form.reset();
          showStatus("success", "Merci ! Votre message a bien été envoyé. Nous vous répondrons dès que possible.");
        })
        .catch(function () {
          showStatus("error", "Une erreur est survenue : votre message n'a pas pu être envoyé. Veuillez réessayer plus tard.");
        })
        .then(function () {
          submitButton.disabled = false;
        });
    });
  }
})();
