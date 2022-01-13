# Houm Challenge

Aplicación web desarrollada para el desafío técnico de [Houm](https://houm.com/cl) para el cargo de Frontend Engineer. El desafío requiere consumir una API y mostrar su información en _hero cards_. Además de permitir filtros y mostrar de a 10 elementos. Para lograr la paginación se implemento un scroll infinito.

La aplicación se llama BrewdogBeers y permite visualizar las distintas cervezas de la cervecería [Breewdog](https://www.brewdog.com/uk/community/culture/our-history). Se escogió este tema pues una de sus cervezas más conocidas es la [Punk IPA](https://www.brewdog.com/uk/punk-ipa-4-can) y a su vez existe una API llamada [Punk API](https://punkapi.com/documentation/v2). Esta de más agregar que me gustan mucho las cervezas jajajaj [TODO: agregar emojis].

---

## Tecnologías usadas:

- App framework: `Next.js`
- Componentes: `MUI`
- Lenguaje de programación: `Typescript`
- Requests: `axios`
- Deploy: `Vercel`
- Testing: `Cypress`
- Manejo de formularios: `react-hook-form`
- Commits semánticos: `commitlint`
- Estilo del código: `eslint` + `prettier`

Se hace use de `husky` para correr el linter antes de hacer commit al repositorio.

También se implemento un template para las pull requests donde se debe especificar una descripción y corroborar que se haya probado en al menos 3 navegadores (Chrome, Firefox y Safari).

---

## Vistas

Se han implementado las siguientes 3 vistas:

### 1. [Home](https://houm-challenge-od1x0clkv-jorgebdelat.vercel.app/)

Vista principal de la aplicación, implementada haciendo uso de SSG para cargar la página con las primeras 10 cervezas. Luego al hacer scroll, las siguientes cervezas son solicitadas por el cliente, lo mismo con la aplicación de filtros.

En esta vista se pueden filtrar las cervezas por una combinación de las siguientes 3 opciones.

1. Por su nombre
2. Por rango de [IBU](https://beerandbrewing.com/dictionary/eej03p6ZUI/)
3. Por rango de [ABV](https://www.webstaurantstore.com/blog/3620/what-is-abv.html)

### 2. [About](https://houm-challenge-od1x0clkv-jorgebdelat.vercel.app/about)

Vista con información general sobre la motivación y el por qué de la aplicación. Realizada como una página estática.

### 3. [Beer by id](https://houm-challenge-od1x0clkv-jorgebdelat.vercel.app/beers/1)

Vista que contiene la información en detalle de una cerveza, implementada haciendo uso de SSG. [TODO: implementar SSG xd]. Se puede conocer su nombre, IBU, ABV, descripción, tips del cervecero y comidas con las que acompañarla.

---

## Funcionalidades adicionales

Además de lo pedido en el challenge, se implementaron las siguentes funcionalidades adicionales,

1. Agregar/remover cervezas de favoritos. Se guarda el estado de la aplicación en `localStorage` como un arreglo de _ids_.
2. Botón para hacer scroll automático a la parte superior de la pantalla.

---

## Estructura de carpetas

- `components`
  - `beer-info`: componente para mostrar la información de una cerveza en particular.
  - `beers-grid`: grilla para ordenar _hero cards_.
  - `filter`: filtros aplicables a las cervezas.
  - `infinite-scroller`: abstrae la lógica del scroll infinito.
  - `layout`: continene componentes de layout general de la aplicación.
  - `link`: wrapper del link de Next.js y MUI para poder usarlos como `<Link />`.
  - `scroll-to-top-button`: botón para hacer scroll automático a la parte superior de la vista.
- `cypress`: e2e testing.
- `data`: contiene los llamados a la API.
- `hooks`: hooks personalizados para abstraer lógica de los componentes.
- `lib`: continene función para crear la cache de `Emotion`.
- `pages`: distintas páginas de la aplicación.
- `public`
- `services`: definición de servicio que expone consultas a la API por medio de `axios`.
- `styles`: contiene tema para `MUI` y estilo de páginas.
- `types`: definición de tipos para typescript.

## Testing

Se han implementado tests e2e por medio de `cypress` para cada una de las vistas descritas.

- Home

  - should render the home page and display filters box
  - should navigate to the about page
  - should render 10 initial beer cards
  - should redirect to beer page
  - should load 10 more beer cards
  - should add beer to favorites
  - should remove beer from favorites
  - should render filters correctly
  - should apply name filter correctly
  - should apply ibu filter correctly
  - should apply abv filter correctly

- About

  - should render the about page and display paragraphs and links
  - should navigate to the home page
  - should navigate to the home page by clicking the logo

- Beer by id
  - should display beer name correctly
  - should display beer description correctly
  - should display beer ingredients correctly
  - should display beer brewers tips correctly
  - should display beer food pairing correctly
  - should navigate to the about page
  - should navigate to the home page
  - should navigate to the home page by clicking the logo

## Comandos

```bash
# desarrollo local
yarn dev

# build
yarn build

# correr build
yarn start

# abrir consola de cypress
yarn test

# generar coverage
yarn [TODO: generar coverage]
```
