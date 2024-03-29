 ## lvdesign-astro

This project is a simple Astro project that demonstrates how to use the Astro framework to create a static website. The project uses Tailwind CSS for styling and includes a simple contact form that sends emails using Nodemailer.

### Prerequisites

To run this project, you will need the following:

* Node.js (version 16 or later)
* npm (version 7 or later)
* Astro (version 4 or later)

### Installation

To install the project dependencies, run the following command in the project directory:

```
npm install
```

### Development

To start the development server, run the following command:

```
npm run dev
```

The development server will start on port 3000. You can view the website at http://localhost:3000.

### Building

To build the static website, run the following command:

```
npm run build
```

The static website will be built in the `dist` directory.

### Deployment

To deploy the static website to Vercel, run the following command:

```
npm run vercel
```

Vercel will automatically deploy the website to a subdomain of your Vercel account.

### Contact Form

The contact form on the website uses Nodemailer to send emails. To configure the contact form, you will need to create a `.env` file in the project directory and add the following environment variables:

```
EMAIL, PASS
```

### Code Overview

The project is structured as follows:

* `src/pages/index.astro`: The home page of the website.
* `src/pages/contact.astro`: The contact page of the website.
* `src/components/ContactForm.astro`: The contact form component.
* `src/styles/tailwind.css`: The Tailwind CSS configuration file.
* `package.json`: The project's package manager configuration file.

The `index.astro` file is the home page of the website. It includes a simple heading and a link to the contact page.

The `contact.astro` file is the contact page of the website. It includes a contact form that allows
