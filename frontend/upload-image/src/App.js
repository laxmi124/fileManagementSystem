// App.js
import React, { useState } from 'react';
import FileUpload from './FileUpload';

const App = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (file) => {
    setFiles([...files, file]);
  };


  return (
    <div>
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default App;
