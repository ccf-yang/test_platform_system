/**
配置弹出窗口的模板配置
*/

// @mui material components
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { boxShadows, functions, transitions } = theme;
  const { openConfigurator } = ownerState; 
  //owerstate会判断传入的变量名称是否一致，一致才取值

  const configuratorWidth = 560;
  const { lg } = boxShadows;
  const { pxToRem } = functions;

  // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: "initial",
    right: 0,
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: pxToRem(-350),
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  return {
    "& .MuiDrawer-paper": {
      height: "100vh",
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      ...(openConfigurator ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
