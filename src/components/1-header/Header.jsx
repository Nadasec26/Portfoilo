import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";



export default function Header() {
  const [show, setShow] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("currentMode") ?? "dark");
  useEffect(() => {
    if(theme === "light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  },[theme])
  return (
    <header className="flex justify-between pl-20 pr-20 mt-4">
      <button className='hidden menu icon-menu h-10 w-10 text-2xl cursor-pointer icon-menu' onClick={()=>{setShow(true)}} />
      <div />
      <nav>
        <ul className="flex gap-5">
          <li>
            <a href="about" className="opacity-90 font-medium hover:opacity-100">About</a>
          </li>
          <li>
            <a href="" className="opacity-90 font-medium hover:opacity-100">Articles</a>
          </li>
          <li>
            <a href="" className="opacity-90 font-medium hover:opacity-100">Projects</a>
          </li>
          <li>
            <a href="" className="opacity-90 font-medium hover:opacity-100">Speaking</a>
          </li>
          <li>
            <a href="" className="opacity-90 font-medium hover:opacity-100">Contact</a>
          </li>
        </ul>
      </nav>
      <button onClick={() => {
        localStorage.setItem("currentMode" , theme === "dark" ? "light" : "dark")
        settheme(localStorage.getItem("currentMode"))
      }} className='text-xl mode h-10 w-10 rounded-full justify-center text-center cursor-pointer'>
        {theme === "dark" ? ( 
          <span className="icon-moon-o"></span> ) : (
          <span className="icon-wb_sunny"></span>
        )}
      </button>
      {show && (
        <div className="fixed ">
          <ul className='model mx-auto rounded-2xl mt-9 pr-8 pl-4 w-2/4'>
          <li className="text-right pb-0 pt-1"><button className="icon-clear cursor-pointer text-base hover:text-lg hover:text-red-600" onClick={() => { setShow(false) }} /></li>
          <li className="pb-3 pt-2">
            <a href="" className="opacity-90 font-medium hover:opacity-100 text-base">About</a>
          </li>
          <li className="pb-3 pt-2">
            <a href="" className="opacity-90 font-medium hover:opacity-100 text-base">Articles</a>
          </li>
          <li className="pb-3 pt-2">
            <a href="" className="opacity-90 font-medium hover:opacity-100 text-base">Projects</a>
          </li>
          <li className="pb-3 pt-2">
            <a href="" className="opacity-90 font-medium hover:opacity-100 text-base">Speaking</a>
          </li>
          <li className="pb-3 pt-2 border-none">
            <a href="" className="opacity-90 font-medium hover:opacity-100 text-base">Contact</a>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
}
