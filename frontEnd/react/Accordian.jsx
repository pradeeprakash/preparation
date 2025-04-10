import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AccordionItem from "./AccordionItem";

import { ChevronDown, ChevronUp } from "lucide-react";

export default function AccordionItem({ item }) {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={item.toggle}
        className="w-full text-left py-3 px-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
      >
        <span>{item.title}</span>
        {item.isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {item.isOpen && (
        <div className="p-4 text-gray-700 border-t bg-white">{item.content}</div>
      )}
    </div>
  );
}


const data = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building UIs.",
  },
  {
    id: 2,
    title: "What is an accordion?",
    content: "An interactive component that expands and collapses.",
  },
  {
    id: 3,
    title: "Why use an accordion?",
    content: "To display information in a more readable way.",
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  return (
    <Card className="p-4 w-[400px] mx-auto shadow-lg rounded-2xl">
      <CardContent>
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={{
              ...item,
              isOpen: item.id === openId,
              toggle: () => setOpenId(openId === item.id ? null : item.id),
            }}
          />
        ))}
      </CardContent>
    </Card>
  );
}
