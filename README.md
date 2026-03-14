# Remark Portfolio

Production-ready personal portfolio for **Remark F. Macasieb**, built with Next.js App Router, React, Tailwind CSS, Framer Motion, and a LangChain + Groq chatbot assistant.

## Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- LangChain
- Groq API
- Vercel-ready deployment

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment file and add your values:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Required Environment Variables

- `GROQ_API_KEY`: required for the chatbot assistant
- `GROQ_MODEL`: optional Groq model override
- `NEXT_PUBLIC_SITE_URL`: public production URL for metadata and sitemap

## Optional Environment Variables

- `NEXT_PUBLIC_CONTACT_EMAIL`: enables the contact form to open a real email draft
- `NEXT_PUBLIC_GITHUB_URL`: public GitHub profile or repo link
- `NEXT_PUBLIC_LINKEDIN_URL`: public LinkedIn profile
- `NEXT_PUBLIC_FACEBOOK_URL`: public Facebook profile
- `NEXT_PUBLIC_RESUME_URL`: public resume/CV file URL

## Customization Notes

- Portfolio content lives in `src/content/portfolio.ts`
- The chatbot API route lives in `src/app/api/chat/route.ts`
- Main sections live in `src/components/sections`
- Global styling and theme tokens live in `src/app/globals.css`

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add the same environment variables from `.env.local`.
4. Deploy.

No extra Vercel configuration is required for this setup.

## Docker

This project now includes a production-style Docker setup using Next.js standalone output.

### Run with Docker Compose

Use your existing `.env.local` file for both build-time public values and runtime secrets:

```bash
docker compose --env-file .env.local up --build
```

The app will be available at `http://localhost:3000`.

### Stop the container

```bash
docker compose down
```

### Important note about environment variables

- `NEXT_PUBLIC_*` values are used during the image build, so pass them when building the container.
- `GROQ_API_KEY` is only needed at runtime for the chatbot API route and should stay in `.env.local` or your deployment secret store.
