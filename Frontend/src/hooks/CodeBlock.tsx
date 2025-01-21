import  { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // Choose a theme

const CodeBlock = ({ code }: { code: string }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-javascript">{code}</code>
    </pre>
  );
};

export default CodeBlock;
