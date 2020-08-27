export default async (req, res) => {

    const baseUrl = "http://localhost:3001/institutions/"

    let url, result, body

    switch (req.method) {

        case "POST":
            url = baseUrl
            result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            })

            if (result.status !== 201) {
                res.json({status: result.status, error: result.statusText})
                res.statusCode = result.status
            }

            body = await result.json()

            res.statusCode = 201
            res.json(body)
            break

        default:
            res.statusCode = 405
            break
    }

}
