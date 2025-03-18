DOCUMENTACION

Para acceder al contenido debes seleccionar la url http://localhost:3000/prueba.
El proyecto es 100% responsive.

-Esta basado en HTML, CSS Y JS.

-El uso de flexbox para estilos.

-Existe un componente llamado "modal" donde se maneja la lógica y los estilos del modal.

-La variable Modal esta siendo exportada desde la pagina modal.js y posteriormente con useState de React esta siendo importada a la page.js que es la lógica principal.

-Estoy utilizando useEffect para controlar la propiedad overflow y, cuando se abre el modal el scroll de la pagina principal se desactiva para que el usuario solo pueda hacer scroll dentro del modal, cerrando el modal.
esto se desactiva.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
