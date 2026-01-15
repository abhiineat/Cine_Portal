``Cine Portal 2024``

## Deployment

Link : cine-exam.vercel.app

# Cine Portal

Cine Portal is a web application designed for student examinations. It provides a platform for students to take exams, submit feedback, and for administrators to manage questions and candidates.

## Features

-   **Student Authentication:** Students can log in using their student number and password.
-   **Exam Interface:** A dedicated interface for students to take exams.
-   **Question Navigator:** Allows students to navigate between questions during the exam.
-   **Feedback System:** Students can provide feedback after completing the exam.
-   **Admin Panel (Implied):** Functionality for managing questions and candidates (inferred from the API routes).

## Tech Stack

-   **Frontend:**
    -   [Next.js](https://nextjs.org/) (v15) - React framework for server-side rendering and static site generation.
    -   [React](https://reactjs.org/) (v19) - JavaScript library for building user interfaces.
    -   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
    -   [Zustand](https://zustand-demo.pmnd.rs/) - A small, fast, and scalable state-management solution.
    -   [Lucide React](https://lucide.dev/) - A library of simply designed icons.
    -   [Recharts](https://recharts.org/) - A composable charting library built on React components.
    -   [Sonner](https://sonner.emilkowal.ski/) - An opinionated toast component for React.
-   **Backend:**
    -   [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - For creating API endpoints.
    -   [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js applications.
    -   [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
-   **Database:**
    -   [MongoDB](https://www.mongodb.com/) - A NoSQL database for storing application data.
    -   [Upstash Redis](https://upstash.com/) - A serverless Redis database for caching and session management.

## Project Structure
```
cine_portal/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── api/         # API routes
│   │   ├── (pages)/     # Page components
│   │   └── layout.tsx   # Root layout
│   ├── components/      # Reusable React components
│   ├── constants/       # Constants used in the application
│   ├── lib/             # Helper functions and utilities
│   ├── models/          # Mongoose models
│   ├── stores/          # Zustand stores
│   └── types/           # TypeScript type definitions
├── .env.local.example   # Example environment variables
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```
## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v20 or later)
-   [MongoDB](https://www.mongodb.com/try/download/community)
-   [Redis](https://redis.io/topics/quickstart) (or a free Upstash Redis instance)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cine_portal.git
    cd cine_portal
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the following environment variables:

    ```bash
    # MongoDB Connection URI
    DB_URI=your_mongodb_connection_string

    # Upstash Redis Credentials
    UPSTASH_REDIS_REST_URL=your_upstash_redis_url
    UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

    # NextAuth.js Secret
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=http://localhost:3000
    ```
    You can generate a `NEXTAUTH_SECRET` using the following command:
    ```bash
    openssl rand -base64 32
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

### Available Scripts

-   `npm run dev`: Starts the development server with Turbopack.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.

## API Endpoints

The following API endpoints are available:

-   `POST /api/auth/[...nextauth]`: Handles user authentication.
-   `GET /api/candidate/mock`: Retrieves mock candidate data.
-   `POST /api/feedback`: Submits user feedback.
-   `GET /api/questions`: Retrieves exam questions.
-   `POST /api/response`: Submits exam responses.
-   `POST /api/set-preference`: Sets user preferences.
-   `POST /api/submit`: Submits the final exam.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.
