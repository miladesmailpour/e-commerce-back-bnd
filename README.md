# E-Commerce Back End

## Description

- watching the small business struggling to manage their products

- Helping the small business to easily manage and keep track of their products

- a simple products inventory back-end application

- MySQL2, Sequelize, Dotenv, software design and architecture, async/await, and more

## Table of Contents

- [How To Use](#how-to-use)
- [Installation](#installation)
- [Acceptance_Criteria](#acceptance-criteria)
- [Helpful Heroku Resources](#helpful-heroku-resources)
- [Database Strcuture](#database)
- [How to Contribute](#how-to-contribute)

## How To Use

Link to the walkthrough video on ([Goggle Dirve](https://drive.google.com/file/d/1wIM_rMSXH9mxrlzcS-P7EACOA1qSIb1P/view?usp=sharing))

## Installation

config the database ans seeding it

```
mysql:
source db/schema.sql
node:
npm install
npm run seed
npm start
```

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Helpful Heroku Resources

[npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)

[npm documentation on Dotenv](https://www.npmjs.com/package/dotenv)

[npm documentation on Sequelize](https://www.npmjs.com/package/sequelize)

## Database

- `Category`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `category_name`

    - String.

    - Doesn't allow null values.

- `Product`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `product_name`

    - String.

    - Doesn't allow null values.

  - `price`

    - Decimal.

    - Doesn't allow null values.

    - Validates that the value is a decimal.

  - `stock`

    - Integer.

    - Doesn't allow null values.

    - Set a default value of `10`.

    - Validates that the value is numeric.

  - `category_id`

    - Integer.

    - References the `Category` model's `id`.

- `Tag`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `tag_name`

    - String.

- `ProductTag`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `product_id`

    - Integer.

    - References the `Product` model's `id`.

  - `tag_id`

    - Integer.

    - References the `Tag` model's `id`.

## How to Contribute

Challenges repository
This is an open-source project which has Licensed by MIT which allows you to contribute and used open source codes used in this repo (All Branches).
More info: https://g.co/kgs/QWcHhF

- Branches are named as modules [n] and each one of them is a unique challenge.
- Master Branch contains the last solved challenge. (the read me you are reading through, it is a default guide when NO challenge is available to help you do a pre-setup.)

# How to use the module and deploy

- Clone the repo and make it own

  # Https URL :

        git clone https://github.com/miladesmailpour/challanges.git

  # ssh URL :

        git clone git@github.com:miladesmailpour/challanges.git

  # Checking the fetch/pull and push URL :

        git remote -v

  # Modifing origin URL :

        git remote add origin [https/ssh URL of your repo] https://docs.github.com/en/get-started/quickstart/create-a-repo

  # Verifing the fetch/pull and push URL :

        git remote -v https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories

  # Chacking the status of local :

        git status

        "if local NOT updated"
        git add .
        git commit -m "[your comment]"
        git push origin master/main

- Checkout the module (the challenge you want to use and deploy)
  # Checkout to the desired challenge :
       git checkout module[n]
  # Verifing :
       git status
  # [Make the change you wish to have]
       What do you think needed to improve?
  # Commiting to local and updating the GitHub repo:
         git add .
         git commit -m "[your comment]"
         git push origin [your module name]
- Moving Modules to Master Branch and deploying:
  # Creating a pull request to update the master/main :
       https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  # Deploy through the GitHub :
       https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
