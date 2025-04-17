"use client";
import { RiLoader2Fill } from "react-icons/ri";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FiImage, FiFileText, FiTag, FiCheck } from "react-icons/fi";
import { useCallback, useEffect, useState, useActionState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import {
  onPost,
  type PostProps,
  type PostReturnProps,
} from "../server/AuthCheck";
import { useUserStore } from "../store/useUserStore";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

const CreateBlogPage = () => {
  const handleOnPost = async (state: PostReturnProps, formData: FormData) => {
    return await onPost(state?.data as PostProps, formData);
  };

  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [state, action, isPending] = useActionState(
    handleOnPost,
    {} as PostReturnProps
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [output, setOutput] = useState<{
    message: string | null;
    error: string | null;
  }>({
    message: null,
    error: null,
  });
  const addPost = useUserStore((state) => state.addPost);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (state?.data && user) {
      state.data = { ...state.data, path: fileUrl as string, user: user?.name };
      setOutput({ message: state.message, error: state?.error });
      addPost(state.data);
      navigate("/user-home");
    } else {
      console.error("No data submitted");
    }
  }, [state, user]);

  const onSubmit = () => {
    try {
      if (!state) {
        throw new Error("No data submitted");
      }
      navigate("/user-home");
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setLoading(true);
    const file = acceptedFiles[0];
    try {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size should be less than 10MB.");
        return;
      }
      if (!file) {
        console.error("No file selected.");
        throw new Error("No file selected.");
      }
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const { data } = await axios.post<{ secure_url: string }>(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        formData
      );

      setFileUrl(data?.secure_url ? data.secure_url : "");
      setLoading(false);
      return data?.secure_url ? data.secure_url : "";
    } catch (error) {
      console.log("Error could not achieve file:", error);
      setLoading(false);
      throw error;
    }
  }, []);

  const { getInputProps, getRootProps } = useDropzone({ onDrop });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#1e5d6c] to-[#0d2d35] text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Create New Article
            </h1>
            <p className="mt-2 text-blue-100">
              Share your insights and expertise with the community
            </p>
          </div>

          <form action={action} className="p-6 sm:p-8 space-y-8">
            {/* Cover Image Upload */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
                <FiImage className="mr-2" /> Featured Image
              </h2>

              {fileUrl ? (
                <div className="relative">
                  <img
                    src={fileUrl}
                    alt="Article cover"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <FiCheck className="mr-1" /> Image Uploaded
                  </div>
                  <button
                    type="button"
                    onClick={() => setFileUrl(null)}
                    className="mt-2 text-sm text-red-600 hover:text-red-800"
                  >
                    Remove & Upload New
                  </button>
                </div>
              ) : (
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <input {...getInputProps()} />
                  <AiOutlineCloudDownload
                    size={36}
                    className="text-gray-400 mb-4"
                  />

                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <RiLoader2Fill className="animate-spin text-blue-600" />
                      <p className="text-sm text-gray-500">
                        Uploading image...
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-gray-500 text-center mb-1">
                        Drag & drop an image or click to browse
                      </p>
                      <p className="text-xs text-gray-400 text-center">
                        Supports JPG, PNG, JPEG, WEBP (Max 10MB)
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
              >
                <FiFileText className="mr-2" /> Article Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter a descriptive title for your article"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 bg-white border"
              />
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Article Content
              </label>
              <textarea
                name="details"
                id="details"
                placeholder="Write your article content here..."
                rows={12}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 bg-white border resize-y"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
              >
                <FiTag className="mr-2" /> Category
              </label>
              <select
                name="category"
                id="category"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 bg-white border"
              >
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Sports">Sports</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="mr-4 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 rounded-md shadow-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                onSubmit={onSubmit}
                disabled={isPending || loading || !fileUrl}
                className={`px-5 py-2.5 text-sm font-medium text-white rounded-md shadow-sm flex items-center ${
                  isPending || loading || !fileUrl
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1e5d6c] hover:bg-[#164a57]"
                }`}
              >
                {isPending ? (
                  <>
                    <RiLoader2Fill className="animate-spin mr-2" />
                    Publishing...
                  </>
                ) : (
                  "Publish Article"
                )}
              </button>
            </div>

            {/* Notifications */}
            {output?.error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-md">
                {output.error}
              </div>
            )}

            {output?.message && !output.error && (
              <div className="p-4 bg-green-50 text-green-700 rounded-md">
                {output.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
