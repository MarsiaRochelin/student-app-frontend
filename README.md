# TODOs

07/12 class
X Create a frontend React repo for our project
X Connect the repo to our backend server
X Fetch a list of students... and display it
X Break the list of students into React components

07/15 class

# NEXT TIME

07/15 class: Style the list

# QUESTIONS

Backend
X What is middleware and when is it used?
X What exactly does cors do?

Frontend
X What tools will we use to build the frontend?
X When does useEffect fire or not fire? What does an empty dependency array do?
Can you further explain the difference or benefits of using scss instead of css?

# THINGS TO DISCUSS

07/12 class

What causes a React component to rerender?

1. The component's parent renders again
2. The component's props change
3. The component's state changes

07/15 class

1. Why does organizing your components and html help you when you write css?

Organizing your components and html helps you to separate concerns when writing CSS you can do this by wrapping them in a container.

2. How can you use css grid to center something?

You can use css grid to access the content-align [which organized your element horizontally] and align-items [which organized your element vertically] attributes.

3. What determines the height and width of an element?

The height and width of an element is determined by it’s whats assigned to it and/or its parent,

4. What are some things you can do to debug CSS? (Code changes, developer tools, …)

Some things you can do to debug CSS:
using a border around you elements
inspector tool far left button

07/20

1. How do we show and hide “Loading...” on the screen? by following the loading pattern: We set it in state and assigning it's value to true so that it renders on componenet mount, once the async action is completed, we then set loading to false.

2. How do we show and hide an error on the screen? We show an error on our screen by setting up state to account for one first, then by hitting one in our logic react render the logic in our catch block were we passed the error.message object in our state.

3. Why do we need an if/else block AND a try/catch when using fetch? We need and if/else block to conditionally render our data and we need a try catch block when using fetch for error handling when trying to get a response when rendering our UI to still show something.

4. What is the difference between a ternary and the and (&&) statement in React? When should you use each one?
   Ternary is a condition that renders one thing are another based on it being truthy/falsey the && operator needs what on the left operand to be truty to render the right operand.
