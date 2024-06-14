import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllQuestion from "../Pages/allquestion";
import AskQuestion from "../Pages/askquestion";
import Home from "../Pages/Home";
import Question from "../Pages/question";

export default function AppRoute(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="questions" element={<AllQuestion />} />
        <Route path="askquestion" element={<AskQuestion />} />
        <Route path="question/:id" element={<Question />} />
    </Routes>
    </BrowserRouter>
    </>
}