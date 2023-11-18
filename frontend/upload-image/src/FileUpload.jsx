import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginImageEdit);

const FileUpload = ({ onFileUpload }) => {
  const handleFileProcess = (fieldName, file, metadata, load, error, progress, abort) => {
    progress(true, 0, 100);
    setTimeout(() => {
      progress(false);
      onFileUpload({
        id: file.id,
        name: file.filename,
      });

      load(file.id);
    }, 2000); 
  };

  const handleFileRevert = (uniqueFileId, load, error) => {
    // TODO : Implement file deletion logic
  };

  return (
    <FilePond
      server={{
        process: handleFileProcess,
        revert: handleFileRevert,
      }}
      allowMultiple={true} 
    />
  );
};

export default FileUpload;
