# Page maker

Use [puck](https://github.com/measuredco/puck) to create a drag and drop page maker.


## Start
```
npm install
npm run dev
```

Navigate to the homepage at https://localhost:3000. To edit the homepage, access the Puck editor at https://localhost:3000/edit.

You can do this for any route on the application, **even if the page doesn't exist**. For example, visit https://localhost:3000/hello/world and you'll receive a 404. You can author and publish a page by visiting https://localhost:3000/hello/world/edit. After publishing, go back to the original URL to see your page.

## Using this recipe

To adopt this recipe you will need to:

- **IMPORTANT** Add authentication to `/edit` routes. This can be done by modifying the example API routes in `/app/api/puck/route.ts` and server component in `/app/[...puckPath]/page.tsx`. **If you don't do this, Puck will be completely public.**
- Integrate your database into the API calls in `/app/api/puck/route.ts`
- Implement a custom puck configuration in `puck.config.tsx`

## License

MIT © [Measured Co.](https://github.com/measuredco)
