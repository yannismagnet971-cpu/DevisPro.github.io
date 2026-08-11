# FacturePro — Site vitrine & blog

Site marketing statique (HTML/CSS/JS, aucun backend) qui fait parler de l'app FacturePro : page d'accueil orientée conversion + blog SEO avec sidebar publicitaire plus fournie que dans l'app elle-même.

## Structure
- `index.html` — landing page (hero, fonctionnalités, tarifs, FAQ)
- `blog/index.html` — liste des articles
- `blog/*.html` — articles individuels, chacun avec une sidebar de 3 pubs
- `config.js` — un seul endroit pour définir l'URL de ton app déployée
- `ads.js` — liste des annonces affichées dans la sidebar du blog (jusqu'à 5, 3 tirées au sort à chaque page)

## Avant de mettre en ligne
1. Déploie d'abord l'app `facture-pro` (voir son propre README) et récupère son URL.
2. Dans `config.js`, remplace `APP_URL` par cette URL — tous les boutons "Essayer gratuitement" / "Ouvrir l'app" du site se mettent à jour automatiquement.
3. Dans `ads.js`, remplace les `url: "#"` par tes vrais liens d'affiliation.

## Mettre en ligne
Contrairement à l'app (qui a un backend Stripe), ce site est 100% statique : le glisser-déposer sur [netlify.com/drop](https://app.netlify.com/drop) fonctionne très bien, ou connecte-le à un sous-domaine différent de l'app (ex: `facturepro.app` pour le site, `app.facturepro.app` pour l'outil).

## Activer Google AdSense sur ce site (recommandé ici plutôt que sur l'app)
Ce site a un vrai avantage pour l'approbation AdSense : du contenu éditorial réel (articles de blog), ce que l'app (un outil) n'a pas. Une fois le site en ligne avec un peu de trafic :
1. Crée un compte sur [adsense.google.com](https://adsense.google.com), ajoute ton domaine.
2. Une fois approuvé, ajoute le script AdSense dans le `<head>` de chaque page (ou juste `blog/*.html` si tu préfères le garder seulement sur les articles), et places des blocs `<ins class="adsbygoogle">` à côté ou en complément de la sidebar existante (`#sidebarAds`).

## Pourquoi pas plus de pubs sur la page d'accueil ?
La page d'accueil (`index.html`) sert à convertir les visiteurs en utilisateurs de l'app — trop de pubs dessus ferait fuir les gens avant qu'ils testent le produit. La sidebar publicitaire dense (3 annonces) est donc concentrée sur le blog, où les visiteurs sont déjà en train de lire et plus tolérants aux annonces. Ajuste ce choix si les données de trafic montrent autre chose.

## Prochaines étapes pour le SEO
- Ajoute 3 à 5 articles supplémentaires ciblant des recherches comme "logiciel facturation gratuit", "auto-entrepreneur TVA", "modèle devis gratuit".
- Soumets le site à Google Search Console dès sa mise en ligne.
- Partage les articles (pas juste l'app) dans les groupes/forums d'auto-entrepreneurs : le contenu utile génère plus de partages qu'une simple pub pour l'outil.
