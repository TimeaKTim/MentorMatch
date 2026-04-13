import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";

import Landing from "@/pages/Landing";
import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import SelectRole from "@/pages/Auth/SelectRole";
import MenteeOnboarding from "@/pages/Onboarding/MenteeOnboarding";
import MentorOnboarding from "@/pages/Onboarding/MentorOnboarding";
import MenteeDashboard from "@/pages/Dashboard/MenteeDashboard";
import MentorDashboard from "@/pages/Dashboard/MentorDashboard";
import FindMentors from "@/pages/Mentors/FindMentors";
import MentorProfile from "@/pages/Mentors/MentorProfile";
import BookSession from "@/pages/Mentors/BookSession";
import MyMentors from "@/pages/MyMentors/MyMentors";
import Progress from "@/pages/Progress/Progress";
import Messages from "@/pages/Messages/Messages";

export const router = createBrowserRouter([
  // ── Public routes ──────────────────────────
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  // ── Authenticated routes ───────────────────
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/select-role",
        element: <SelectRole />,
      },
      {
        path: "/onboarding/mentee",
        element: <MenteeOnboarding />,
      },
      {
        path: "/onboarding/mentor",
        element: <MentorOnboarding />,
      },
      {
        path: "/dashboard",
        element: <MenteeDashboard />,
      },
      {
        path: "/dashboard/mentor",
        element: <MentorDashboard />,
      },
      {
        path: "/mentors",
        element: <FindMentors />,
      },
      {
        path: "/mentors/:id",
        element: <MentorProfile />,
      },
      {
        path: "/mentors/:id/book",
        element: <BookSession />,
      },
      {
        path: "/my-mentors",
        element: <MyMentors />,
      },
      {
        path: "/progress",
        element: <Progress />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
    ],
  },
]);
