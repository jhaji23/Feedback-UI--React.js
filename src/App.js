import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import InputForm from "./components/InputForm";

function App() {
  const [data, setData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    setData([newFeedback, ...data]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="head">
                <Header title="Feedback UI"></Header>
              </div>

              <div className="container">
                <Link to="/about"><h2 className="aboutt">About</h2></Link>
                <InputForm handleAdd={addFeedback} />

                <FeedbackStats data={data}></FeedbackStats>

                <FeedbackList data={data} handleDelete={deleteFeedback} />
              </div>
            </>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
