import Dashboard from "layouts/dashboard";
import Cases from "layouts/casesmanager";
import Tables from "layouts/tables";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import MyComponent from "layouts/ceshi"
// @mui icons
import Icon from "@mui/material/Icon";

// https://fonts.google.com/icons 可以在这获取icon，大写都换成小写，多字用_分隔。
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "用例库管理",
    key: "casesmanager",
    icon: <Icon fontSize="small">dataset</Icon>,
    route: "/cases",
    component: <Cases />,
  },
  {
    type: "collapse",
    name: "用例执行",
    key: "casesrun",
    icon: <Icon fontSize="small">tabs</Icon>,
    route: "/case_run",
    component: <MyComponent />,
  },
  {
    type: "collapse",
    name: "用例生成",
    key: "casesgenerate",
    icon: <Icon fontSize="small">rocket_launch</Icon>,
    route: "/case_generate",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "自动化接口管理",
    key: "autosmanager",
    icon: <Icon fontSize="small">api</Icon>,
    route: "/api_manager",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "自动化接口用例生成",
    key: "autosgenereate",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/api_generate",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <MyComponent />,
  },
  {
    type: "collapse",
    name: "用户信息",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "登录",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "注册",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
