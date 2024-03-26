import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import logoCLOUD from "assets/images/project_logos/cloud.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "项目名称", accessor: "project_name", width: "25%", align: "left" },
      { Header: "项目研发", accessor: "develop", width: "10%", align: "left" },
      { Header: "测试负责人", accessor: "test", align: "center" },
      { Header: "创建日期", accessor: "createtime", align: "center" },
    ],

    rows: [
      {
        project_name: <Company image={logoCLOUD} name="GPU CLOUD" />,
        // project_name: <Company  name="GPU CLOUD" />,
        develop: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "夏目"],
              [team2, "万叶"],
              [team3, "..."],
            ])}
          </MDBox>
        ),
        test: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            可莉，汤姆
          </MDTypography>
        ),
        createtime: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2024/3/25
          </MDTypography>
        ),
      },
      {
        project_name: <Company image={logoCLOUD} name="INFRA" />,
        develop: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "夏目"],
              [team2, "万叶"],
              [team3, "..."],
            ])}
          </MDBox>
        ),
        test: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            竹清
          </MDTypography>
        ),
        createtime: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2024/3/25
          </MDTypography>
        ),
      },
      {
        project_name: <Company image={logoCLOUD} name="ECDN" />,
        develop: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "夏目"],
              [team2, "万叶"],
              [team3, "..."],
            ])}
          </MDBox>
        ),
        test: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            阿斯兰
          </MDTypography>
        ),
        createtime: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2024/3/25
          </MDTypography>
        ),
      }
    ],
  };
}
