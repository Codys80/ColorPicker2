function ColorPicker({setColor}){
    return(<>
            <input className="form-control form-control-color" type="color" onChange={(e) => setColor(e.target.value)}/>
    </>);
}

export default ColorPicker