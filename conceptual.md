### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
To allow for single page applications, change what is rendered depending on the url.

- What is a single page application?
An application that renders components instead of pages, and allows for re-rendering of components rather than the entire page.

- What are some differences between client side and server side routing?
Client side routing involves different components reloading whereas server side routing reloads pages.

- What are two ways of handling redirects with React Router? When would you use each?
With the redirect component or by pushing a route to history with useHistory. UseHistory option lets you press back to the previous url whereas the redirect method doesnt add that url to the history so you can't go back to it. 

- What are two different ways to handle page-not-found user experiences using React Router? 
You could render a page-not-found component. Or use a redirect component to a diff page liket he home page.

- How do you grab URL parameters from within a component using React Router?
useParams from react-router-dom'

- What is context in React? When would you use it?
Context is used to share data between components without sending properties down the component generations. Use it for things like themes. 

- Describe some differences between class-based components and function
  components in React.
  class method uses render() method. Function method just returns components or html. Many of the hooks used in functional components are not used with class components. Class components have their own lifecycle methods instead of hooks.

- What are some of the problems that hooks were designed to solve?
Hooks simplify the many methods in the react lifecyle.