import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor(props) {
  // eslint-disable-next-line react/prop-types
  const { language, displayName, value, onChange, icons } = props;
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div
      className={`flex-grow basis-0 flex flex-col p-[0.5rem] transition-all duration-300 editor-container -mt-[0.1rem] ${
        open ? "" : "grow-0 collaps"
      }`}
    >
      <div className="flex justify-between bg-[hsl(255,6%,13%)] text-white p-[0.5rem_0.5rem_0.5rem_0.1rem] rounded-tr rounded-tl">
        <div className={`flex gap-2 cursor-pointer `}>
          {icons}
          {displayName}
        </div>

        <button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          type="button"
          className=" text-white px-2 rounded ml-[0.5rem] border-none "
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        className="h-[43vh]"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          theme: "material",
          lint: true,
          mode: language,
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default Editor;
