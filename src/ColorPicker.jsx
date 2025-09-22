function ColorPicker({setColor}){
    return(<div className="col-md-3">
            <input className="form-control md-3" type="color" onChange={(e) => setColor(e.target.value)}/>
    </div>);
}

export default ColorPicker