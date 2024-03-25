import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard component
import Projects from "layouts/dashboard/components/Projects";

function Dashboard() {

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
                count={281}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="接口总数"
                count="300"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="接口自动化覆盖率"
                count="34 %"
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
