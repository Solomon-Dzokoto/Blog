import { FaImage } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import useFileUpload from "../hooks/useFecthFile";
import axios from "axios";

interface CredentialProps {
  title: string;
  details: string;
  category: string;
  image: File | null;
  video: File | null;
}

const CreateBlogPage = () => {
  const [showFileOptions, setShowFileOptions] = useState<boolean>(false);
  const [credential, setCredential] = useState<CredentialProps>({
    title: "",
    details: "",
    category: "Others",
    image: null,
    video: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { filePreview, fileType, handleFileChange, resetFile } = useFileUpload();

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCredential((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type.startsWith("image/")) {
      setCredential((prev) => ({
        ...prev,
        image: file,
        video: null,
      }));
    } else if (file.type.startsWith("video/")) {
      setCredential((prev) => ({
        ...prev,
        video: file,
        image: null,
      }));
    } else {
      alert("Only image or video files are allowed.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, details, category, image, video } = credential;

    // Validate required fields
    if (!title || !details) {
      alert("Both title and details are required.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("details", details);
      formData.append("category", category);
      if (image) formData.append("image", image);
      if (video) formData.append("video", video);

      await axios.post(`${apiUrl}/api/data`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess("Your Blog has been created successfully!");
      setCredential({
        title: "",
        details: "",
        category: "Others",
        image: null,
        video: null,
      })
      resetFile();
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        setError(`Error: ${error.message || "Something went wrong."}`);
      } else {
        setError("Network error or server is unreachable.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="px-[clamp(1rem,6vw,4rem)] py-12 min-h-screen">
      <form onSubmit={handleSubmit} className="grid">
        <div className="relative">
         
          {filePreview && (
            <span
              onClick={() => {
                resetFile();
                setCredential((prev) => ({ ...prev, image: null, video: null }));
              }}
              className="absolute top-2 left-2 text-red-600 border border-red-600 rounded-full bg-white cursor-pointer"
            >
              <IoMdClose />
            </span>
          )}

          {/* File Preview */}
          {filePreview && fileType === "image" && (
            <img src={filePreview} alt="Preview" className="h-[50vh] block rounded-md" />
          )}
          {filePreview && fileType === "video" && (
            <video controls className="w-96 h-auto">
              <source src={filePreview} type="video/mp4" />
            </video>
          )}

          {/* File Upload Options */}
          {!filePreview && showFileOptions && (
            <div className="flex absolute transition-all left-20 ml-8 gap-4">
              <label
                htmlFor="file"
                className="p-2 cursor-pointer text-[#206173] rounded-full border border-[#206173]"
              >
                <FaImage />
                <input
                  type="file"
                  id="file"
                  accept="image/*,video/*"
                  onChange={(e) => {
                    handleFileChange(e);
                    fileChange(e);
                  }}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>

        {/* Toggle File Upload Options */}
        <span
          onClick={() => setShowFileOptions((prev) => !prev)}
          className="inline-block w-fit cursor-pointer p-2 rounded-full border border-black font-thin"
        >
          {!showFileOptions ? <BsPlusLg /> : <IoMdClose />}
        </span>

        {/* Form Fields */}
        <label htmlFor="title">
          <textarea
            placeholder="Title"
            onChange={handleOnchange}
            value={credential.title}
            className="w-full resize-none p-4 caret-inherit placeholder:text-[1.5rem] outline-none"
            name="title"
            id="title"
          />
        </label>

        <label htmlFor="details">
          <textarea
            placeholder="Tell Your Story"
            onChange={handleOnchange}
            value={credential.details}
            className="w-full p-4 min-h-[40vh] outline-none"
            name="details"
            id="details"
          />
        </label>

        <label htmlFor="category">
          Category
          <select
            name="category"
            onChange={handleOnchange}
            value={credential.category}
            className="bg-[#1e5d6c] text-white px-4 py-2 rounded-md"
          >
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Business">Business</option>
            <option value="Others">Others</option>
          </select>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 hover:bg-green-400 w-fit text-white px-8 py-2 rounded-md mt-8 justify-self-end"
        >
          {loading ? "Loading..." : "Publish"}
        </button>

        {/* Feedback */}
        {error && <p className="text-red-600 text-lg font-bold">{error}</p>}
        {success && <p className="text-green-600 text-lg font-bold">{success}</p>}
      </form>
    </main>
  );
};

export default CreateBlogPage;
