document.addEventListener("DOMContentLoaded", () => {
  // 1. Mode sombre persistant
  const themeBtn = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // 2. Menu mobile responsive
  const menuBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const expanded = navMenu.classList.contains("open");
      menuBtn.setAttribute("aria-expanded", String(expanded));
    });
  }

  // 3. Quiz rapide de cybersécurité (sur index.html)
  const quizForm = document.getElementById("cyber-quiz");
  const quizResult = document.getElementById("quiz-result");
  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let score = 0;
      const answers = { q1: "b", q2: "a" };

      Object.keys(answers).forEach((key) => {
        const selected = quizForm.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
          score += 1;
        }
      });

      quizResult.textContent = `Score : ${score} / 2. ${
        score === 2
          ? "Excellent réflexe sécurité !"
          : "Astuce : privilégiez l'authentification multifacteur (MFA) et les mises à jour régulières."
      }`;
    });
  }
});
