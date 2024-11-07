import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
/** ----------------------------------------------- Componenets ------------------------------------------------ */
import useUIStore from "../Zustand/UI/UIState";
import useAuthStore from "../Zustand/Auth/UserAuth";
import Loading from "../../Components/Loading/Loading";
const ChatBox = lazy(() =>
  import("../../Pages/ChatBox/Components/ChatboxPopup/Chatbox")
);
const VacationReport = lazy(() =>
  import("../../Pages/HR/Pages/Reports/VacationReport/VacationReport")
);
const UserData = lazy(() =>
  import("../../Pages/UserProfile/Components/UserData")
);

const CodingRightBar = lazy(() =>
  import("../../Pages/HR/Pages/Coding/Components/CodingRightBar")
);
const StarredSelectItem = lazy(() =>
  import("../../Pages/Starred/StarredSelectItem")
);
const TrashSelectItem = lazy(() => import("../../Pages/Trashed/TrashedEMpty"));
const Settings = lazy(() => import("../../Pages/Settings/Settings"));
const EmployeeSettings = lazy(() =>
  import("../../Pages/Settings/EmployeeSettings")
);
const UserProfile = lazy(() => import("../../Pages/UserProfile/UserProfile"));
const UserSecurity = lazy(() =>
  import("../../Pages/UserProfile/Components/UserSecurity")
);
const Header = lazy(() => import("../../Components/Header/Header"));
const Navbar = lazy(() => import("../../Components/Navbar/Navbar"));
const Home = lazy(() => import("../../Pages/Home/Home"));
const Login = lazy(() => import("../../Pages/Login/Login"));
const ErrorPage = lazy(() => import("../../Pages/ErrorPage/ErrorPage"));
const Downloads = lazy(() => import("../../Pages/Downloads/Downloads"));
const Starred = lazy(() => import("../../Pages/Starred/Starred"));
const Trashed = lazy(() => import("../../Pages/Trashed/Trashed"));
const HR = lazy(() => import("../../Pages/HR/HR"));
const Coding = lazy(() => import("../../Pages/HR/Pages/Coding/Coding"));
const CodingDepartments = lazy(() =>
  import("../../Pages/HR/Pages/Coding/Departments/CodingDepartments")
);
const CodingEducations = lazy(() =>
  import("../../Pages/HR/Pages/Coding/Educations/CodingEducations")
);
const CodingLocations = lazy(() =>
  import("../../Pages/HR/Pages/Coding/Locations/CodingLocations")
);
const CodingJobs = lazy(() =>
  import("../../Pages/HR/Pages/Coding/Jobs/CodingJobs")
);
const Employees = lazy(() =>
  import("../../Pages/HR/Pages/Employees/Employees")
);
const Transactions = lazy(() =>
  import("../../Pages/HR/Pages/Transactions/Transactions")
);
const HRDashboard = lazy(() => import("../../Pages/HR/HRDashboard"));
const EmployeesView = lazy(() =>
  import("../../Pages/HR/Pages/Employees/Components/EmployeesView")
);
import EmployeesDataView from "../../Pages/HR/Pages/Employees/Components/EmployeesDataView";
import UserAccess from "../../Pages/UserProfile/Components/UserAccess";
import ResetPassword from "../../Pages/Register/Register";
import EmployeeInnerTabs from "../../Pages/HR/Pages/Employees/Components/EmployeeInnerTabs";

const TransactionsView = lazy(() =>
  import("../../Pages/HR/Pages/Transactions/Components/TransactionsView")
);
const TransactionSchedule = lazy(() =>
  import(
    "../../Pages/HR/Pages/Transactions/Pages/TransactionsSchedule/TransactionSchedule"
  )
);
const TransactionsCalender = lazy(() =>
  import(
    "../../Pages/HR/Pages/Transactions/Pages/TransactionsCalender/TransactionsCalender"
  )
);
const PayrollReport = lazy(() =>
  import("../../Pages/HR/Pages/Reports/PayrolReport/PayrollReport")
);
const PayrollReportsView = lazy(() =>
  import(
    "../../Pages/HR/Pages/Reports/PayrolReport/Components/PayrollReportView"
  )
);
const DeductionView = lazy(() =>
  import(
    "../../Pages/HR/Pages/Transactions/Pages/DeductionPermission/Components/DeductionView"
  )
);

function Main() {
  return (
    <>
      <Header />
      <main onContextMenu={(e) => e.preventDefault()}>
        <Navbar />

        <Outlet />
      </main>
      <ChatBox />
    </>
  );
}
const ProtectedRoute = ({ children }) => {
  const { id } = useParams();
  const setHideToggle = useUIStore((state) => state.setHideToggle);
  const RemoveHideToggle = useUIStore((state) => state.RemoveHideToggle);
  useEffect(() => {
    if (id) {
      setHideToggle();
    } else {
      RemoveHideToggle();
    }
  }, [id]);
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return children;
};
function Layout() {
  const routes = [
    {
      path: "/",
      element: <ProtectedRoute children={<Main />} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "MyProfile",
          element: <UserProfile />,
          children: [
            {
              path: "",
              element: <UserData />,
            },
            {
              path: "data",
              element: <UserData />,
            },

            {
              path: "security",
              element: <UserSecurity />,
            },
            {
              path: "access",
              element: <UserAccess />,
            },
          ],
        },
        {
          path: "/Admin/Settings",
          element: <Settings />,
        },
        {
          path: "/Admin/UserMenu",
          element: <EmployeeSettings />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/HR",
          exact: true,
          element: <HR />,
          children: [
            {
              path: "Coding",
              exact: true,
              element: <Coding />,
              children: [
                {
                  path: "departments",
                  exact: true,
                  element: <CodingDepartments />,
                },
                {
                  path: "location",
                  element: <CodingLocations />,
                },
                {
                  path: "educations",
                  element: <CodingEducations />,
                },
                {
                  path: "jobs",
                  element: <CodingJobs />,
                },
              ],
            },
            {
              path: "employees",
              exact: true,
              element: <Employees isStar={false} />,
              children: [
                {
                  path: ":id",
                  exact: true,
                  element: <EmployeeInnerTabs />,
                },
                {
                  path: "",
                  element: <EmployeesView isStar={false} />,
                },
              ],
            },
            {
              path: "transaction",
              element: <Transactions />,
              children: [
                {
                  path: "DailyTransaction",
                  element: <TransactionsView />,
                },
                {
                  path: "Deduction",
                  element: <DeductionView />,
                },
                {
                  path: "Schedule/Employee/:id",
                  element: <TransactionSchedule />,
                },
                {
                  path: "DailyTransaction/Calender/Employee/:id",
                  element: <TransactionsCalender />,
                },
              ],
            },
            {
              path: "Reports/Payroll",
              element: <PayrollReport />,
            },
            {
              path: "Reports/Vacation",
              element: <VacationReport />,
            },
            {
              index: true,
              element: <HRDashboard />,
            },
          ],
        },
        {
          path: "/Download",
          element: <Downloads />,
        },
        {
          path: "/Starred",
          element: <Starred />,
          children: [
            {
              path: "",

              element: (
                <div className="main-content">
                  <StarredSelectItem />
                </div>
              ),
            },
            {
              path: "HR/Coding/departments",
              element: (
                <>
                  <div className="main-content">
                    <CodingDepartments isStarred={true} />
                  </div>
                  <CodingRightBar />
                </>
              ),
            },
            {
              path: "HR/Coding/location",
              element: (
                <>
                  <div className="main-content">
                    <CodingLocations isStarred={true} />
                  </div>
                  <CodingRightBar />
                </>
              ),
            },
            {
              path: "HR/Coding/educations",
              element: (
                <>
                  <div className="main-content">
                    <CodingEducations isStarred={true} />
                  </div>
                  <CodingRightBar />
                </>
              ),
            },
            {
              path: "HR/Coding/jobs",
              element: (
                <>
                  <div className="main-content">
                    <CodingJobs isStarred={true} />
                  </div>
                  <CodingRightBar />
                </>
              ),
            },
            {
              path: "HR/employees",
              element: <Employees isStar={true} />,
              children: [
                {
                  path: ":id",
                  exact: true,
                  element: <EmployeesDataView key={"details"} />,
                },
                {
                  path: "",
                  element: <EmployeesView isStar={true} />,
                },
              ],
            },
          ],
        },
        {
          path: "/Trashed",
          element: <Trashed />,
          children: [
            {
              path: "",

              element: (
                <div className="main-content">
                  <TrashSelectItem />
                </div>
              ),
            },
            {
              path: "HR/Coding/departments",
              element: (
                <>
                  <div className="main-content">
                    <CodingDepartments isDeleted={true} />
                  </div>
                  <CodingRightBar isDeleted={true} />
                </>
              ),
            },
            {
              path: "HR/Coding/location",
              element: (
                <>
                  <div className="main-content">
                    <CodingLocations isDeleted={true} />
                  </div>
                  <CodingRightBar isDeleted={true} />
                </>
              ),
            },
            {
              path: "HR/Coding/educations",
              element: (
                <>
                  <div className="main-content">
                    <CodingEducations isDeleted={true} />
                  </div>
                  <CodingRightBar isDeleted={true} />
                </>
              ),
            },
            {
              path: "HR/Coding/jobs",
              element: (
                <>
                  <div className="main-content">
                    <CodingJobs isDeleted={true} />
                  </div>
                  <CodingRightBar isDeleted={true} />
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/ResetPassword",
      element: <ResetPassword />,
    },
  ];
  const handleRouterError = (error) => {
    console.error("Router encountered an error:", error);
    if (
      error.message.includes("Failed to fetch dynamically imported module") ||
      error.message.includes("Importing a module script failed")
    ) {
      window.location.reload();
    }
    // Optional: Implement additional error handling logic here
    // For example, redirect to a global error page:
    // window.location.href = "/error";
  };

  const router = createBrowserRouter(routes, {
    onError: handleRouterError,
  });

  return (
    <Suspense fallback={<Loading fullScreen={true} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Layout;
