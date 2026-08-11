/* Un seul endroit à modifier : l'URL de ton app FacturePro une fois déployée
   (voir facture-pro/README.md pour le déploiement Netlify). */
const APP_URL = "https://facturepro-app.netlify.app";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".app-link").forEach(el => { el.href = APP_URL; });
});
