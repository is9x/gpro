import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.querySelectorAll("a").forEach(link => {
            if (link.href.startsWith("http")) {
                link.href = `/api/proxy?url=${encodeURIComponent(link.href)}`;
            }
        });
    }, []);

    return (
        <div>
            <h1>Google Cloud Console Proxy</h1>
            <iframe
                src="/api/proxy?url=https://console.cloud.google.com/"
                width="100%"
                height="800px"
            ></iframe>
        </div>
    );
}
