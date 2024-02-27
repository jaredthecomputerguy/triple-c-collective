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

- Next.js: A React framework for building server-side rendered applications.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Payload CMS: A headless CMS for managing website content.
- Nodemailer: A module for Node.js applications to allow easy email sending.
- Husky: A tool that allows for Git hooks to be easily configured.
- AWS S3: Amazon Simple Storage Service for storing website assets.
- lint-staged: A tool for running scripts on staged files in Git.
- React Email: A library for sending HTML emails using React.
- Google Maps API: For integrating maps and location services into the website.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/triple-c-collective.git
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
   # PayloadCMS Secrets
   MONGODB_URI="MY_URI"
   PAYLOAD_SECRET="MY_SECRET"
   PAYLOAD_CONFIG_PATH="payload/payload.config.ts"

   # Google Maps Embed
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="MY_API_KEY"

   # Nodemailer
   NODEMAILER_USER="MY_USER"
   NODEMAILER_PASSWORD="MY_PASSWORD"

   # S3
   AWS_BUCKET="MY_BUCKET"
   AWS_REGION="MY_REGION"
   AWS_KEY="MY_KEY"
   AWS_SECRET_ACCESS_KEY="MY_SECRET_KEY"
   AWS_S3_ENDPOINT="https://..."
   ```

5. Generate the PayloadCMS types

   ```bash
   npm run generate
   ```

6. Run the application

   ```bash
   npm run dev
   ```
