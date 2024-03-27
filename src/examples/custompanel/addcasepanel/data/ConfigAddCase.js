/**
配置弹出窗口的模板配置
*/

// @mui material components
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { boxShadows, functions, transitions } = theme;
  const { addCase } = ownerState; 
  //owerstate会判断传入的变量名称是否一致，一致才取值

  const { lg } = boxShadows;
  const { pxToRem } = functions;


const drawerOpenStyles = () => ({
    width: '50%',
    height: '50%', // 面板高度设置为视口高度的50%
    top: '18%', // 顶部留白
    left: '30%', //左侧留白
    right: '20%', //右侧留白
    position: 'position', // 使用固定定位
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });
  

const drawerCloseStyles = () => ({
    left: "50%", // 设置 left 属性为 50%，使面板水平居中
    transform: "translateX(-50%)",
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
    opacity: 0, // 添加 opacity 属性，使面板透明度为0，实现消失效果
  });

  return {
    "& .MuiDrawer-paper": {
      height: "100vh",
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      ...(addCase ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
