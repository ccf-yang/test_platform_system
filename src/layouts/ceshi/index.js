import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Notis from "examples/Notis/notifyinfo";



const MyComponent = () => {
    // 设置一个小盒子窗口来通知，smallSandBox=sSB
   
    const { handleinfo, rendersSB } =Notis();

  return (
    <DashboardLayout>
      <DashboardNavbar />
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <button style={{ marginRight: "20px" }} onClick={()=>{handleinfo("测试","success")}}>显示成功消息</button>
      {rendersSB}
      <button style={{ marginRight: "20px" }} onClick={()=>{handleinfo("测试","info")}}>显示信息消息</button>
      {rendersSB}
      <button style={{ marginRight: "20px" }} onClick={()=>{handleinfo("测试","warning")}}>显示警告消息</button>
      {rendersSB}
      <button onClick={()=>{handleinfo("测试","error")}}>显示错误消息</button>
      {rendersSB}
    </div>
    </DashboardLayout>
  );
};
  export default MyComponent;