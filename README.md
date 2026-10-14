# Dev Stack

> A simple website to find tools and technologies for the developers.

**Dev Stack** is a website where you can see many technologies. You can choose the ones you like and add them to your own stack.

:link: **Live Site:** [m32a5-dev-stack-arfanur35.netlify.app](https://m32a5-dev-stack-arfanur35.netlify.app/)

:package: **Repository:** [github.com/arfanur04/m32a5-dev-stack](https://github.com/arfanur04/m32a5-dev-stack)

---

## :hammer_and_wrench: Technologies Used

- **React.js** (with Typescript) - to build the user interface
- **Vite** - to run and build the project fast
- **Tailwind CSS** - to style the website
- **DaisyUI** - ready-made components for Tailwind
- **React-Toastify** - to show small alert messages
- **JSON** - to store technology data

---

## :sparkles: Key Features

1. **Build your own stack** - Click "Add to Stack" to add a technology to the "Your Stack" panel. You cannot add the same technology two times. After adding, the button changes to "✓ Added to Stack".
2. **Easy remove** - Remove one technology with the X button, or remove all of them with "Remove All". A toast message shows for every action.
3. **Responsive design with a gradient theme** - The website works on mobile, tablet and desktop. It has a sticky navbar, a loading text, and one orange → pink → violet gradient theme.

---

## :question: React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML inside JavaScript code. We use it in React because it is easy to read and easy to write. React changes JSX into normal JavaScript behind the scenes.

### 2. What is difference between props and state?

Props are data that a parent component sends to a child component. The child can only read them. State is data that a component keeps and changes by itself. When state changes, the component updates on the screen.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a component save a value and update the screen when the value changes. In this project, I used it to save the list of technologies that the uses adds to "Your Stack".

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs some code after the component shows on the screen. It is often used to get data from a file or a server. In this project, I did not use `useEffect`. I used React's `use()` hook with `Suspension` to load the JSON data. It also shows a loading text while the data is coming.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React know which item in the list is new, changed, or removed. With a unique key, React updates only the needed item and not the whole list. In this project, I used the technology `id` as the key.

### 6. What is conditional rendering? Show one place you used it?

Conditional rendering means showing different things on the screen based on a condition. In this project, the "Your Stack" panel shows an empty message when nothing is selected. When the user adds items, it shows the list.

```tsx
{stacks.length > 0 ? (
      <>
       <div className="flex flex-col gap-2">
        {stacks.map((stack) => (
         <TechStack
          key={stack.id}
          stack={stack}
          handleRemove={handleRemove}
         />
        ))}
       </div>
       <div>
        <button
         onClick={handleRemoveAll}
         className="btn-outline text-red-500 btn w-full mt-6 border-gray-300"
        >
         Remove All
        </button>
       </div>
      </>
     ) : (
      <p className="py-6 text-center text-gray-300 border rounded-md">
       Your Stack is empty
      </p>
     )}
```

### 7. How do you pass the data from a parent component to a child component, and does a child send something back to the parent?

A parent sends data to a child using props. A child sends something back by calling a function that the parent gave it as a prop. In this project, the parent gives each card the `technology` data and a `handleAdd` function. When the user clicks `Add to Stack` button, the card calls `handleAdd(technology)`, and the parent adds it to the stack.
