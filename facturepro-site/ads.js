/* Encarts pub de la sidebar (site vitrine/blog uniquement — jamais dans l'app elle-même).
   Contrairement à l'app FacturePro (1 seule annonce discrète), ici on peut se permettre
   plusieurs annonces empilées puisque les visiteurs sont en mode "lecture" (blog) et pas
   en train de remplir une facture. Complète ce tableau avec tes vrais liens d'affiliation,
   ou laisse tel quel et active Google AdSense en plus (voir README-site.md). */
const SITE_ADS = [
  { title: "Ouvre un compte pro en 5 min", desc: "Compare les banques pro pour auto-entrepreneurs.", url: "#" },
  { title: "Compta simplifiée", desc: "Déclare ton CA en 2 clics, sans expert-comptable.", url: "#" },
  { title: "Assurance RC Pro dès 12€/mois", desc: "Obligatoire pour beaucoup d'activités freelance.", url: "#" },
  { title: "Mutuelle auto-entrepreneur", desc: "Comparateur gratuit, résiliable à tout moment.", url: "#" },
  { title: "Formation freelance", desc: "Trouve tes premiers clients en 30 jours.", url: "#" },
];

function renderSidebarAds(containerId, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const picks = [...SITE_ADS].sort(() => Math.random() - 0.5).slice(0, count || 3);
  el.innerHTML = picks.map(ad => `
    <a class="side-ad" href="${ad.url}" target="_blank" rel="noopener sponsored">
      <span class="side-ad-label">Sponsorisé</span>
      <span class="side-ad-title">${ad.title}</span>
      <span class="side-ad-desc">${ad.desc}</span>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => renderSidebarAds("sidebarAds", 3));
