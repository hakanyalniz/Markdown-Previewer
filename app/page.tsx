export default function Home() {
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

  return (
    <div className="min-h-screen p-4 pb-20 font-[family-name:var(--font-montserrat)] font-medium">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-[550px] h-[250px] mx-auto">
          <div className=" pl-1 font-mono text-base font-bold border border-solid border-black w-[550px] h-[25px] bg-[#4aa3a3] drop-shadow-lg">
            Editor
          </div>
          <textarea
            name="textEditor"
            id="editor"
            className="p-2 border border-solid border-black w-full h-full min-h-[250px] drop-shadow-lg bg-[#bce2e2] text-sm font-mono focus:outline-none"
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
