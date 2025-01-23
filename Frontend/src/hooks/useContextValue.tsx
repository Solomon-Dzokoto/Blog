import { context } from "../context/useContextApi";
import { useContext } from "react";

const ContextValue = () => {
 return useContext(context)
};

export default ContextValue;
