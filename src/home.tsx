import veodraLogo from '/veodrafull.svg'
import { useLocation } from 'preact-iso';

export function Home() {
    const location = useLocation();
    return (
        <>
            <div>
                <img src={veodraLogo} class="logo" alt="Veodra logo" />
                <h1>Veodra</h1>
                <h2>Harnessing human-centered tech to change the world.</h2>
                <div class="card-container">
                    <div class="card" onClick={() => location.route("/products/office")}>
                        <h3>Veodra Office <ArrowRight /></h3>
                        <p>The Best Native Office Suite for Apple Devices</p>
                    </div>
                    <div class="card" onClick={() => location.route("/products/babel")}>
                        <h3>Veodra Babel <ArrowRight /></h3>
                        <p>Next-Generation Cross-Platform Development Tool with Modern UI and Native Experience</p>
                    </div>
                    <div class="card" onClick={() => location.route("/products/mirror")}>
                        <h3>Veodra Mirror <ArrowRight /></h3>
                        <p>GitHub Release Mirror for Developers and Users in Restricted Regions</p>
                    </div>
                    <div class="card" onClick={() => window.open("https://pcguide.veodra.com")}>
                        <h3>Veodra PCGuide <ArrowRight /></h3>
                        <p>A Friendly Computer Guide for Beginners</p>
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