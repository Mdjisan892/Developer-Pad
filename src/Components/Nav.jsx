import { useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
function Nav({open}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${open ? "hidden" : "bg-[hsl(255,6%,17.5%)] p-5 py-1 flex justify-between items-center"}`}>
      <div className="flex gap-3 ">
        <TbBrandVscode size={30} className="text-blue-700/90" />
        <h1 className="text-white text-2xl font-bold -top-[0.1rem]">
          Test Your Code
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleMenu}
          className="text-white cursor-pointer mr-9 flex gap-3"
        >
          {<FaCloudDownloadAlt size={25} />}
          {isOpen ? (
            <FaTimes size={25} className="fill-red-500" />
          ) : (
            <FaBars size={25} />
          )}
        </button>

        <div
          className={`flex gap-5 py-1 px-2 rounded-sm items-center bg-white absolute right-2 mt-14 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <a
            href="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
            target="_blank"
          >
            <FaHtml5 size={25} className="text-[#e34c26] cursor-pointer" />
          </a>
          <a
            href="https://web.stanford.edu/class/cs142/lectures/CSS.pdf"
            target="_blank"
          >
            <FaCss3Alt size={25} className="text-[#264de4] cursor-pointer" />
          </a>
          <a
            href="https://web.stanford.edu/group/csp/cs22/pdfs/javascript.pdf"
            target="_blank"
          >
            <FaSquareJs size={25} className="text-[#f0db4f] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
