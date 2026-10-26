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
