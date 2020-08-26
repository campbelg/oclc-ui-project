This is a [Next.js](https://nextjs.org/) project whose purpose is to display an editable list using a mock REST API.

## Getting Started

Fork the github project at [https://github.com/campbelg/oclc-ui-project](https://github.com/campbelg/oclc-ui-project) into your github repository. From the command line

```bash
git clone [the URI of your forked Github Repository]
npm install
```

### Start the mock json server

Open a terminal window and run

```bash
npm run mock-api
```

The mock API will be running on port 3001 and the path name reflects the structure of the data in /db.json.
Try ```curl http://localhost:3001/posts/1``` from the command line.

### Start the development server

Open a second terminal window and run

```bash
npm run dev
```

The UI will be viewable in your browser at [http://localhost:3000](http://localhost:3000).

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Useful Links

* https://github.com/typicode/json-server
* https://picsum.photos/
* https://github.com/public-apis/public-apis
