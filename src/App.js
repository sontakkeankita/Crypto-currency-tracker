import { makeStyles } from "@material-ui/core";
import HomePage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter,Routes , Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/coins/:id" element={<CoinPage/>} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;