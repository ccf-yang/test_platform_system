import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard component
import Projects from "layouts/dashboard/components/Projects";


function Dashboard() {
    const total_func=281
    const zdh_api=90
    const total_api=300
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {/* grid是横向布局，总共长度是12，设置为12就是整行的宽度 */}
          {/* spacing={3} 表示网格项之间的水平和垂直间距均为 3 个单位 */}
          <Grid item xs={12} md={6} lg={3}>
            {/* 表示在不同屏幕尺寸下的布局设置,总共不是横向大小是12，即在小屏幕下xs占据整行，中等屏幕md下占据一半宽度，大屏幕下lg占据四分之一宽度 */}
            <MDBox mb={1.5}>
              {/* 在底部添加 1.5 个单位的外边距 */}
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="功能用例总数"
                count={total_func}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="web_asset"
                title="接口已自动化个数"
                count={zdh_api}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="接口总数"
                count={total_api}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="接口自动化覆盖率(%)"
                count= {zdh_api/total_api*100} 
              />
            </MDBox>
          </Grid>
        </Grid>
        
        <MDBox mt={9.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Projects />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>

    </DashboardLayout>
  );
}

export default Dashboard;
