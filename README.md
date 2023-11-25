# Project Name

This project demonstrates the creation of a REST API using Next.js and TypeScript. The API supports GET, POST, PUT, and DELETE operations on posts. Postman was used for testing the API endpoints.

## Getting Started

To get the project up and running, follow these steps:

1. Clone the repository
2. Install the dependencies with `npm install` or `yarn install`
3. Start the development server:

```bash
npm run dev
# or
yarn dev
Then, open http://localhost:3000 with your browser to see the result.

```
## API Endpoints

### The API includes the following endpoints:

    GET /api/posts: Fetches all posts.
    POST /api/posts: Creates a new post. The request body should be a JSON object with title and desc properties.
    PUT /api/posts/:id: Updates an existing post. The request body should be a JSON object with the new title and/or desc.
    DELETE /api/posts/:id: Deletes a specific post.
### Contributing
    Contributions are welcome! If you have a feature request, bug report, or proposal for a major change, please open an issue for discussion before submitting a pull request.

### License
    This project is licensed under the terms of the MIT License.
