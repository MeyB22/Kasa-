# Kasa

Application web de location immobilière entre particuliers, réalisée dans le cadre du **Projet 7** de la formation Développeur Web d'OpenClassrooms.

Le projet a été développé en **React** puis migré de Create React App vers **Vite**.

## Fonctionnalités

- Page d'accueil avec la liste des logements
- Page détaillée d'un logement (carrousel d'images, description, équipements, note)
- Carrousel d'images (slider) avec navigation
- Menus déroulants (collapses) pour la description et les équipements
- Page "À propos"
- Page d'erreur 404

## Technologies

- [React](https://react.dev/) 18
- [React Router](https://reactrouter.com/) 6 (gestion des routes)
- [Vite](https://vitejs.dev/) (build & serveur de développement)
- [Sass](https://sass-lang.com/) (styles SCSS)

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/MeyB22/Kasa-.git
cd Kasa-
```

Installer les dépendances :

```bash
npm install
```

## Lancer le projet

En mode développement :

```bash
npm run dev
```

Le site est alors accessible sur http://localhost:5173

Pour générer la version de production :

```bash
npm run build
```

## Structure du projet

```
src/
├── asset/images/   → images et icônes
├── components/     → composants réutilisables (Banner, Card, Collapse, Slider...)
├── layout/         → Header et Footer
├── pages/          → pages du site (Home, About, Lodging, ErrorPage)
├── database/       → données des logements (database.json)
├── styles/         → fichiers SCSS
├── App.jsx         → routes de l'application
└── main.jsx        → point d'entrée
```
