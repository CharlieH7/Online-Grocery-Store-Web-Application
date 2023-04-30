<h1>31748 Programming on the Internet - Autumn 2023 Assignment 1</h1>

<img src="images/Store Logo.png?raw=true" width="200px">

<img src="https://shields.io/badge/MySQL-lightgrey?logo=mysql&style=plastic&logoColor=white&labelColor=blue"> <img src="https://img.shields.io/badge/PHP-ccc.svg?logo=php&style=flat">　<img src="https://img.shields.io/badge/Javascript-276DC3.svg?logo=javascript&style=flat"> <img src="https://img.shields.io/badge/-CSS3-1572B6.svg?logo=css3&style=flat">　<img src="https://img.shields.io/badge/-HTML5-333.svg?logo=html5&style=flat">　


# Online Grocery Store App

This Online Grocery Store App stands for quick and reliable online grocery shopping for customers. Simple and highly-user-centered UI design boosts UX during the shopping.


## 🚀 Run Locally
Before you run the project locally, you must meet the prerequisites.
### Prerequisites
- Install Git CLI
```bash
  git clone https://github.com/CharlieH7/Online-Grocery-Store-Web-Application.git
```
Go to the project directory

```bash
  cd Online-Grocery-Store-Web-Application
```
Open with live Server

or

1. Download and Unzip the file on your local system copy Online-Grocery-Store-Web-Application.
2. Put Online-Grocery-Store-Web-Application folder inside root directory (for xampp xampp/htdocs, for wamp wamp/www, for lamp var/www/html)

access to (http://localhost/Online-Grocery-Store-Web-Application)😍

## Features

- Search Box
- Online Order Form with email address checker
- Order Confirmation Email
- Category Hierarchy
- Customers can edit the number of each item in the shopping cart

## Tech Stack

Languages: HTML, CSS, JavaScript, PHP, MySQL


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
