import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from 'containers/home';
import Header from 'layout/header';
import Signup from "containers/signup";
import List from "containers/list";

function App() {
  return (
    <div>
      <body>
        {/* <Layout /> */}
        <div className="font-universal550">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </Router>
        </div>
      </body>
    </div>
  );
}

export default App;
