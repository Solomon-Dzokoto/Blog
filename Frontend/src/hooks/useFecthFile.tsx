import { useState } from "react";

type FileType = "image" | "video" | null;

const useFileUpload = () => {
  const [filePreview, setFilePreview] = useState<string | null>(null); 
  const [fileType, setFileType] = useState<FileType>(null); // File type: "image" or "video"
  const [fileName, setFileName] = useState<string | null>(null); // Selected file name

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Determine file type
      const type = file.type.startsWith("image/") ? "image" : "video";
      setFileType(type);

      // Store the file name
      setFileName(file.name);

      // Generate a preview using FileReader
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset the file upload state
  const resetFile = () => {
    setFilePreview(null);
    setFileType(null);
    setFileName(null);
  };

  return {
    filePreview,
    fileType,
    fileName,
    handleFileChange,
    resetFile,
  };
};

export default useFileUpload;
