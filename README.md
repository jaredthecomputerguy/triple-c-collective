<p align="center">
  <img src="https://triple-c-collective.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.80aa9f42.png&w=3840&q=75" width="200px" />
</p>

<h1 align="center">Triple C Collective🌿</h1>

<p align="center">Triple C Collective is Lake County California's Premier Cannabis Dispensary</p>

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Introduction

Triple C Collective is a cannabis dispensary dedicated to providing high-quality products and exceptional customer service. Our website serves as a platform for customers to learn about our products, place orders, and stay updated with our latest news and promotions.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-side rendered applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [Pocketbase](https://pocketbase.io/): An external CMS for managing website content hosted on a personal VPS.
- [Nodemailer](https://nodemailer.com/): A module for Node.js applications to allow easy email sending.
- [Vitest](https://vitest.dev/): A Vite-native testing framework.
- [Husky](https://typicode.github.io/husky/): A tool that allows for Git hooks to be easily configured.
- [lint-staged](https://github.com/lint-staged/lint-staged): A tool for running scripts on staged files in Git.
- [React Email](https://react.email/): A library for sending HTML emails using React.
- [Google Maps API](https://developers.google.com/maps): For integrating maps and location services into the website.
- [Golang](https://go.dev/): To extend my PocketBase local backend with preconfigured admin user + deal collection.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/jaredthecomputerguy/triple-c-collective.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Copy .env.example to .env

   ```bash
   cp .env.example .env
   ```

4. Fill out all environment variables in .env

   ```bash
   # Pocketbase
   POCKETBASE_BASE_URL="https://"
   POCKETBASE_DEAL_URL="/api/deals/"
   POCKETBASE_IMAGE_URL="/files/deals/"

   # Custom Event Server
   EVENT_SERVER_URL="https://"

   # Google Maps Embed
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="MY_API_KEY"

   # Nodemailer
   NODEMAILER_USER="MY_USER"
   NODEMAILER_PASSWORD="MY_PASSWORD"

   # Vercel/Next
   SITE_URL="https://triple-c-collective.vercel.app"
   ```

5. Start the local Pocketbase backend

   ```bash
   npm run pocketbase:build
   npm run pocketbase:run
   ```

6. Run the application

   ```bash
   npm run dev
   ```

7. (Optional) Open the Pocketbase admin page

   ```bash
   npm run pocketbase:admin
   ```
