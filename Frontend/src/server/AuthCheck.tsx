"use server";
import { v4 as uuid } from "uuid";
import { format } from "date-fns"


export interface User {
  id?: string | number
  name?: string;
  email: string;
}
export type Output = {
  message: string | null;
  user?: User | null;
  status: number;
  error: string | null;
};

export const onSubmit = async (
  prevState: Output,
  formData: FormData
): Promise<Output> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (!name || !email || !password) {
      return {
        error: "All fields are required",
        user: null,
        message: "All fields are required",
        status: 404,
      };
    }
    const regexPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (regexPattern.test(password)) {
      console.log(
        "Password must be at least 8 characters long and contain at least "
      );
      return {
        error: "Password must include a digit, a lowercase and a uppercase and minimum of 6 length",
        status: 404,
        user: null,
        message: "",
      };
    }


    console.log("User created");
    return {
      message: "User created successfully",
      user: { id: uuid(), name, email },
      error: null,
      status: 201,
    };
  } catch (error) {
    console.error("Error saving data:", error);
    return {
      message: "Error creating user",
      user: null,
      error: error instanceof Error ? error.message : String(error),
      status: 404,
    };
  }
};
export const onLogin = async (
  prevState: Output,
  formData: FormData
): Promise<Output> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (!email || !password) {
      return {
        error: "All fields are required",
        user: null,
        message: "All fields are resquired",
        status: 404,
      };
    }
    const regexPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (regexPattern.test(password)) {
      console.log(
        "Password must be at least 8 characters long and contain at least "
      );
      return {
        error:
          "Password must include a digit, a lowercase and a uppercase and minimum of 6 length",
        status: 404,
        user: null,
        message: "",
      };
    }


    console.log("User created");
    return {
      message: "User created successfully",
      user: { email },
      error: null,
      status: 201,
    };
  } catch (error) {
    console.error("Error saving data:", error);
    return {
      message: "Error creating user",
      user: null,
      error: error instanceof Error ? error.message : String(error),
      status: 404,
    };
  }
};

export interface PostProps {
  id: string | number;
  title: string;
  details: string;
  category: string;
  path? : string;
  date?: Date | string;

}

export interface PostReturnProps extends Output {
  data: PostProps | null;
}

export const onPost = async (prev: PostProps, formData: FormData) : Promise<PostReturnProps> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const title = formData.get("title") as string;
    const details = formData.get("details") as string;
    const category = formData.get("category") as string;
    if (!title.trim() || !details.trim() || !category) {
      return {
        error: "All fields are required",
        data: null,
        message: null,
        status: 404,
      };
    }
    console.log("Post created");
    return {
      message: "Post created successfully",
      data: { title, details, category,id:uuid(),date :format(new Date(2024, 2, 2),"yyyy-MM-dd") as string },
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log("Error saving data:", error)
    return {
      error: error instanceof Error ? error.message : String(error),
      data: null,
      message: "All fields are required",
      status: 404,
    }
  }
}
