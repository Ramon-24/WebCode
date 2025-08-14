export function BarraGradent() {
    return (
        <div className="barra-gradient"
            style={{
                background: 'linear-gradient(0deg, #ffffff00, #220360ff, #2203608c, #ffffff00)',
                // background: 'linear-gradient(0deg, rgba(216, 32, 32, 0), #601f03ff, #600303a8, rgba(51, 211, 200, 0))',
                height: '60vh',
                width: '100%',
                position: "absolute",
                transform: "translateY(100%)",
                zIndex: 2,
                pointerEvents: 'none'
            }}>
        </div>
    );
}