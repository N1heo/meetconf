# MEET CONFERENCE WEBSITE

## Description
A website for registering users to a MEET Conference.

![image](https://github.com/N1heo/meetconf/assets/96371464/b897371e-2e70-451f-a3c3-9c9f4d726e20)


## Table of Contents

1. [Frontend](#frontend)
2. [Backend](#backend)
---

## Frontend
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
Download node.js and npm from [here.](https://nodejs.org/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Backend
Recommended Python version is 3.10

## Installation Guide

### Step 1: Create a Virtual Environment
First, you need to create a virtual environment. This helps to keep the dependencies required by different projects in separate places. 

```bash
python -m venv env
```

Activate the virtual environment:

- On Windows:
  ```bash
  .\env\Scripts\activate
  ```
- On macOS and Linux:
  ```bash
  source env/bin/activate
  ```

### Step 2: Install Dependencies
Once the virtual environment is activated, install the necessary dependencies from the `requirements.txt` file.

```bash
pip install -r requirements.txt
```

### Step 2.5: Create .env file
Create and fill the .env file with following
```
DATABASE_NAME=database_name
DATABASE_USER=user_name
DATABASE_PASSWORD=password

CLOUD_NAME=cloud_name
API_KEY=api_key
API_SECRET=api_secret
```

To get this credentials create a PostgreSQL database(recommended version - 15), with this you'll have
```
DATABASE_NAME
DATABASE_USER
DATABASE_PASSWORD
```

Note: in the ```backend/meetConf/settings.py``` in the ```DATABASES``` specify the PORT and HOST if different. 

 and register at [Cloudinary.com.](https://cloudinary.com/)
Sign up or log in to your account. Go to the Dashboard from your account menu. In the Account Details section, note down:

    CLOUD_NAME
    API_KEY
    API_SECRET

Also make sure to go to ```Settings > Product environment settings > Security``` and at the end of the page check the box "Allow delivery of PDF and ZIP files."

### Step 3: Apply Migrations and Run the Server
To set up the database and run the server, follow these steps:

1. Apply the migrations to create the necessary database tables:
   ```bash
   python manage.py migrate
   ```

2. Make migrations for the apps:
   ```bash
   py manage.py makemigrations event_registration events_sliders gallery pdf_storage
   ```

3. Apply the migrations again:
   ```bash
   python manage.py migrate
   ```

4. Start the development server:
   ```bash
   python manage.py runserver
   ```

Your Django project should now be running on `http://127.0.0.1:8000/`.
