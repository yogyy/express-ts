## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MySQL: [Download and Install MySQL](https://dev.mysql.com/downloads/)

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-project.git
   ```
2. Navigate to the project directory:

    ```bash
    cd express-ts
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a .env file in the project root and set the following environment variables:
    ```env
    NODE_ENV=development

    # MySQL Configuration
    db_host=localhost
    db_port=3306
    db_name=your-database-name
    db_user=your-database-username
    db_password=your-database-password

    # JWT Secret
    jwt_secret=your-secret-key
    ```

Replace (your-database-name, your-database-username, your-database-password, your-secret-key) with your actual database and JWT secret information.

5. Initialize your MySQL database with the schema and data.

    ```bash
    npx sequelize-cli db:migrate
    ```

6. Start the application:

    ```bash
    npm start / npm run start
    ```

7. The application should now be running. You can access it in your web browser at http://localhost:8000 or the port you've configured in your code.

