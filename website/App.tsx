import "./App.css";
import Header from "../src";
import {
  BookOpenIcon,
  BriefcaseIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const headers = [
    {
      title: "Home",
      icon: <HomeIcon className="h-6 w-6" />,
      onClick: (index: number) => setIndex(index),
    },
    {
      title: "Blogs",
      icon: <BookOpenIcon className="h-6 w-6" />,
      onClick: (index: number) => setIndex(index),
    },
    {
      title: "Works",
      icon: <BriefcaseIcon className="h-6 w-6" />,
      onClick: (index: number) => setIndex(index),
    },
  ];
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="font-sans font-extrabold text-3xl mb-1">shiny tab</h1>
        <p className="mb-2 font-sans text-neutral-400">
          glowing vercel styled tab
        </p>
        <a
          className="flex items-center justify-center text-underline text-xs mb-4 text-neutral-400"
          href="https://github.com/harish-sethuraman/shiny-tab#shiny-tab"
        >
          <BookOpenIcon className="h-5 w-5 mr-1 text-neutral-400" />
          docs
        </a>

        <Header links={headers} activeIndex={index} />
      </div>
    </div>
  );
}

export default App;
