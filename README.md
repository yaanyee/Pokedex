# Pokédex

A Pokédex web application developed as part of my learning journey during my dual vocational training (Dual Education).

The main goal of this project is to build a Pokémon encyclopedia using web technologies, starting with a static interface and progressively evolving towards a dynamic application connected to the [PokéAPI](https://pokeapi.co/).

## About the project

This project consists of a Pokédex where Pokémon are displayed through individual cards containing their images and visual information.

At its current stage, the application uses locally stored images and a manually created HTML structure. This allows me to focus on learning and improving my frontend development skills before implementing external API integration.

The long-term objective is to make the application fully dynamic, retrieving Pokémon data from the PokéAPI and automatically generating the corresponding content.

## Current features

- Static Pokédex interface built with HTML.
- Pokémon cards manually defined in the HTML structure.
- Local Pokémon images and icons stored in the project.
- CSS styling for the application's layout and visual appearance.
- Centralized CSS variables for easier style management.

## Project structure

```text
Pokedex/
│
├── imagenes/
│   ├── iconos/
│   └── pokemons/
│
├── index.html
│
├── variables.css
│
└── style.css
```

### File description

| File / Folder | Description |
|---|---|
| `imagenes/` | Contains the images and icons used throughout the application. |
| `imagenes/iconos/` | Stores interface icons. |
| `imagenes/pokemons/` | Contains Pokémon images used as temporary local assets. |
| `index.html` | Main HTML file containing the current static application structure and Pokémon cards. |
| `variables.css` | Centralizes CSS variables used across the project, such as colors and other reusable style values. |
| `style.css` | Contains the styles responsible for the application's layout, appearance and visual presentation. |

## Technologies

The project currently uses:

- **HTML5** – Application structure and content.
- **CSS3** – Styling, layout and visual design.

### Planned technologies

- **JavaScript** – To handle application logic and API communication.
- **React** – To build a component-based interface and manage dynamic content.
- **PokéAPI** – External API used to retrieve Pokémon information.

## Future development

The project is currently in an early development and learning stage. The next steps are planned to gradually transform the static application into a dynamic Pokédex.

Planned improvements include:

- [ ] Integrate the PokéAPI to retrieve Pokémon data.
- [ ] Generate Pokémon cards dynamically based on API responses.
- [ ] Replace temporary local images with data and images provided by the API.
- [ ] Implement reusable React components.
- [ ] Add Pokémon search functionality.
- [ ] Add filters by Pokémon type.
- [ ] Display detailed information about each Pokémon.
- [ ] Improve the application's responsive design.

## Project status

<sub>Work in progress</sub>

This repository is actively being developed as part of my professional learning process during my dual vocational training.

The README and project documentation will be updated as new technologies, features and improvements are implemented.

---

**Note:** This project is an independent educational project and is not affiliated with Nintendo, Game Freak or The Pokémon Company. Pokémon and related assets are trademarks and copyrights of their respective owners.
