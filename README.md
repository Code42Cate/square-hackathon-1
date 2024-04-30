# Square Hackathon: Impact Squared

## Features

## Tech Stack

- Next.js (React)
- Prisma (ORM)
- PostgreSQL (Database)
- TailwindCSS (Styling)
- Turborepo (Monorepo)
- ShadcnUI (Styling)
- Sliplane.io (Hosting)

## Development

To get started, you will need to have Node.js (v21) and pnpm (v8) installed. After cloning, run the following command:

```bash
pnpm install
```

You will then have to create an `.env.local` file in `/apps/web/` and add the following:

```bash
DATABASE_URL=...
```

Do the same in `/packages/database/`.

### Commands

A bunch of commands are available to you:

```bash
pnpm run dev --filter web # Start the web app
pnpm run dev db:push --filter database # Push the database schema to the database
pnpm run dev db:seed --filter database # Seed the database with some data
pnpm run dev db:generate --filter database # Generate the Prisma client
```

## License

No License. Please do not use this project for commercial purposes without permission :)
