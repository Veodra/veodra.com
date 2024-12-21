import { useLocation } from "preact-iso"

export function Error() {
    const location = useLocation()
    return (
        <>
            <div>
                <h1>404 Not Found</h1>
                <h2>It’s not a bug, it’s a feature. 😡</h2>
                <button onClick={() => location.route("/")}>Back to Home</button>
            </div>
        </>
    )
}