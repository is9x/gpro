export default async function handler(req, res) {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).json({ error: "Missing URL parameter" });
    }

    try {
        const response = await fetch(targetUrl, {
            method: req.method,
            headers: {
                ...req.headers,
                host: new URL(targetUrl).host // Preserve original host
            }
        });

        const contentType = response.headers.get("content-type");
        res.setHeader("content-type", contentType);
        res.status(response.status).send(await response.text());
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the page" });
    }
}
