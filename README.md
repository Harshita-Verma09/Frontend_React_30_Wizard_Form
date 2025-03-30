# React Wizard Form

This is a simple multi-step form implemented in React using the `useState` hook for state management. It provides a wizard-like experience for users to fill out information across multiple steps.

## Features

-   Multi-step form with navigation buttons.
-   Input field validation before form submission.
-   Styled using Tailwind CSS for a modern look.
-   Clear feedback to the user through alert messages.

## Technologies Used

-   React
-   Tailwind CSS

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

5.  **Open your browser and navigate to `http://localhost:3000` to view the application.**

## Usage

The wizard form consists of three steps:

1.  **Step 1:** Enter your email and password.
2.  **Step 2:** Enter your age and address.
3.  **Step 3:** Enter your skills and expertise.

Use the "Next" and "Previous" buttons to navigate between steps. Once all fields are filled, click "Submit" to submit the form. If any field is empty, an alert message will prompt you to fill it.

## File Structure
eact-wizard-form/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Wizard.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── package-lock.json
└── README.md


-   `Wizard.js`: Contains the main wizard form component.
-   `App.js`: Wraps the Wizard component.
-   `index.js`: Renders the App component.
-   `public/index.html`: The HTML template for the application.

## Customization

-   You can customize the form fields and steps by modifying the `formData` state and the conditional rendering logic in `Wizard.js`.
-   Tailwind CSS classes can be modified in `Wizard.js` to change the styling.
-   Add more fields or steps as needed.
-   Implement more complex validations.

## Example

```javascript
// Example modification to add a new field
const [formData, setFormData] = useState({
    email: "",
    password: "",
    age: "",
    address: "",
    skills: "",
    experties: "",
    phone: "", // Added phone field
});
