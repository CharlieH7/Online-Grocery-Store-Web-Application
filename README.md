<h1>31748 Programming on the Internet - Autumn 2023 Assignment 1</h1>

<img src="https://github.com/saku-1101/Online-GroceryStore-WebApp/blob/main/frontend/src/assets/StoreLogo-removebg.png?raw=true" width="200px">

<img src="https://img.shields.io/badge/-React-555.svg?logo=react&style=flat"> <img src="https://shields.io/badge/MySQL-lightgrey?logo=mysql&style=plastic&logoColor=white&labelColor=blue"> <img src="https://img.shields.io/badge/PHP-ccc.svg?logo=php&style=flat">　<img src="https://img.shields.io/badge/Javascript-276DC3.svg?logo=javascript&style=flat">　<img src="https://img.shields.io/badge/-TypeScript-007ACC.svg?logo=typescript&style=flat">　<img src="https://img.shields.io/badge/-CSS3-1572B6.svg?logo=css3&style=flat">　<img src="https://img.shields.io/badge/-HTML5-333.svg?logo=html5&style=flat">　<img src="https://img.shields.io/badge/-Nginx-bfcfcf.svg?logo=nginx&style=flat">　<img src="https://img.shields.io/badge/-Docker-EEE.svg?logo=docker&style=flat">


# Online Grocery Store App

This Online Grocery Store App stands for quick and reliable online grocery shopping for customers. Simple and highly-user-centered UI design boosts UX during the shopping.


## 🚀 Run Locally
Before you run the project locally, you must meet the prerequisites.
### Prerequisites
- Install Docker Desktop
- Install Git CLI
- All the secrets (-> Database and SMTP server secrets)
    - Prepare .env in Laravel *(If you're authorized person, I personally provided you with .env file via restricted-access link. You just download and place the .env file under online-grocerystore-webapp> backend> src directory.)*
    - In .env, you're required to replace SMTP screats to activate sending email functionality as well as Database secrets to access MySQL server.
    - For more information, have a look at [How to Use the Gmail SMTP Server to Send Emails for Free](https://kinsta.com/blog/gmail-smtp-server/)

Once you got all requirements, clone the project

```bash
  git clone https://github.com/saku-1101/Online-GroceryStore-WebApp.git
```

Go to the project directory

```bash
  cd Online-GroceryStore-WebApp
```
Boot up Docker Desktop

Check if port 80, 9000, 3306, and 8000 are not used
```bash
  sudo lsof -i:<port number>
```
if it's used, kill it.
```bash
  sudo kill <PID>
```
Start up containers *(Note: Please check again if you got .env file as it described in Prerequisites)*

```bash
  docker-compose up --build
```

Install all the required Laravel Libraries

First, checkout to the backend container
```bash
  docker compose exec backend sh
```
Then, install the libraries with composer
```bash
  composer install
```
Please hold tight until your composer finishes installing all the required Laravel libraries.
Once all the libraries are installed successfully, you'll see the outputs, like demonstrated below.

![image](https://user-images.githubusercontent.com/74392116/234470509-b82b2c56-343e-4ab5-a385-1075808c9cab.png)

If you can observe the output from docker as shown below, 
![image](https://user-images.githubusercontent.com/74392116/234479224-cfc5ae4e-9405-4596-9d49-1f891bccb78b.png)

access to http://localhost:8000 😍


## Demo

Insert 

https://user-images.githubusercontent.com/74392116/234477645-ae6b92c0-0b79-49d7-978a-f0b213d78847.mov


## Features

- Search Box
- Online Order Form with email address checker
- Order Confirmation Email
- Category Hierarchy
- Customers can edit the number of each item in the shopping cart
- Shopping cart can be easily moved around using the mouse



## Tech Stack

**🌼Client:** React, TypeScript, Vite, Axios, Redux, React Router, TailwindCSS, DaisyUI

**🦄Server:** Laravel8

**🐬Database:** MySQL

**🐳Infrastructure:** Docker, Docker Compose, Nginx

**Others:** Prettier, ESLint, Postman, Figma
## API Reference

#### Get all products

```http
  GET /api/product/category
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `null` | `null` |  |

#### Get second category in a particular top category

```http
  GET /api/product/category/{category}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Id of category to fetch |

#### Get products in a particular second category

```http
  GET /api/product/category/{category}/sub_category/{sub_category}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Id of category to fetch |
| `sub_category`      | `string` | **Required**. Id of second category to fetch |

#### Display products that match with the provided keyword

```http
  GET /api/product/search
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. Keyword to search |

#### Insert the added products into the order table and Update the order details.

```http
  POST /api/order/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `request`      | `Request` | **Required**. POST request must contain order_id, product_id, quantity as parameters |

#### Remove an order and its corresponding details from the database

```http
  DELETE /api/order/delete/all
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `order_id`      | `int` | **Required**. Order ID that you want to delete |

#### Remove a product and update its corresponding orders and products in the database.

```http
  DELETE /api/order/delete/{order_id}/{product_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `order_id`      | `int` | **Required**. Order ID that you want to delete |
| `product_id`      | `int` | **Required**. Product ID that you want to delete |

#### Send an email of the order completion.

```http
  POST /api/checkout
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `request`      | `Request` | **Required**. POST request must contain email, name, orderId as parameters |



## Lessons Learned

- How to develop a full-stack application
- Component Oriented, Atomic Design - They are to be obtained to boost frontend development productivity. It also serves consistency and simplicity of UI/UX.
- How to use Redux - It took a rather long time to grasp the entire lifecycle of Redux.
- Tailwind is just an amazing one.
- The first DB scheme design is very crucial - Well design first with ER Diagram.
- Laravel was not for this application - Too heavy but fewer things to do with it. As I wanted to use React and completely separate frontend and backend, selecting Laravel (and maybe PHP even) was one of the biggest failures.
- Big capture in Laravel
- CORS issues robbed the biggest time from me. - It basically happens when an Origin wants to access the other without an appropriate header. Adding a proper header on app.php and NGINX solved all.
- CSRF issue - Without proper authentication, this problem will explode. Excluding API route from CSRF guard in VerifyCsrfToken.php activated API in public.
- How to design APIs
- If the project is too big, it's difficult to deploy. - Tried to deploy on Azure, as the project size exceeds the free range, couldn't deploy it. Regarding any other platforms, I already used up free range.
Grocery Website deployed on AWS Elastic Beanstalk
Go to this link to view the website: http://assignment1grocery-env.eba-cyptb8h8.us-east-1.elasticbeanstalk.com/index.html

An Online Grocery website
Improvements for the website:
Allow user to delete a single product at a time, instead of clearing the entire cart
Make it look more aesthetically pleasing to look at (colours)
