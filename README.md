# Todo Application

A scalable and interactive Todo application built with React.js, Redux, and Redux Persist. The application allows users to add, edit, toggle, and delete tasks while persisting the data in the browser's local storage.

---

## **Features**

- **Add Todos:** Create new Todo items with a title.
- **View Todos:** Display a list of all added Todos.
- **Edit Todos:** Modify the title of existing Todos.
- **Delete Todos:** Remove unwanted Todo items from the list.
- **Toggle Status:** Mark tasks as complete or incomplete using a checkbox.
- **Dark/Light Mode:** Switch between dark and light UI themes for better accessibility.
- **State Persistence:** Todos are saved in the browser's local storage using Redux Persist, ensuring data remains intact even after refreshing the page.
- **Responsive Design:** Fully mobile-friendly and responsive UI designed with TailwindCSS.

---

## **Live Demo**

[Live Link](https://todo-application-rho-weld.vercel.app/)

---

## **Preview**

| Dark Mode                                | Light Mode                                 |
| ---------------------------------------- | ------------------------------------------ |
| ![image](./src//assets/design/dark.jpeg) | ![image](./src//assets//design/light.jpeg) |

---

## **Setup and Running Instructions**

### **1. Prerequisites**

Ensure the following software is installed on your system:

- **Node.js:** Version 14.x or above
- **npm or yarn:** Latest version
- **Git:** For cloning the repository

### **2. Clone the Repository**

```bash
git clone https://github.com/1skepta/Todo-Application.git
cd Todo-Application
```

### **3. Install Dependencies**

Run the following command to install all the project dependencies

```bash
npm install
```

or

```bash
yarn install
```

### **4. Start the Development Server**

To run the app locally, use:

```bash
npm start
```

or

```bash
yarn start
```

The app will be available at http://localhost:3000 in your browser.

### **5. Start the Development Server**

To build the app for production, use:

```bash
npm run build
```

or

```bash
yarn build
```

The optimized app will be availabl in the build/ directory.

---

## **Application Workflow**

### **1. Adding Todos**

- User inputs a task in the TodoInput Component
- On submission, the task is dispatched to Redux and added to the global state.

### **2. Viewing Todos**

- Tasks are displayed using the TodoList and TodoItem components.
- Each item shows the task title and status.

### **3. Editing Todos**

- Clicking the "Edit" button allows the user to modify the task title.
- Changes are saved to the Redux state.

### **4. Deleting Todos**

- Clicking the "Delete" button removes the task from the Redux state.

### **5. Dark/Light Mode**

- A toggle button in the header allows switching themes.
- The theme is saved in local storage for persistence.

### **6. Persisting State**

- Redux Persist saves the global state in the browser's local storage, ensuring that todos remain intact even after refreshing the page.

---

## **Running Tests**

To run test for the application:

```bash
npm test
```

---

## **Contributing**

Contributions are welcome! To contribute:

**1. Fork this repository**

**2. Create a new branch for your feature or bug fix:**

```bash
git checkout -b feature-name
```

**3. Commit your changes:**

```bash
git commit -m "Description of feature"
```

**4. Push to your branch:**

```bash
git push origin feature-name
```

**5. Submit a pull request.**

---

## **Known Issues**

- Todos do not sync across devices.

---

## **License**

This project is licensed under [MIT LICENSE](LICENSE).

---

## **Author**

**Skepta**

- Github: [@1skepta](https://github.com/1skepta)
