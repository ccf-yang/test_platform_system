import  { useState } from 'react';
import React from "react";
import MDSnackbar from "components/MDSnackbar";

// 这里是自己实现的，封装已有模块，构建中转结构，做成通用模块的方法。
//这里举例就是封装已有通知，返回一个可以传信息和类型的函数和渲染的变量，就可以在别的地方使用通用通知了
const Notis = () => {
  const [sSB, setSSB] = useState(false);
  const [color, setColorSB] = useState("");
  const [title, setTitleSB] = useState("");
  const [icon, setIconSB] = useState("");
  const [conTent, setContent] = useState("");

  const openSB = (info, color, title, icon) => {
    setSSB(true);
    setColorSB(color);
    setTitleSB(title);
    setIconSB(icon);
    setContent(info);
  };

  const closeSB = () => {
    setSSB(false);
    setColorSB("");
    setTitleSB("");
    setIconSB("");
    setContent("");
  };

  const handleinfo = (message, type) => {
    switch (type) {
      case 'success':
        openSB(message, "success", "成功", "check");
        break;
      case 'info':
        openSB(message, "info", "信息", "info");
        break;
      case 'warning':
        openSB(message, "warning", "警告", "warning");
        break;
      case 'error':
        openSB(message, "error", "错误", "error");
        break;
      default:
        break;
    }
  };

  const rendersSB = (
    <MDSnackbar
      color={color}
      icon={icon}
      title={title}
      content={conTent}
      dateTime="1s ago"
      open={sSB}
      onClose={closeSB}
      close={closeSB}
      bgWhite
    />
  );

  return {
    handleinfo,
    rendersSB
  };
};

export default Notis;

//使用举例，先import,然后初始化变量，然后使用和界面显示渲染
// import React from "react";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Notis from "examples/Notis/notifyinfo";
// const MyComponent = () => {
//     const { handleinfo, rendersSB } =Notis();
//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//     <div style={{ display: "flex", justifyContent: "flex-start" }}>
//       <button style={{ marginRight: "20px" }} onClick={()=>{handleinfo("测试","success")}}>显示成功消息</button>
//       {rendersSB}
//       <button style={{ marginRight: "20px" }} onClick={()=>{handleinfo("测试","info")}}>显示信息消息</button>
//       {rendersSB}
//       <button style={{ marginRight: "20px" }} onClick={()=>{handleinfo("测试","warning")}}>显示警告消息</button>
//       {rendersSB}
//       <button onClick={()=>{handleinfo("测试","error")}}>显示错误消息</button>
//       {rendersSB}
//     </div>
//     </DashboardLayout>
//   );
// };
  // export default MyComponent;