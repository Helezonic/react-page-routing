# Page Routing Mini Project using React-Router

Bundler - Vite </br>
CSS Library - Tailwind CSS

## Features

1. Routing through Home, About, Contact, Github using `<NavLink>`, `createBrowserRouter()`, `<RouterProvider>`, `<Outlet>`
with Header and Footer component fixed.

2. Github stats are fetched from Github API.

3. For optimization, loaders are used to fetch API using `useLoaderData()` hook.

4. Params - an endpoint `user/:id` is created using routing hook `useParams()`, which displays the typed 'id' on the page.

---

## Feature to be added

- Get Github stats of username inputted by User on Header and route to the Github Stats page to display