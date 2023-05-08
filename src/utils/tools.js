export const displayOverlay = () => {
    document.getElementById('overlay').style.cssText = `
    height: 100%;
    width: 100%;
    position: absolute;
    background: black;
    top: 0;
    opacity: 0.4;
    `
}

export const hideOverlay = () => {
    document.getElementById('overlay').style.cssText = `
    height: 0;
    width: 0;
    position: absolute;
    background: black;
    top: 0;
    opacity: 0.4;
    `
}