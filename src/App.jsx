import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import "./App.css";
import Editor from "./Components/Editor";
import Nav from "./Components/Nav";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(` <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
          </html>
        `);
    }, 250);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  const handleOpenClose = (e) => {
    e.preventDefault();
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Nav open={open}/>
      <div
        className={`${
          open
            ? "hidden transition-all ease-in-out delay-1000 duration-1000"
            : "bg-[hsl(255,6%,25%)] h-[50vh] flex"
        }`}
      >
        <Editor
          icons={<FaHtml5 size={25} className="text-[#e34c26]" />}
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />

        <Editor
          icons={<FaCss3Alt size={25} className="text-[#264de4]" />}
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />

        <Editor
          icons={<FaSquareJs size={25} className="text-[#f0db4f]" />}
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>

      <div
        className={`${
          open
            ? "relative h-[100vh] transition-all ease-in-out"
            : "relative h-[50vh]"
        }`}
      >
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          className={`h-full w-full`}
          height="100%"
          width="100%"
        />
        <button
          onClick={handleOpenClose}
          className="absolute top-0 right-5 text-black hover:scale-105 active:scale-95"
        >
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
    </>
  );
}

export default App;
