
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




function Tables() {
  const { columns, rows } = authorsTableData();

  const handleAddButtonClick = () => {
    
    return <NotificationItem
      icon={<Icon fontSize="small">email</Icon>}
      title="Check new messages"
    />
  };
  const handleImportButtonClick = () =>{
     <MDAlert>导入成功</MDAlert>
  };
  const handleExportButtonClick = () =>{
     <MDAlert>导出成功</MDAlert>
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={1} >
        <Grid item xs={12} md={6} lg={1}>
          <MDBox mb={1}><MDButton variant="gradient" size="large" color="secondary" circular={true} onClick={handleAddButtonClick} fullWidth> 新增用例</MDButton></MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={1}>
          <MDBox mb={1}><MDButton variant="gradient" size="large" color="secondary" circular={true} onClick={handleImportButtonClick} fullWidth>导入用例</MDButton></MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={1}>
          <MDBox mb={1}><MDButton variant="gradient" size="large" color="secondary" circular={true} onClick={handleExportButtonClick} fullWidth>导出用例</MDButton></MDBox>
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
