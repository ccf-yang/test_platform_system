import { useState, useEffect, useMemo } from "react";
// 一些react的hooks管理组件的状态和副作用

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import Addcasepanel from "examples/custompanel/addcasepanel";
// Material Dashboard 2 React themes
import theme from "assets/theme";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

export default function App() {
  const [controller, dispatch] = useMaterialUIController(); //Hook 获取了一个名为 controller 的对象，其中包含了一些状态值和 dispatch 方法。
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller; //从 controller 对象中取出了一些状态值
  const [onMouseEnter, setOnMouseEnter] = useState(false); //Hook 定义了两个状态变量 onMouseEnter 和 rtlCache
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation(); // Hook 获取了当前页面的路径信息

  // Hook 创建了一个缓存对象 cacheRtl，并将其设置到了 rtlCache 状态变量
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);  
  }, []);

  // Open sidenav when mouse enter on mini sidenav,handleOnMouseEnter 和 handleOnMouseLeave 两个函数，用于处理鼠标进入和离开事件,设置鼠标移到选项有虚化效果
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state ,切换 openConfigurator 状态的值
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Hook 监听了 direction 状态的变化，并在变化时设置了页面的 dir 属性
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Hook 监听了 pathname 的变化，并在变化时将页面滚动位置重置为顶部
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  //函数首先使用 map 方法遍历传入的 allRoutes 数组，对每个路由信息进行处理
 const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {   //检查是否存在子路由（通过 collapse 属性）
        return getRoutes(route.collapse); //如果存在子路由，则递归调用 getRoutes 函数处理子路由
      }

      if (route.route) { //判断当前路由是否包含 route 属性，如果包含则返回相应的 Route 组件
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

    //使用 Material-UI 中的组件来创建一个固定在页面右下角的圆形按钮,点击后会触发 handleConfiguratorOpen 函数
  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return  (
    //提供整个应用程序的主题支持。根据 darkMode 的值选择不同的主题，themeDark 用于暗黑模式，theme 用于默认模式
    <ThemeProvider theme={darkMode ? themeDark : theme}>  
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="测试平台"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          <Addcasepanel />
          {configsButton}
        </>
      )}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
