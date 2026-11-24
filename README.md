# Pokédex

A Pokédex web application developed as part of my learning journey during my dual vocational training (Dual Education).

The goal of this project is to build a Pokémon encyclopedia using modern web technologies, progressively evolving from a static interface into a dynamic application with interactive features and API integration.

## About the project

This project consists of a web-based Pokédex where Pokémon are displayed through individual cards containing their images, types and other relevant information.

The application has evolved from a manually structured HTML interface into a dynamic card generation system using JavaScript. Pokémon data is currently stored in a JavaScript array, allowing the application to automatically generate cards based on the provided information.

The long-term objective is to connect the application directly to the [PokéAPI](https://pokeapi.co/) and eventually introduce React to create a more scalable and component-based architecture.

## Current features

- Dynamic Pokémon card generation using JavaScript.
- Pokémon information stored in a structured JavaScript array.
- Automatic generation of Pokémon names and formatted Pokédex IDs.
- Pokémon type display with dynamically generated type icons.
- Pokémon images loaded from the official PokéAPI sprites repository.
- Pokémon height and weight displayed with automatic unit conversion.
- Individual card styling based on each Pokémon's primary type.
- CSS styling for the application's layout and visual appearance.
- Centralized CSS variables for easier style management.
- Semantic HTML structure and accessibility attributes.

## Project structure

```text
Pokedex/
│
├── imagenes/
│   ├── iconos/
│   └── pokemons/
│
├── css/
│   ├── variables.css
│   └── style.css
│
├── js/
│   └── pokemon.js
│
└── index.html
```

### File description

| File / Folder | Description |
|---|---|
| `imagenes/` | Contains the images and icons used throughout the application. |
| `imagenes/iconos/` | Stores Pokémon type icons and interface icons. |
| `imagenes/pokemons/` | Contains locally stored Pokémon images and temporary assets. |
| `css/variables.css` | Centralizes CSS variables such as colors and reusable style values. |
| `css/style.css` | Contains the styles responsible for the application's layout and visual presentation. |
| `js/pokemon.js` | Contains the Pokémon data and JavaScript logic responsible for dynamically generating Pokémon cards. |
| `index.html` | Main HTML file containing the application's structure and entry point. |

## Technologies

The project currently uses:

- **HTML5** – Application structure and semantic content.
- **CSS3** – Styling, layout and visual design.
- **JavaScript (ES6+)** – Application logic, array manipulation, template literals and dynamic HTML generation.
- **PokéAPI resources** – Pokémon sprite images hosted in the PokéAPI GitHub repository.

### Planned technologies

- **PokéAPI** – Direct API integration to retrieve Pokémon information dynamically instead of relying on manually stored data.
- **React** – To build a component-based interface and improve application scalability.

## Future development

The project is continuously evolving as part of my frontend development learning process.

Planned improvements include:

- [x] Create a static Pokédex interface using HTML and CSS.
- [x] Organize CSS variables for centralized style management.
- [x] Create a structured JavaScript dataset containing Pokémon information.
- [x] Generate Pokémon cards dynamically using JavaScript.
- [x] Display Pokémon types and their corresponding icons dynamically.
- [x] Format Pokédex IDs with leading zeros.
- [x] Display Pokémon height and weight with unit conversion.
- [ ] Integrate the PokéAPI to retrieve Pokémon data directly.
- [ ] Replace the manually maintained dataset with API responses.
- [ ] Implement reusable React components.
- [ ] Add Pokémon search functionality.
- [ ] Add filters by Pokémon type.
- [ ] Display detailed Pokémon statistics and abilities.
- [ ] Implement interactive features and improve responsive design.

## Project status

<sub>Work in progress</sub>

The project is currently in the dynamic frontend development stage. The initial static interface has been transformed into a JavaScript-driven application capable of generating Pokémon cards from structured data.

The next major milestone is integrating the PokéAPI to automate data retrieval and reduce the need for manually maintained Pokémon information.

This repository is actively being developed as part of my professional learning process during my dual vocational training. The README and project documentation will be updated as new technologies, features and improvements are implemented.

---

**Note:** This project is an independent educational project and is not affiliated with Nintendo, Game Freak or The Pokémon Company. Pokémon and related assets are trademarks and copyrights of their respective owners.
