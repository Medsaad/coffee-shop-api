## Github Searcher

This is a small API to search through github API's users and repositories and return the results.

### Get Started

To get this app working on your environment. Please, follow the steps below:

- make sure that you have `docker` and `docker` compose installed on your machine/server.
- run: `docker-compose up`.

### Services

In this app there are 3 docker compose services:

- **redis**: which contains the redis server that is used for data caching and exposes port 6379.
- **client**: which contains the react app and get served at port 3001.
- **server**: which contains the node js api and get served at port 3000.

Using docker compose, made this app easy to install and start and with minimum amount of dependencies.

### Client

The client uses `react`, `react-router`, `redux`, `redux-persist` and other technologies to fulfill the business needs, including:

- **formik**: This package is a great solution for form handling and update management.
- **yup**: for form and data validation.
- **reduxsauce**: a package that makes the process of creating types, actions and reducers very easy.
- **redux-saga**: a great `redux-thunk` alternative that handles side effects in a very stable way.
- **redux-logger**: because I like to keep everything. This package keeps me updated with the redux changes in the console tab instead of redux tab.
- **axios**: for server requests.

### Server

The server uses the standard packages, like `express`, `axios`, `cors`. The backend is controllers-based with a default controller that handles root and fallback routes, then base controller that holds some basic functionalities. controllers are implementing IController to enforce using init() method that is used to declare routes.