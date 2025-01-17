"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
1. And last but not least, let's not forget embedded images
`;

  const handleFirstSize = () => {
    const textarea = document.getElementById("firstScreen");

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
    const textarea = document.getElementById("secondScreen");

    if (textarea) {
      const textScrollHeight = textarea.scrollHeight + 5; // Adding a small buffer

      if (secondHeight === "800px") {
        setSecondHeight(`${textScrollHeight}px`); // Set to resize based on content
      } else {
        setSecondHeight("800px"); // Set to fixed height
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
              onClick={handleFirstSize}
            >
              <FontAwesomeIcon icon={faExpand} className="text-xl" />
            </button>
          </div>
          <textarea
            name="textEditor"
            id="firstScreen"
            className="overflow-auto p-2 border border-solid border-black  drop-shadow-custom-dark bg-[#bce2e2] text-sm font-mono focus:outline-none"
            style={{ height: `${firstHeight}`, width: "100%" }}
            defaultValue={firstTextAreaContent}
          ></textarea>
        </div>
        <div className="w-[900px] h-auto mx-auto">
          <div className="flex justify-between pl-1 mt-2 font-mono text-base font-bold border border-solid border-black w-[900px] h-[25px] bg-[#4aa3a3] drop-shadow-custom-dark">
            Editor
            <button
              className=" text-black hover:text-[#62d8d8] transition pr-1"
              onClick={handleSecondSize}
            >
              <FontAwesomeIcon icon={faExpand} className="text-xl" />
            </button>
          </div>
          <div
            id="secondScreen"
            className="overflow-auto p-4 border border-solid border-black  drop-shadow-custom-dark bg-[#bce2e2] text-base font-sans focus:outline-none font-normal"
            style={{ height: `${secondHeight}`, width: "100%" }}
          >
            <div id="preview" className="space-y-3 mt-2">
              <h1 className="text-4xl font-medium">
                Welcome to my React Markdown Previewer!
              </h1>
              <hr className="border-t-2 border-black" />

              <h2 className="text-3xl font-medium">This is a sub-heading...</h2>
              <hr className="border-t-2 border-black" />

              <h3 className="text-xl font-medium">
                And here's some other cool stuff:
              </h3>
              <p>
                Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2
                backticks.
              </p>
              <pre className="bg-black text-white pl-2">
                <code>
                  <div>
                    <span>// this is multi-line code:</span>
                  </div>
                  <br />
                  <span>function</span> <span>anotherExample</span>
                  <span>{`(`}</span>
                  <span>firstLine</span>,<span> lastLine</span>
                  <span>{`)`}</span> <span>{`{`}</span>
                  <div>
                    &nbsp;&nbsp;<span>if</span> <span>(</span>firstLine{" "}
                    <span>==</span>
                    <span>'```'</span> <span>&amp;&amp;</span> lastLine
                    <span>==</span> <span>'```'</span>
                    <span>)</span> <span>{`{`}</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span>return</span> multiLineCode
                    <span>;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;<span>{`}`}</span>
                  </div>
                  <div>
                    <span>{`}`}</span>
                  </div>
                </code>
              </pre>
              <p>
                You can also make text <strong>bold</strong>... whoa!
                <br />
                Or <em>italic</em>.<br />
                Or... wait for it...
                <strong>
                  <em>both!</em>
                </strong>
                <br />
                And feel free to go crazy <del>crossing stuff out</del>.
              </p>
              <p>
                There's also{" "}
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org"
                  className="text-blue-500"
                >
                  links
                </a>
                , and
              </p>
              <blockquote className="border-l-4 border-black pl-4 text-black">
                <p>Block Quotes!</p>
              </blockquote>
              <p>And if you want to get really crazy, even tables:</p>
              <table className="table-auto border-collapse border-2 border-black">
                <thead>
                  <tr>
                    <th className="border border-black p-1">Wild Header</th>
                    <th className="border border-black p-1">Crazy Header</th>
                    <th className="border border-black p-1">Another Header?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-1">
                      Your content can
                    </td>
                    <td className="border border-black p-1">be here, and it</td>
                    <td className="border border-black p-1">can be here....</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1">And here.</td>
                    <td className="border border-black p-1">Okay.</td>
                    <td className="border border-black p-1">
                      I think we get it.
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul className="list-disc pl-5">
                <li>
                  And of course there are lists.
                  <ul className="list-disc pl-5">
                    <li>
                      Some are bulleted.
                      <ul className="list-disc pl-5">
                        <li>
                          With different indentation levels.
                          <ul className="list-disc pl-5">
                            <li>That look like this.</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ol className="list-decimal pl-5">
                <li>And there are numbered lists too.</li>
                <li>Use just 1s if you want!</li>
                <li>
                  And last but not least, let's not forget embedded images:
                </li>
              </ol>
              <p className="w-[100%] h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhZG93fGVufDB8fDB8fHww"
                  alt="An image of meadow"
                  className="object-cover w-full h-full"
                />
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
