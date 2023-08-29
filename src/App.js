import "./App.css";
import Question_1 from "./components/Question_1";
import Question_2 from "./components/Question_2";
import Question_3 from "./components/Question_3";

function App() {
  return (
    <div className="row">
        <div className="col-12">
          <div className="fw-sb">{"Your ID: 201370148 "}</div>
          <div>{"Your Name: Muhammad Rizwan"}</div>
        </div>
      <div className="col-12">
        {/*<Question_1/>*/}
        { /*<Question_2/> */}
        {<Question_3/> }
      </div>
    </div>
  );
}

export default App;
