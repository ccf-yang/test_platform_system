import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the Configurator
import ConfigAddCase from "./data/ConfigAddCase";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setAddCase
} from "context";

function Addcasepanel() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    addCase
  } = controller;
  

  const handleCloseConfigurator = () => setAddCase(dispatch, false);
 

  return (
    <ConfigAddCase variant="permanent" ownerState={{ addCase }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDBox>
          <MDTypography variant="h5">新增测试用例</MDTypography>
        </MDBox>

        <Icon
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: "info",
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </MDBox>

    </ConfigAddCase>
  );
}

export default Addcasepanel;
