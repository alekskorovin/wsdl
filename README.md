# An example of usage of WSDL with Next 13

## 3rd party packages and APIs

### API Endpoint

The URL for API Endpoint was taken from POSTMAN collection: [https://documenter.getpostman.com/view/8854915/Szf26WHn?version=latest#c9b8614d-2f25-4eb5-9b39-3715b0d04992](https://documenter.getpostman.com/view/8854915/Szf26WHn?version=latest#c9b8614d-2f25-4eb5-9b39-3715b0d04992)

### SOAP client

Documentation regarding the strong-soap package: [https://github.com/loopbackio/strong-soap#install](https://github.com/loopbackio/strong-soap#install)

## Getting Started

Install npm dependencies:

```bash
npm install
```

Create a file `.env.local` with that content:
```
SOAP_WSDL_SERVICE_URL=http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Try to enter into the input field `EUR` or `USD` value and click on the `Search` button to get a list of countries that use such currency.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about the technologies which were used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn strong-soap documentation](https://github.com/loopbackio/strong-soap#install).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
