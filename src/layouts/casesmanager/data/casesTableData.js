import MDTypography from "components/MDTypography";

export default function data() {
  const edit= (
    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      编辑
    </MDTypography>
  )

  return {
    columns: [
      { Header: "所属项目", accessor: "project",  align: "center" },
      { Header: "产品模块", accessor: "product", align: "center" },
      { Header: "标题", accessor: "title", align: "center" },
      { Header: "操作步骤", accessor: "step", align: "center" },
      { Header: "预期结果", accessor: "preresult", align: "center" },
      { Header: "用例级别", accessor: "level", align: "center" },
      { Header: "执行人", accessor: "runner", align: "center" },
      { Header: "测试结果", accessor: "result", align: "center" },
      { Header: "动作", accessor: "action", align: "center" },
      { Header: "备注", accessor: "mark", align: "center" },
    ],

    rows: [
      {
        project: "GPU CLOUD",
        product: "网络存储",
        title: "新增网络存储",
        step: "点击网络存储，点击新增，填写存储名称，填写存储大小，选择存储集群，点击确定",
        preresult: "创建成功",
        level: "p0",
        runner: "tom",
        result: "运行符合预期",
        action: edit,
        mark: "",
      },
      {
        project: "GPU CLOUD",
        product: "网络存储",
        title: "查询网络存储",
        step: "点击网络存储，点击查询框，输入存储名称，点击查询",
        preresult: "查询成功",
        level: "p1",
        runner: "tom",
        result: "运行符合预期",
        action: edit,
        mark: "",
      },
      {
        project: "GPU CLOUD",
        product: "网络存储",
        title: "删除网络存储",
        step: "点击网络存储，点击编辑，点击删除",
        preresult: "删除成功",
        level: "p0",
        runner: "tom",
        result: "运行符合预期",
        action: edit,
        mark: "",
      }
    ],
  };
}
