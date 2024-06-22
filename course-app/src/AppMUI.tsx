import Programme from './components/programmeMUI';
import setuCrest from "./assets/setu_crest.png";
import Box from "@mui/material/Box";

const styles = {
  appHeader: {
    backgroundColor: "lightblue",
    height: "200px",
    padding: "10px",
    color: "white",
  },
  course: {
    padding: 2,
  },
};

const App = () => {
    const modules = [
        {
          name: "Web Dev",
          noLectures: 2,
          noPracticals: 2,
        },
        {
          name: "Devops",
          noLectures: 2,
          noPracticals: 3,
        },
        {
          name: "Programming",
          noLectures: 2,
          noPracticals: 2,
        },
        {
          name: "Security",
          noLectures: 2,
          noPracticals: 2,
        },
        {
          name: "FullStack 1",
          noLectures: 2,
          noPracticals: 3,
        },
      ];
      const name = "Hdip Computer Science";

  return (
    <>
      <header style={styles.appHeader}>
        <img src={setuCrest} alt="logo" />
      </header>
      <Box sx={styles.course}>
        <Programme title={name} modules={modules} />
      </Box>
    </>
  );
};
export default App;