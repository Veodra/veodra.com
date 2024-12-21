import { useLocation } from 'preact-iso';

export function Products() {
    const location = useLocation();

    return(
        <>
            <div>
                <h1 style={{fontSize: "40px"}}>Products</h1>
                <div class="product-card-container">
                    <div class="product-card" onClick={() => location.route("/products/office")}>
                        <h2>Veodra Office <ArrowRight /></h2>
                        <h3>The Best Native Office Suite for Apple Devices</h3>
                        <p>Veodra Office is the ultimate office productivity suite tailored for Apple devices. </p>
                        <p>Offering seamless collaboration and an intuitive user experience, it integrates natively with macOS, iPadOS, and iOS. </p>
                        <p>With fast performance and cutting-edge features, Veodra Office ensures that working is effortless across all Apple ecosystems. </p>
                        <p>Say goodbye to compatibility issues and hello to a fully optimized experience that feels like home. </p>
                        <p>Whether you're working solo or collaborating with a team, Veodra Office is designed to elevate your productivity in ways you've never imagined.</p>
                    </div>
                    <div class="product-card" onClick={() => location.route("/products/babel")}>
                        <h2>Veodra Babel <ArrowRight /></h2>
                        <h3>Next-Generation Cross-Platform Development Tool with Modern UI and Native Experience</h3>
                        <p>Veodra Babel is the future of cross-platform development. </p>
                        <p>With its sleek modern UI and powerful tools, Babel makes it easier than ever to create applications that work flawlessly across all platforms. </p>
                        <p>Whether you're building for Windows, macOS, Linux, even BSD, Veodra Babel ensures a native feel and performance. </p>
                        <p>Its helps both beginners and seasoned developers streamline the entire development cycle—from design to deployment—with ease and efficiency. </p>
                        <p>Unlock your creative potential with the next big thing in app development.</p>
                    </div>
                    <div class="product-card" onClick={() => location.route("/products/mirror")}>
                        <h2>Veodra Mirror <ArrowRight /></h2>
                        <h3>GitHub Release Mirror for Developers and Users in Restricted Regions</h3>
                        <p>Veodra Mirror provides a much-needed solution for developers and users in regions where can't access to GitHub. </p>
                        <p>With Veodra Mirror, you can access the latest GitHub releases without the barriers of censorship. </p>
                        <p>Veodra Mirror ensures that you stay connected to the global development community. </p>
                        <p>Speed, reliability, and accessibility come together to make your development process smooth—no matter where you are.</p>
                    </div>
                    <div class="product-card" onClick={() => location.route("/products/pcguide")}>
                        <h2>Veodra PCGuide <ArrowRight /></h2>
                        <h3>A Friendly Computer Guide for Beginners</h3>
                        <p>Veodra PCGuide is the perfect starting point for anyone new to using computers. </p>
                        <p>With easy-to-follow steps, helpful tips, and clear explanations, this guide breaks down complex tech concepts into understandable language. </p>
                        <p>Whether you're setting up a new PC or navigating software, Veodra PCGuide provides you with all the essential knowledge to get you up and running. </p>
                        <p>Say goodbye to confusion and hello to a confident, seamless computer experience. </p>
                        <p>Perfect for first-time users and those who want to refresh their skills.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function ArrowRight() {
    return (
        <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={14} height={16}>
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
    )
}