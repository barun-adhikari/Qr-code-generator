import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  return (
    <div className='body'>
      <h1 className='title'>QR Code Generator</h1>
      <div className='detailContainer'>
        <input 
          className='inputfield'
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='qr'>
          <QRCodeCanvas  value={text || "Default text" }size={350} />
        </div>
      </div>
    </div>
  );
}

export default App;
