# Zenith - SaaS Landing Page Template

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/omid-web/saas-template)

Zenith is a visually stunning, minimalist, and conversion-focused landing page template designed for modern SaaS products. It features a clean, spacious layout with a sophisticated color palette and smooth, subtle animations to create a premium user experience.

The template is structured into logical sections: a captivating hero section with a clear call-to-action, a detailed feature showcase, a transparent pricing table, a trust-building testimonial section, an informative FAQ accordion, and a comprehensive footer with a newsletter signup. Every element is meticulously designed to be fully responsive, ensuring a flawless experience on all devices.

## Key Features

-   **Modern & Minimalist Design:** Clean, spacious, and conversion-focused UI.
-   **Fully Responsive:** Flawless experience on desktops, tablets, and mobile devices.
-   **Interactive & Engaging:** Smooth animations, hover states, and micro-interactions powered by Framer Motion.
-   **Pre-built Sections:** Includes Hero, Features, Pricing, Testimonials, FAQ, and a comprehensive Footer.
-   **Easy to Customize:** Built with Tailwind CSS and shadcn/ui, making customization straightforward.
-   **Performance Optimized:** Built with Vite for a lightning-fast development experience and optimized production builds.
-   **Deploy-Ready:** Set up for easy deployment to Cloudflare Pages.

## Technology Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Toasts/Notifications:** [Sonner](https://sonner.emilkowal.ski/)
-   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [Bun](https://bun.sh/) package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/zenith-saas-landing-page.git
    cd zenith-saas-landing-page
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The page will auto-update as you edit the files.

## Project Structure

-   `src/pages/HomePage.tsx`: The main component that assembles the entire landing page.
-   `src/components/`: Contains reusable React components like `Header.tsx` and `Footer.tsx`.
-   `src/components/ui/`: Houses the pre-installed shadcn/ui components.
-   `src/index.css`: Global styles and Tailwind CSS layer definitions.
-   `tailwind.config.js`: Tailwind CSS theme and configuration file.
-   `worker/`: Configuration for the Cloudflare Worker that serves the application.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Deploy via Wrangler CLI

1.  **Login to Wrangler:**
    ```bash
    bunx wrangler login
    ```

2.  **Build the project:**
    ```bash
    bun run build
    ```

3.  **Deploy to Cloudflare:**
    ```bash
    bun run deploy
    ```

This command will build the application and deploy it to your Cloudflare account using the settings in `wrangler.jsonc`.

### Deploy with the Click of a Button

You can also deploy this template to your own Cloudflare account with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/omid-web/saas-template)

## Available Scripts

In the project directory, you can run:

-   `bun dev`: Runs the app in development mode.
-   `bun build`: Builds the app for production.
-   `bun lint`: Lints the codebase using ESLint.
-   `bun deploy`: Builds and deploys the app to Cloudflare.