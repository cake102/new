"use client";

import React, { useState } from 'react';

const AdminPage = () => {
  const [fileTitle, setFileTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([
    { no: 1, title: 'Sangkuriang.pdf', date: '2024/08/28' },
    // Add more file entries here
  ]);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const file = files[0];
      console.log('Selected file:', file.name);
    }
  };

  const handleSave = () => {
    console.log('Saving file with title:', fileTitle);
    // Handle save logic
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
    handleFileUpload(event.dataTransfer.files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        background: 'radial-gradient(circle at 50% bottom, #600160, #1a001a, #0d000d)'
      }}
    > 
        <div className="flex gap-20 px-20"> {/* Increased gap here */}
        <div className="form-container p-5 flex-1 min-w-[300px] mr-20"> {/* Add right margin */}          <div className="form-group mb-6">
            <label htmlFor="file-title" className="text-white">First Message</label>
            <input
              type="text"
              id="file-title"
              placeholder="Hai, this is AI voice assistant, can I help you today?"
              value={fileTitle}
              onChange={(e) => setFileTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded input-custom"
            />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="upload-file" className="text-white">Upload File</label>
            <p className="text-xs text-gray-400">
              Supported formats: PDF, CSV, DOCX
            </p>

            <div className="flex items-center space-x-2">
              <label htmlFor="upload-file" className="upload-btn flex items-center cursor-pointer p-2 rounded bg-[#555] text-white" onClick={handleOpenModal}>
                <img src="/upload-icon.svg" alt="Upload Icon" className="admin-upload-icon w-6 h-6 mr-2" />
                <span>Add File</span>
              </label>
            </div>
          </div>

          <button onClick={handleSave} className="bg-[#06A641] text-white px-4 py-2 rounded hover:bg-blue-600">
            Save
          </button>
        </div>

        <div className="table-container flex-1 min-w-[300px]">
          <label className="block mb-2 text-white">List Document</label>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">No.</th>
                <th className="border border-gray-300 p-2">File Name</th>
                <th className="border border-gray-300 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {fileList.map((file, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{file.no}</td>
                  <td className="border border-gray-300 p-2">{file.title}</td>
                  <td className="border border-gray-300 p-2">{file.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>X</button>
            <h2 className="modal-title text-white">Title</h2>
            <input
              type="text"
              placeholder="Enter title here"
              className="modal-input w-full p-2 border border-gray-300 rounded bg-[#555] text-white"
            />
            <h3 className="modal-description text-white">Description</h3>
            <input
              placeholder="Enter description here"
              className="modal-textarea w-full p-2 border border-gray-300 rounded bg-[#555] text-white"
            />
            <div
              className={`modal-file-upload ${dragging ? 'dragging' : ''} bg-[#555] p-4 text-white`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <p>Drag and drop your file here or</p>
              <button onClick={openFileDialog} className="modal-upload-button bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Click to select file
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />
            </div>
            <button className="modal-save bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;