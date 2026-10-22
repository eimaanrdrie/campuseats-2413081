# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s):
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

## Week 2
- Tool(s):
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

## Week 3

**AI tools used:** ChatGPT / Codex

**What I asked AI:**  
I asked for help understanding the Week 3 requirements, moving vendor data to a mock API, fetching it with React `useEffect`, building a cart with quantities, creating checkout validation, and filtering menu items by category.

**What I kept or changed:**  
I kept the ideas for `fetch('/api/vendors.json')`, `AbortController` cleanup, cart lines shaped as `{ item, qty }`, derived totals with `reduce`, controlled checkout fields, and the category filter. I adapted the code to match my own CampusEats components, vendors, styling, and matric-number-based IDs.

**One thing AI got wrong:**  
AI first used a component named `Cart`, but the lab specification uses `CartPage`. I changed the component and import names to `CartPage` so they match the required structure.