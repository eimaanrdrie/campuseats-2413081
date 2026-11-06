# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- **Tool(s):** ChatGPT / Codex
- **What I asked for:** I asked for help understanding React basics, setting up a Vite project, creating functional components using JSX, and building the CampusEats interface with `Header`, `VendorCard`, `MenuItemCard`, and `Footer`.
- **What I kept, changed or rejected, and why:** I kept the component-based structure, JSX syntax, conditional rendering for vendor availability, and `toFixed(2)` for displaying prices. I customized the restaurant information, menu items, and styling to match my own CampusEats design.
- **One thing the AI got wrong and how I fixed it:** AI used `class` instead of `className` in JSX. I corrected it to `className` because React requires this attribute for CSS classes.

## Week 2
- **Tool(s):** ChatGPT / Codex
- **What I asked for:** I asked for help understanding React props, `useState`, rendering lists using `.map()`, moving restaurant data into `vendors.js`, selecting vendors, updating the cart count, and adding category buttons.
- **What I kept, changed or rejected, and why:** I kept the reusable components with props, vendor and menu arrays, `useState` for selected vendors and cart items, and `.map()` for rendering lists. I adapted the data to use my own restaurant names, menu items, prices, and unique IDs. I also added category buttons for my assigned personal feature.
- **One thing the AI got wrong and how I fixed it:** AI initially used the array index as the React `key` when rendering menu items. I changed it to `item.id` to use stable, unique keys as required by the lab specification.

## Week 3
- **Tool(s):** ChatGPT / Codex
- **What I asked for:** I asked for help understanding the Week 3 requirements, moving vendor data to a mock API, fetching it with React `useEffect`, building a cart with quantities, creating checkout validation, and filtering menu items by category.
- **What I kept, changed or rejected, and why:** I kept the ideas for `fetch('/api/vendors.json')`, `AbortController` cleanup, cart lines shaped as `{ item, qty }`, derived totals with `reduce`, controlled checkout fields, and the category filter. I adapted the code to match my own CampusEats components, vendors, styling, and matric-number-based IDs.
- **One thing the AI got wrong and how I fixed it:** AI first used a component named `Cart`, but the lab specification uses `CartPage`. I changed the component and import names to `CartPage` so they match the required structure.


## Week 4

- **Tool(s):** ChatGPT / Codex

- **What I asked for:** I used AI for targeted help with the Week 4 React requirements. I asked how to move the existing cart state from `App.jsx` into a Context Provider so that the header, menu pages, cart page, and orders page could access the same cart data without passing props through multiple components. I also asked how to save cart and order data with a reusable `useLocalStorage` hook, including safe `try/catch` handling for `JSON.parse()` and `localStorage.setItem()`.

  I asked for an explanation of how to change the previous single-page view state into React Router routes: `/`, `/vendor/:id`, `/cart`, `/orders`, and a catch-all not-found route. For my assigned digit-1 feature, I specifically asked how to store the selected menu category in the URL query string using `useSearchParams`, so URLs such as `/vendor/2413081-eaq-restaurant?cat=Rice` show the same filtered menu after refresh or when shared.

- **What I kept, changed or rejected, and why:** I kept the approach of using `CartProvider` as the owner of `cart` and `orders`, because this removes unnecessary cart props from `Header`, `MenuList`, and the cart page. I kept derived `count` and `total` values instead of saving them separately, because they can always be calculated from the cart lines and cannot become out of sync.

  I kept `useVendors` for the fetch, loading, error, retry, and cleanup logic because it makes `App.jsx` only responsible for the route table. I used `useParams()` to identify the selected vendor from the route and added a “Vendor not found” result for an invalid vendor ID.

  For the category feature, I kept the selected category in `searchParams` rather than component state. Selecting Rice adds `?cat=Rice`; selecting All removes `cat` from the URL. I changed the filter code to validate the URL category against the current vendor’s categories, so an unsupported value does not break the menu.

- **One thing the AI got wrong and how I fixed it:** The first `VendorCard` version still used the old `onSelect(vendor.id)` button behaviour from the single-page app. After routing was introduced, `HomePage` no longer supplied `onSelect`, which caused `TypeError: onSelect is not a function`. I corrected the component by replacing the button with a React Router `Link` using `to={\`/vendor/${vendor.id}\`}`. This makes each vendor card navigate directly to its own route.