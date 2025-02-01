# Patient Management App

## Local Setup

To run the Patient Management app locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Joacogomezc98/patients-app.git
   cd patients-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the application**:

   ```bash
   npm run build
   ```

   This will start the application locally on `http://localhost:5173`.

4. **Open the app**:
   Navigate to `http://localhost:5173` in your web browser.

---

### Design Decisions

#### Libraries and Tools Used

- **Redux Toolkit**: Simplifies the process of writing Redux logic and managing the application state.

- **Redux-Saga**: Manages side effects in the application, such as data fetching.

- **Axios**: A promise-based HTTP client for making requests to the API.

- **Styled-Components**: Allows for writing CSS-in-JS, making it easier to style components with scoped styles.

- **Moment.js**: Used this library for parsing, manipulating, and formatting dates.

- **ESLint**: A tool for identifying and fixing problems in JavaScript code, ensuring code quality and consistency.

- **Prettier**: Enforcing a consistent style throughout the code-

### Project Structure

The project is organized within the following structure:

- **src/components**: Contains reusable UI components such as buttons, modals, and patient cards.

- **src/redux**: Contains Redux logic, including slices, sagas, and selectors for managing the application state.

- **src/hooks**: Contains custom hooks, such as `usePatientValidation`, for encapsulating reusable logic.

- **src/layouts**: Contains layout components that define the overall structure of the application. This are the views within the aplication (only one page in this case)

- **src/utils**: Contains utility functions and helper methods used throughout the application.

- **public**: Contains static assets and the main HTML file.

---

By following these design decisions and using the chosen libraries and tools, the application is built to be maintainable, scalable, and easy to develop further.
