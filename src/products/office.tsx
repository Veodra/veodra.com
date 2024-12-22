import vofficedesign from '/Veodra Office.png'

export function VeodraOffice() {
    return (
        <>
            <p>We're still building this! </p>
            <div>
                <img src={vofficedesign} style={{objectFit: "contain", maxWidth: "100%", maxHeight: "100%"}}></img>
                <span>Veodra Office Docs (Design Drawing)</span>
            </div>
        </>
    )
}