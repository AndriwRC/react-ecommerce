# Shopi - E-commerce Application

## Overview

**Shopi** is a fully responsive e-commerce web application built using **ReactJS**, **ViteJS**, and **TailwindCSS**. The project fetches product data from **FakeStoreAPI** and showcases categories and individual products through dynamically generated product cards. The app implements dynamic routes depending on whether the user is authenticated or not, though this authentication is stored locally as it is a frontend-only project. The purpose of **Shopi** is to demonstrate a practical flow using **ReactJS** and best practices for building scalable web apps.

## Features

- **Fully responsive design** built with TailwindCSS
- **Dynamic routing** based on user authentication
- Fake authentication (credentials stored in `localStorage`)
- **Product listing** and **category filtering** with data fetched from FakeStoreAPI
- React component architecture with clean separation of concerns

## Project Structure


## Tech Stack

- **ReactJS**: Frontend library
- **ViteJS**: Next-generation frontend tooling
- **TailwindCSS**: Utility-first CSS framework
- **FakeStoreAPI**: External API for fetching product data

## Installation

To get started with the **Shopi** project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/AndriwRC/react-ecommerce.git
    cd react-ecommerce
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to:
    ```
    http://localhost:5173
    ```

## Authentication Flow

The app uses a basic fake authentication mechanism to restrict access to certain routes. The credentials are stored in `localStorage` as this project is focused solely on the frontend. The following credentials are available for testing:

- **Username**: `user`
- **Password**: `password`

Upon successful login, the app stores the authentication credentials in `localStorage`, allowing access to authenticated routes.

## API Integration

The product data is fetched from [FakeStoreAPI](https://fakestoreapi.com/). The application makes use of the following endpoints:

- **Products**: `https://fakestoreapi.com/products`

## Deployment

The application has been deployed on Netlify. You can access the live version here:

[Live Demo](https://lively-platypus-4eb357.netlify.app/)

## Contact
Andriw Rollo Castro
Platzi Student <3 & Web Developer
GitHub: https://github.com/AndriwRC


