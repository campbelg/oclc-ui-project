This is a [Next.js](https://nextjs.org/) project whose purpose is to display an editable list using a mock REST API.

## Usage

Fork the github project at [https://github.com/campbelg/oclc-ui-project](https://github.com/campbelg/oclc-ui-project) into your github repository. From the command line

```bash
git clone [the code URI of your forked Github Repository]
npm install
```

### Start the mock json server

Open a terminal window and run

```bash
npm run mock-api
```

The mock API will be running on port 3001 and the path name reflects the structure of the data in ```db.json```.

Try ```curl http://localhost:3001/posts/1``` to read the data for the first entry in the table.

### Start the development server

Open a second terminal window and run

```bash
npm run dev
```

The UI will be viewable in your browser at [http://localhost:3000](http://localhost:3000).

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## How the Project Works

The React based [next.js](https://nextjs.org/docs) framework runs on a local development server and serves pages to your browser on port 3000. The various pages and components are in the ```/pages``` folder. The ```/pages/api``` folder contains code that runs on the local development server to talk to API's. Separately we are running a [json-server](https://github.com/typicode/json-server) on port 3001 to mock out a RESTful API. You can also get mock images from [Lorem Picsum](https://picsum.photos/) by embedding links to directly in image tags.

```text
                        +-------------+
      +------------+    | next.js     |
      | Client Web |    | development |
      | Browser    |<---+ server on   |
      +------------+    | port 3000   |
                        +-------------+
                               ^
                               |
                        +------+------+
                        | mock API on |
                        | port 3001   |
                        +-------------+
```

## Working with the mock API from inside the Application

We wrote a simple interface layer so that the API running on port 3001 that mocks an external API is available on port 3000, same as the app (to avoid cross site scripting issues). You can see the code in the ```src/pages/api/institution``` folder.

These simple curl operations demonstrate how records may be RESTfully read, created, updated and deleted from the command line. Your component can access these endpoints in a similar way.

Look at the ```db.json``` file as you try the simple commands below - it will change.

#### Read a record

```
curl http://localhost:3000/api/institution/1
```
  
#### Create a new record

```
curl -X POST http://localhost:3000/api/institution \
-H 'Content-Type: application/json' \
-d '{"name": "University of Southern North Dakota at Hoople", "link":"", "description":""}'
```

#### Update an existing record

```
curl -X PUT http://localhost:3000/api/institution/2 \
-H 'Content-Type: application/json' \
-d '{"name": "University of Iowa at Otumwa","link":"","description":""}'
```
  
#### Delete a record

```
curl -X DELETE http://localhost:3000/api/institution/2
```

## Creating a Component

TODO - explain the task here?

## Reference

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
* [Mock Photos Documentation](https://picsum.photos/)
* [List of Publically Available APIs](https://github.com/public-apis/public-apis)
