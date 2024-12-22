# Node.js Express API

A simple RESTful API built with Node.js and Express.js for managing users and their information.

## Description

This project is a basic implementation of a RESTful API using Node.js and Express.js framework. It provides endpoints for performing CRUD operations (Create, Read, Update, Delete) on user data.

## Features

- RESTful API endpoints
- User management operations
- JSON data handling
- Basic error handling
- Express middleware implementation

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/GbrLomenha/node.js-express.git
```

2. Navigate to the project directory:
```bash
cd node.js-express
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. The API will be available at `http://localhost:3000`

## API Endpoints

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get a specific user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## Request & Response Examples

### GET /users
Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
]
```

### POST /users
Request:
```json
{
  "name": "New User",
  "email": "newuser@example.com"
}
```

Response:
```json
{
  "id": 3,
  "name": "New User",
  "email": "newuser@example.com"
}
```

## Project Structure

```
node.js-express/
├── node_modules/
├── src/
│   ├── routes/
│   │   └── users.js
│   ├── controllers/
│   │   └── userController.js
│   └── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Gabriel Lomenha - [GitHub Profile](https://github.com/GbrLomenha)

## Acknowledgments

- Express.js documentation
- Node.js community
- All contributors who help improve this project

---
Feel free to customize this README according to your specific project needs and add any additional sections that might be relevant.
