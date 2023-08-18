import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './App.css';


function App() {
  const [text, setText] = useState('');
  const [pdfData, setPdfData] = useState(null);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);

    setPdfData(pdfUrl);
  };

  const sharePDF = () => {
    if (pdfData) {
      alert("Sharing PDF on WhatsApp...");
      
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        cols={50}
      />
      <div style={{ display: 'flex', gap: '10px' }}></div>
      <button onClick={generatePDF}>Generate PDF</button>
      <button onClick={sharePDF} style={{ backgroundColor: 'green' }}>Share PDF on WhatsApp</button>
      {pdfData && <iframe title="pdfPreview" src={pdfData} width="100%" height="500px" />}
    </div>
  );
}

export default App;
