"use client"
import { RiLoader2Fill } from "react-icons/ri";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useCallback, useEffect, useState, useActionState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone"
import axios from "axios"
import { onPost, type PostProps,type PostReturnProps } from "../server/AuthCheck"
import { useUserStore } from "../store/useUserStore";


const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET

const CreateBlogPage = () => {
  const handleOnPost = async (state: PostReturnProps, formData: FormData) => {
    return await onPost(state?.data as PostProps , formData);
  };
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [state, action, isPending] = useActionState(handleOnPost, {} as PostReturnProps)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [output, setOutput] = useState<{ message: string | null; error: string | null }>({
    message: null,
    error: null,
  })
  const addPost = useUserStore((state) => state.addPost)


  useEffect(() => {
    if (state?.data) {
      console.log()
      state.data = { ...state.data, path : fileUrl as string }
      console.log(state.data)
      setOutput({ message: state.message, error: state?.error })
      addPost(state.data)
      navigate('/user-home')
    }else{
      console.error()
    }},[state])


  useEffect(() => {
   console.log(state)
  }, [state])

  const onSubmit = () => {
    try{
      if(!state){
        throw new Error("No data submitted")
      }
      navigate('/user-home')
    }catch(error){
      console.error("Error saving data: ", error)
    }
  }



  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setLoading(true)
    const file = acceptedFiles[0];
    try {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size should be less than 10MB.")
        return;
      }
      if (!file) {
        console.error("No file selected.")
        throw new Error("No file selected.")
      }
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET)

      const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, formData)

      setFileUrl(data?.secure_url as string)
      console.log("Url", data?.secure_url)
      setLoading(false)
      return data?.secure_url;
    } catch (error) {
      console.log("Error could not achieve file:", error)
      setLoading(false)
      throw error
    }
  }, [])


  const { getInputProps, getRootProps } = useDropzone({ onDrop })

  return (
    <main className="px-[clamp(1rem,6vw,4rem)] py-12 min-h-screen">
      <form action={action} className="grid">
        <div className="relative">
          {fileUrl ? (
            <img loading="lazy" src={fileUrl as string} alt="Preview" className="h-[50vh] w-full block rounded-md" />
          ) : null}

          <div className="bg-[#041E23] h-[8rem] sm:h-[10rem] md:h-[10rem] relative">
            <div {...getRootProps()} role="button" tabIndex={0} aria-label="Upload profile photo. Click or drag and drop an image file here." className="border-2 absolute w-[80%] sm:w-[60%] md:w-[15rem] border-[#24A0B5] h-fit min-h-[10rem] md:h-[12rem] p-4 bg-[#249fb54b]  rounded-[2rem] -top-5 left-1/2 -translate-x-1/2 text-center cursor-pointer">
              <input type="file" {...getInputProps()} />
              {fileUrl ? (
                <img src={fileUrl} alt="Uploaded" className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-md" />
              ) : (
                <div className="text-center p-4">
                  <span className="inline-block mx-auto mb-2">
                    <AiOutlineCloudDownload size={24} className="mx-auto" />
                  </span>
                  <p className="text-sm md:text-base">
                    {loading ?
                      <span className="animate-spin inline-block"><RiLoader2Fill /></span> : (<>
                        <p> Drag & drop or click to upload</p>
                        <small className="text-red-500 absolute left-8 bottom-2 text-[.4rem] ">image of [jpg,png,jpeg,webp] and max size of 5MB</small>
                      </>)

                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <label htmlFor="title">
          <textarea
            placeholder="Title"
            className="w-full resize-none p-4 caret-inherit placeholder:text-[1.5rem] outline-none"
            name="title"
            id="title"
          />
        </label>

        <label htmlFor="details">
          <textarea
            placeholder="Tell Your Story"
            className="w-full p-4 min-h-[40vh] outline-none"
            name="details"
            id="details"
          />
        </label>

        <label htmlFor="category">
          Category
          <select
            name="category"
            className="bg-[#1e5d6c] text-white px-4 py-2 rounded-md"
          >
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Business">Business</option>
            <option defaultValue ="Others">Others</option>
          </select>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          onSubmit={onSubmit}
          disabled={isPending}
          className="bg-green-500 hover:bg-green-400 w-fit text-white px-8 py-2 rounded-md mt-8 justify-self-end"
        >
          {isPending ?( <span ><RiLoader2Fill className="animate-spin inline-block mr-2" />Posting...</span> ): "Publish"}
        </button>

        {output && output?.error && output.error !== null
        ? <p className="text-red-600 text-lg font-bold">{output?.error}</p>
        :output?.message && output.message !== null
        ?  <p className="text-green-600 text-lg font-bold">{output?.message}</p>
        : null
}
      </form>
    </main>
  );
};

export default CreateBlogPage;
