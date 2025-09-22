
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { useState } from 'react';
import ColorPicker from './ColorPicker';
import ColorInfo from './ColorInfo';
import ColorPreview from './ColorPreview';

function App() {
    const [color, setColor] = useState("#000000");

    return (
      <div className='d-flex align-items-center justify-content-center'>
        <ColorPicker setColor={setColor}/><br/>
        <div className='col-md-3'>
        <ColorInfo color={color}/><br/>
        <ColorPreview color={color}/><br/>
        </div>
      </div>
    )
}

export default App
