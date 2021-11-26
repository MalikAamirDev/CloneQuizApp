import { Quiz } from ".";

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  
  export default function AppRouter() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Quiz />}/>
          </Routes>
        </div>
      </Router>
    );
  }