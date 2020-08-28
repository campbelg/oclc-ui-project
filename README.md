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

The React based [next.js](https://nextjs.org/docs) framework runs on a local development server and serves pages to your browser on port 3000. The various pages and components are in the ```/pages``` folder. The ```/pages/api``` folder contains code that runs on the local development server to talk to API's. Separately we are running a [json-server](https://github.com/typicode/json-server) on port 3001 to mock out a RESTful API. We also have an API to get mock images from [Lorem Picsum](https://picsum.photos/).

## Working with the mock API from inside the Application

We wrote a simple interface layer so that the API running on port 3001 is available on port 3000, same as the app (to avoid cross site scripting issues). You can see the code in the ```src/pages/api/institution``` folder.

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

## Your Task

The goal of this exercise is to build a simple interface that is based on the mock API for institutions. We would like to see
all the CRUD capabilities of the API utilized in some way. This means your interface should support creating new records, displaying them, editing them,
and deleting them. The user experience of how you accomplish this is up to you, but we will require a list view (see [Provided materials](#Provided materials) for more information).

### General parameters
This task is designed to be straight-forward but non-trivial. We are hoping that it should take no more than a handful of hours to complete. 

* Fetch and render all the institution records.
* For each record, display the data about that record in an organized way. Our component knows how to render only the `name` currently.
* Implement the remaining behaviors using the API: 
  * Create a record and subsequently display it
  * Edit at least one data field in the record
  * Delete a record

### Provided materials
We've provided some components for you to get started with. `InstitutionRecordList` is the component that should be responsible for
fetching all the records and passing those to `InstitutionCard` for it to render.

Next.js polyfills `fetch` in the browser for you, so you should utilize this. You can refer to their [documentation on supported features](https://nextjs.org/docs/basic-features/supported-browsers-features), or [MDN's fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for reference. 

### Guidance
* Please refrain from adding additional dependencies to the project.
* A functional and clean UI is better than a pretty one for this exercise. You are free to add or change styles as you see fit, but not at the expense of features. Also, please refrain from using an off-the-shelf library like Bootstrap or Material.
* Please keep the structure of the project intact. You are free to add whatever components you want to the `components` directory, but please avoid moving things around unless you are able to justify why.

## Reference

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
* [Mock Photos Documentation](https://picsum.photos/)
* [List of Publicly Available APIs](https://github.com/public-apis/public-apis)
