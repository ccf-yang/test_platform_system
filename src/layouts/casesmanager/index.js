
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

// Data
import authorsTableData from "layouts/casesmanager/data/casesTableData";
//notify
import Notis from "examples/Notis/notifyinfo";

//新面板配置顺序1-
import { useMaterialUIController,setAddCase } from "context"; //1、从全局变量导入控制新增用例面板的开关setAddCase

function Tables() {

  const [controller, dispatch] = useMaterialUIController(); //2、获取全局变量和分发工具dispatch
  const {addCase} = controller;   //3、获取addCase全局变量

  const { columns, rows } = authorsTableData();
  const {handleinfo,rendersSB} = Notis();

  const handleAddButtonClick = () => {
    alert("s")
  };
  console.log(addCase);
  const handleConfiguratorOpen = () => setAddCase(dispatch, !addCase); //4、当点击后配置变量值改变从而显示新面板，新面板一定要导入到默认空间，不能是命名导入到命名空间
  //5、配置变量的值生效，要在APP.js中导入二面板，并且<xx />使用，由于变量默认值是fasle，引入不会显示
  //6、在5导入的配置中，引入具体的二面板，二面板中组件要封装在一个公共的渲染面板中，如：src/examples/custompanel/addcasepanel/index.js中组件拼凑，会渲染在src/examples/custompanel/addcasepanel/data/ConfigAddCase.js的二面板中
  const handleImportButtonClick = () =>{
    alert(addCase)
    alert(openConfigurator)
    handleinfo("导入成功","success")
  };
  const handleExportButtonClick = () =>{
    handleinfo("导出失败","error")
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={1} >
      <Grid item xs={12} md={6} lg={1}>
          <MDBox mb={1}><MDButton variant="gradient" size="medium" color="secondary" circular={true} onClick={handleConfiguratorOpen} fullWidth> 新增用例</MDButton></MDBox>
          {/* {rendersSB} */}
        </Grid>
        <Grid item xs={12} md={6} lg={1}>
          <MDBox mb={1}><MDButton variant="gradient" size="medium" color="secondary" circular={true} onClick={handleImportButtonClick} fullWidth>导入用例</MDButton></MDBox>
          {rendersSB}
        </Grid>
        <Grid item xs={12} md={6} lg={1}>
          <MDBox mb={1}><MDButton variant="gradient" size="medium" color="secondary" circular={true} onClick={handleExportButtonClick} fullWidth>导出用例</MDButton></MDBox>
          {rendersSB}
        </Grid>
      </Grid> 
      <MDBox pt={6} pb={3}>
        {/* 指定上边距（padding-top）和下边距（padding-bottom）的大小 */}
        <Grid container spacing={6}>
          {/* 指定了网格项之间的间距大小 */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  功能测试用例表
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  canSearch={true}
                  table={{ columns, rows }}
                  isSorted={true}
                  showTotalEntries={false}
                  entriesPerPage={{ defaultValue: 10, entries: [10, 20,50, 100] }}
                  noEndBorder={false}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
