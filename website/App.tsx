import "./App.css";
import Header from "../src";
import {
  BookOpenIcon,
  BriefcaseIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "./components/button";

function App() {
  const [index, setIndex] = useState(0);
  const headers = [
    {
      title: "Home",
      icon: <HomeIcon className="h-6 w-6" />,
      href: "/",
    },
    {
      title: "Blogs",
      icon: <BookOpenIcon className="h-6 w-6" />,
      href: "/blogs/",
    },
    {
      title: "Works",
      icon: <BriefcaseIcon className="h-6 w-6" />,
      href: "/experience",
    },
  ];
  return (
    <div className="bg-black bg-opacity-90 h-screen w-screen">
      <div className="flex justify-center">
        <Button onClick={() => setIndex(0)}>toggle</Button>
        <Button onClick={() => setIndex(1)}>toggle</Button>
        <Button onClick={() => setIndex(2)}>toggle</Button>
      </div>
      <Header links={headers} activeIndex={index} />
    </div>
  );
}

export default App;
