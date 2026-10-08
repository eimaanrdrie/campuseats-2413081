# Week 1 reflection
1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
Answer:Imperative programming means manually telling the browser how to update the UI step by step. Declarative programming in React means describing what the UI should look like, and React handles the updates when data changes.

2. Why must a component name start with a capital letter?
Answer:React uses capital letters to distinguish custom components from normal HTML elements. For example, <Header /> is a React component, while <header> is an HTML element.

3. What does a fragment <>...</> do, and why not just use a <div>?
Answer:A fragment groups multiple elements without adding an extra element to the DOM. Unlike a <div>, it keeps the HTML structure cleaner and avoids unnecessary layout changes.

4. Name one benefit of splitting the UI into small components.
Answer:Small components make code easier to maintain and reuse because each component handles a specific part of the UI.
