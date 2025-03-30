import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./assets/Loader.gif";

function App() {
  const [code, setCode] = useState("function firstTry {return a + b;}");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });

      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setReview(
        "An error occurred while reviewing the code. Please check the console for details."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <main className="w-full h-[100vh] p-8 bg-zinc-900 text-zinc-50 flex gap-6 ">
        <div className="bg-zinc-700 w-[50%] h-full rounded-md relative">
          <div className="code-container h-full w-full max-h-[100vh] overflow-y-auto">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", nonospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                width: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                boxSizing: "border-box",
                backgroundColor: "#27272a",
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            className="px-7 py-3 rounded-lg bg-blue-600 absolute bottom-6 right-6 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Reviewing..." : "Review"}
          </button>
        </div>
        <div className="bg-[#2a2826] w-[50%] p-5 rounded-lg text-lg overflow-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <img src={Loader} alt="Loading..." />
            </div>
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
