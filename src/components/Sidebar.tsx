import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { BsArrowLeftCircle } from "react-icons/bs";
import { SiFuturelearn, SiOpenaccess } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FaUniversity, FaObjectGroup } from "react-icons/fa";
import { FaClipboardQuestion, FaUsers, FaNoteSticky } from "react-icons/fa6";
import { MdDashboard, MdSchool, MdTopic } from "react-icons/md";
import { PiExamFill, PiSealQuestionBold } from "react-icons/pi";
import HamburgerButton from "./HamburgerMenuButton/HamburgerButton";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
//  debugger;
  const Menus = [
   
    { title: "ResetPassword", path: "/resetpassword/:resetCode", src:<PiExamFill />},
    { title: "AddPaper", path: "/addpaper", src:<PiExamFill />},
    { title: "Dashboard", path: "/dashboard", src: <MdDashboard /> },
    { title: "Colleges", path: "/colleges", src: <FaUniversity /> },
    { title: "Courses", path: "/courses", src: <MdSchool /> },
    { title: "Subjects", path: "/subjects", src: <MdTopic /> },
    { title: "Exams", path: "/exams", src: <PiExamFill /> },
    { title: "Files", path: "/files", src: <PiSealQuestionBold /> },
    { title: "Notes", path: "/notes", src: <FaNoteSticky /> },
    { title: "Users", path: "/users", src: <FaUsers /> },
    { title: "Exam -> File", path: "/examfile", src: <FaObjectGroup /> },
    { title: "Profile", path: "/profile", src: <CgProfile />, gap: "true" },
    { title: "Logout", path: "/login", src: <SiOpenaccess /> },
    
    
  ];

  return (
   
    <>
      <div
        className={`${
          open ? "w-60" : "w-fit"
        } hidden sm:block relative h-screen duration-300 bg-ct-blue-600 text-white border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && "rotate-180"
          } absolute text-3xl bg-white fill-ct-blue-600  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to="/">
          <div className={`flex ${open && "gap-x-4"} items-center`}>
            <FaClipboardQuestion size={32} color="#f9d13e" />
            {open && (
              <span className="text-xl font-medium whitespace-nowrap text-white">
                SecureExams
              </span>
            )}
          </div>
        </Link>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
             
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer hover:bg-ct-yellow-600 hover:text-black dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                  location.pathname === menu.path &&
                  "bg-ct-yellow-600 text-gray-800"
                }`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? "flex" : "hidden"
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  "bg-gray-200 dark:bg-gray-700"
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
