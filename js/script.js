document.addEventListener("DOMContentLoaded", () => {
  // 1. MARQUEE CLONING
  const initMarquee = () => {
    const track = document.querySelector(".marquee__track");
    if (track) {
      const content = track.innerHTML;
      track.innerHTML = content + content;
    }
  };

  // 2. FEATURES SLIDER
  const initFeaturesSlider = () => {
    const track = document.getElementById("featuresTrack");
    const nextBtn = document.querySelector(".feat-next");
    const prevBtn = document.querySelector(".feat-prev");

    if (!track || !nextBtn || !prevBtn) return;

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: 300, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -300, behavior: "smooth" });
    });
  };

  // 3. FORM VALIDATION (STRICT)
  const form = document.querySelector(".enquire-form");
  if (form) {
    // Real-time strict input for phone (numbers only)
    const phoneInput = form.querySelector('input[type="tel"]');
    if (phoneInput) {
      phoneInput.addEventListener("input", (e) => {
        // Remove non-numeric characters
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = form.querySelector("#name");
      const phoneInput = form.querySelector("#phone");
      const btn = form.querySelector(".btn--submit");

      const nameValue = nameInput.value.trim();
      const phoneValue = phoneInput.value.trim();

      // Name: Letters and spaces only
      const namePattern = /^[A-Za-z\s]+$/;

      // Phone: Exact 10 digits AND cannot start with 0
      const phonePattern = /^[1-9]\d{9}$/;

      if (!namePattern.test(nameValue)) {
        alert("Please enter a valid Name (Letters only).");
        nameInput.focus();
        return;
      }

      if (!phonePattern.test(phoneValue)) {
        alert(
          "Please enter a valid 10-digit Phone Number (Cannot start with 0).",
        );
        phoneInput.focus();
        return;
      }

      // Success Animation
      const originalText = btn.innerHTML;
      btn.innerHTML = "Submitting...";
      btn.style.opacity = "0.7";

      setTimeout(() => {
        alert("Thank you! Your enquiry has been sent successfully.");
        btn.innerHTML = originalText;
        btn.style.opacity = "1";
        form.reset();
      }, 1000);
    });
  }

  initMarquee();
  initFeaturesSlider();
});
