import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <div className="flex text-2xl justify-around p-7">
        <div className="dark:text-white">
          <h1 className="font-bold text-4xl">
            J<span className="font-normal text-3xl">t</span>
          </h1>
        </div>
        <div className="flex gap-10 mt-1.5">
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/jinmoyee-thakuria-794774235/" target="_blank">
              <FaLinkedin size={30} className="dark:text-white" />
            </a>
            <a href="https://github.com/Jinmoyee" target="_blank">
              <FaGithub size={30} className="dark:text-white" />
            </a>
            <a href="https://x.com/jinmoyee" target="_blank">
              <FaSquareXTwitter size={30} className="dark:text-white" />
            </a>
            <a href="https://www.instagram.com/jinmoyee_thakuria/" target="_blank">
              <FaInstagram size={30} className="dark:text-white" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-4 right-4 flex bg-black text-white p-2 rounded-full text-2xl cursor-pointer dark:bg-white dark:text-black"
        onClick={handleThemeSwitch}
      >
        <FontAwesomeIcon icon={faSun} />
      </div>
    </div>
  );
}
