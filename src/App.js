import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import StudentList from "./components/StudentList";

//TODO: Get this value from .env
const API_URL = "http://localhost:8888";

function App() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("<App /> useEffect() fired");
    async function fetchData() {
      try {
        //Show the user that we're loading...
        setLoading(true);
        //You can await here
        const response = await fetch(`${API_URL}/students`);
        const json = await response.json();
        console.log("<App /> useEffect() feteched data", json);
        const { data, error } = json;
        console.log(response.status, response.ok);
        if (response.ok) {
          setStudentData(data);
          //Stop showing the user the loading UI
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        console.log(`App /> useEffect error: ${err.message}`);
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };

  console.log(
    `<App /> rendered! error = ${error} loading = ${loading} num students = ${studentData.length}`
  );

  return <div className="App">{renderContent()}</div>;
}

export default App;
