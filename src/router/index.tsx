import type { RouteObject } from "react-router-dom";
import LayoutNormal from "../components/LayoutNormal";
import LayoutAuth from "../components/LayoutAuth";
import EmailVerificationPage from "../pages/emailverification.page";
import ForgotPasswordPage from "../pages/forgotpassword.page";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import ProfilePage from "../pages/profile.page";
import RegisterPage from "../pages/register.page";
import ResetPasswordPage from "../pages/resetpassword.page";
          
import ViewNotes from "../pages/view.notes.page";
import Dashboard from "../pages/dashboard";
/* Colleges */
import AddCollege from "../pages/colleges/Add";
import EditCollege from "../pages/colleges/Edit";
import College from "../pages/colleges/College";
import Colleges from "../pages/colleges/Colleges";
/* Colurses */
import AddCourse from "../pages/courses/Add";
import EditCourse from "../pages/courses/Edit";
import Course from "../pages/courses/Course";
import Courses from "../pages/courses/Courses";
/* Subjects */
import AddSubject from "../pages/subjects/Add";
import EditSubject from "../pages/subjects/Edit";
import Subject from "../pages/subjects/Subject";
import Subjects from "../pages/subjects/Subjects";
/* Exams */
import AddExam from "../pages/exams/Add";
import EditExam from "../pages/exams/Edit";
import Exam from "../pages/exams/Exam";
import Exams from "../pages/exams/Exams";
/* Files */
import AddFile from "../pages/files/Add";
import EditFile from "../pages/files/Edit";
import File from "../pages/files/File";
import Files from "../pages/files/Files";
/* Users */
import AddUser from "../pages/users/Add";
import EditUser from "../pages/users/Edit";
import User from "../pages/users/User";
import Users from "../pages/users/Users";
import ExamFileMapping from '../pages/exam.file.mapping';
import AddPaper from '../pages/addpaper/AddPaper';
import ExamPapers from '../pages/addpaper/ExamPapers';
import EditPaper from '../pages/addpaper/EditPaper';

const authRoutes: RouteObject = {
  path: "*",
  element: <LayoutNormal />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    
    {
      path: "verifyemail",
      element: <EmailVerificationPage />,
      children: [
        {
          path: ":verificationCode",
          element: <EmailVerificationPage />,
        },
      ],
    },
    
    {
      path: "forgotpassword",
      element: <ForgotPasswordPage />,
    },
    {
      path: "resetpassword/:resetCode",
      element: <ResetPasswordPage />,
    },
  ],
};

const normalRoutes: RouteObject = {
  path: "",
  element: <LayoutAuth />,
  children: [
    {
      path: "resetpassword/:resetCode",
      element: <ResetPasswordPage />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "profile",
      element: <ProfilePage />,
    },
    {
      path: "notes",
      element: <ViewNotes />,
    },
    {
      path: "colleges",
      element: <Colleges />,
    },
    {
      path: "/colleges/:id",
      element: <College />,
    },
    {
      path: "add-college",
      element: <AddCollege />,
    },
    
    {
   //   path: "edit-college/:id",
   path: "edit-college/:cid",
      element: <EditCollege />,
    },
    {
      path: "courses",
      element: <Courses />,
    },
    {
      path: "/courses/:id",
      element: <Course />,
    },
    {
      path: "add-course",
      element: <AddCourse />,
    },
    {
      path: "edit-course/:id",
      element: <EditCourse />,
    },
    {
      path: "subjects",
      element: <Subjects />,
    },
    {
      path: "/subjects/:id",
      element: <Subject />,
    },
    {
      path: "add-subject",
      element: <AddSubject />,
    },
    {
      path: "edit-subject/:id",
      element: <EditSubject />,
    },
    {
      path: "exams",
      element: <Exams />,
    },
    {
      path: "/exams/:id",
      element: <Exam />,
    },
    {
      path: "add-exam",
      element: <AddExam />,
    },
    {
      path: "edit-exam/:id",
      element: <EditExam />,
    },
    {
      path: "files",
      element: <Files />,
    },
    {
      path: "/files/:id",
      element: <File />,
    },
    {
      path: "add-file",
      element: <AddFile />,
    },
    {
      path: "edit-file/:id",
      element: <EditFile />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "/users/:id",
      element: <User />,
    },
    {
      path: "add-user",
      element: <AddUser />,
    },
    {
      path: "edit-user/:id",
      element: <EditUser />,
    },
    {
      path: "examfile",
      element: <ExamFileMapping />,
    },
    {
      path: "addpaper",
      element: <AddPaper/>,
    },
    ,
    {
      path: "exampapers",
      element: <ExamPapers/>,
    },
    {
      path: "edit-paper/:id",
      element: <EditPaper/>,
    },

    

    

  ],
};

const routes: RouteObject[] = [authRoutes, normalRoutes];

export default routes;
