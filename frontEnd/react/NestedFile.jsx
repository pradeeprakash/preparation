import { useState } from "react";

const FileExplorer = ({ data }) => {
  return (
    <div style={{ padding: "10px", fontFamily: "Arial" }}>
      <Folder file={data} />
    </div>
  );
};

const Folder = ({ file }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (file.isFolder) setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        onClick={toggleOpen}
        style={{
          cursor: file.isFolder ? "pointer" : "default",
          fontWeight: file.isFolder ? "bold" : "normal",
        }}
      >
        {file.isFolder ? (isOpen ? "📂" : "📁") : "📄"} {file.name}
      </div>
      {isOpen && file.isFolder && (
        <div>
          {file.children.map((child, index) => (
            <Folder key={index} file={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// Example Usage
const fileStructure = {
  name: "Root",
  isFolder: true,
  children: [
    {
      name: "Documents",
      isFolder: true,
      children: [
        { name: "resume.pdf", isFolder: false },
        { name: "cover_letter.docx", isFolder: false },
      ],
    },
    {
      name: "Projects",
      isFolder: true,
      children: [
        {
          name: "ReactApp",
          isFolder: true,
          children: [{ name: "index.js", isFolder: false }],
        },
      ],
    },
    { name: "notes.txt", isFolder: false },
  ],
};

export default function App() {
  return <FileExplorer data={fileStructure} />;
}
