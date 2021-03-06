## Coffee Shop API

A small API attached to mysql DB.

### Get Started

To get this app working on your environment. Please, follow the steps below:

- make sure that you have `docker` and `docker compose` installed on your machine/server.
- run: `docker-compose up` and wait for images to be installed.
- The api base url is: `http://localhost:3000/api`.
- To populate the database browser or postman and run the routes: 
    - For machines: `/machines/init` 
    - For pods: `/pods/init`.

### Services

In this app there are 2 docker compose services:

- **database**: which contains the mysql database service.
- **server**: which contains the node js api and get served at port 3000.

Using docker compose, made this app easy to install and start and with minimum amount of dependencies.

### Server

The server uses some standard packages, like `express`, `mysql2`, `cors`. The backend is controllers-based with a default controller that handles root and fallback routes, then base controller that holds some basic functionalities. controllers are implementing IController to enforce using init() method that is used to declare routes.

The listing routes includes:
- `/machines`: lists coffee machines filtered by product_type or water_line_compatible.
- `/pods`: lists coffee pods filtered by product_type, coffee_flavor or pack_size.