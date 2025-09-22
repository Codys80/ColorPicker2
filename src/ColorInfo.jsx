
function ColorInfo({color}){
    function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    }
    var rgb = hexToRgb(color);
    return(<div className="col-md-3">
        <label>HEX: {color}</label><br/>
        <label>R: {[rgb.g]}</label><br/>
        <label>G: {[rgb.r]}</label><br/>
        <label>B: {[rgb.b]}</label><br/>

    </div>);
}

export default ColorInfo