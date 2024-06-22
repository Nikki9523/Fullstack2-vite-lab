import Programme from './components/programme'
import setuCrest from "./assets/setu_crest.png";
import './App.css'

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
      <header className="App-header">
        <img className="center" src={setuCrest} alt="logo" />
      </header>
      <div className="programme">
        <Programme title={name} modules={modules} />
      </div>
    </>
  )
}

export default App