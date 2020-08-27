export default async (req, res) => {

    const baseUrl = "http://localhost:3001/institutions",
        {query: {institutionId: institutionId}} = req

    const url = `${baseUrl}/${institutionId}`
    let result, body

    switch (req.method) {

        case "GET":
            result = await fetch(url)

            if (result.status !== 200) {
                res.json({status: result.status, error: result.statusText})
                res.statusCode = result.status
            }

            body = await result.json()

            res.statusCode = 200
            res.json(body)
            break

        case "PUT":
            result = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            })

            if (result.status !== 200) {
                res.json({status: result.status, error: result.statusText})
                res.statusCode = result.status
            }

            body = await result.json()

            res.statusCode = 201
            res.json(body)
            break

        case "DELETE":
            result = await fetch(url, {method: "DELETE"})

            if (result.status !== 200) {
                res.json({status: result.status, error: result.statusText})
                res.statusCode = result.status
            }

            body = await result.json()

            res.statusCode = 200
            res.json(body)
            break;

        default:
            res.statusCode = 405
            break
    }

}
