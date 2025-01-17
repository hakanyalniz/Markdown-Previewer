"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [height, setHeight] = useState("300px"); // Initial height in pixels

  const textAreaContent = `# Welcome to my React Markdown Previewer!

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
1. And last but not least, let's not forget embedded images
`;

  const handleDivSize = () => {
    const textarea = document.querySelector("textarea");

    if (textarea) {
      const textScrollHeight = textarea.scrollHeight + 5; // Adding a small buffer

      if (height === "300px") {
        setHeight(`${textScrollHeight}px`); // Set to resize based on content
      } else {
        setHeight("300px"); // Set to fixed height
      }
    }
  };

  return (
    <div className="min-h-screen p-4 font-[family-name:var(--font-montserrat)] font-medium">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-[550px] h-auto mx-auto">
          <div className="flex justify-between pl-1 mt-2 font-mono text-base font-bold border border-solid border-black w-[550px] h-[25px] bg-[#4aa3a3] drop-shadow-custom-dark">
            Editor
            <button
              className=" text-black hover:text-[#62d8d8] transition pr-1"
              onClick={handleDivSize}
            >
              <FontAwesomeIcon icon={faExpand} className="text-xl" />
            </button>
          </div>
          <textarea
            name="textEditor"
            id="editor"
            className="overflow-auto p-2 border border-solid border-black  drop-shadow-custom-dark bg-[#bce2e2] text-sm font-mono focus:outline-none"
            style={{ height: `${height}`, width: "100%" }}
            defaultValue={textAreaContent}
          ></textarea>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          repellendus iure, fugiat nostrum saepe voluptatum sed nobis deleniti
          laudantium nulla dignissimos eveniet incidunt ipsa quas magni ad non
          ratione eos.
        </p>
      </main>
    </div>
  );
}
