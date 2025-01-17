"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { marked } from "marked"; // Import marked

export default function Home() {
  const [firstHeight, setFirstHeight] = useState("300px"); // Initial height in pixels
  const [secondHeight, setSecondHeight] = useState("800px"); // Initial height in pixels

  const firstTextAreaContent = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Meadow Image](https://images.stockcake.com/public/3/d/9/3d9bdb89-ea64-425a-9874-ceb3bea8f8bf_medium/sunny-meadow-stream-stockcake.jpg)
`;

  const [inputText, setInputText] = useState(firstTextAreaContent);

  const handleFirstSize = () => {
    const textarea = document.getElementById("editor");

    if (textarea) {
      const textScrollHeight = textarea.scrollHeight + 5; // Adding a small buffer

      if (firstHeight === "300px") {
        setFirstHeight(`${textScrollHeight}px`); // Set to resize based on content
      } else {
        setFirstHeight("300px"); // Set to fixed height
      }
    }
  };

  const handleSecondSize = () => {
    const textarea = document.getElementById("preview");

    if (textarea) {
      const textScrollHeight = textarea.scrollHeight + 100; // Adding a small buffer

      if (secondHeight === "800px") {
        setSecondHeight(`${textScrollHeight}px`); // Set to resize based on content
      } else {
        setSecondHeight("800px"); // Set to fixed height
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="min-h-screen p-4 font-[family-name:var(--font-montserrat)] font-medium">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-[550px] h-auto mx-auto">
          <div className="flex justify-between pl-1 mt-2 font-mono text-base font-bold border border-solid border-black w-[550px] h-[25px] bg-[#4aa3a3] drop-shadow-custom-dark">
            Editor
            <button
              className="text-black hover:text-[#62d8d8] transition pr-1"
              onClick={handleFirstSize}
            >
              <FontAwesomeIcon icon={faExpand} className="text-xl" />
            </button>
          </div>
          <textarea
            name="textEditor"
            id="editor"
            className="overflow-auto p-2 border border-solid border-black  drop-shadow-custom-dark bg-[#bce2e2] text-sm font-mono focus:outline-none"
            style={{ height: `${firstHeight}`, width: "100%" }}
            defaultValue={inputText}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="w-[900px] h-auto mx-auto">
          <div className="flex justify-between pl-1 mt-2 font-mono text-base font-bold border border-solid border-black w-[900px] h-[25px] bg-[#4aa3a3] drop-shadow-custom-dark">
            Previewer
            <button
              className=" text-black hover:text-[#62d8d8] transition pr-1"
              onClick={handleSecondSize}
            >
              <FontAwesomeIcon icon={faExpand} className="text-xl" />
            </button>
          </div>
          <div
            id="secondEditor"
            className="overflow-auto p-4 border border-solid border-black  drop-shadow-custom-dark bg-[#bce2e2] text-base font-sans focus:outline-none font-normal"
            style={{ height: `${secondHeight}`, width: "100%" }}
          >
            <div
              id="preview"
              className="prose space-y-3 mt-2"
              dangerouslySetInnerHTML={{
                __html: marked(inputText, { breaks: true }),
              }} // Render HTML generated from markdown
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
}
