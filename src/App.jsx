
// Components
import FAQ from "./Components/FAQ";
import Header from "./Components/Header";

// Hooks
import { useState } from "react";

// Data
import { faqData } from "./data";

const App = () => {
  const [questions, setQuestions] = useState(faqData);
  
const sayHello = (index) => {
  

  const questionsClone = [...questions];
  const clickedItem = questionsClone[index];
  clickedItem.show = !clickedItem.show;

  setQuestions(questionsClone);

}


 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins ">
      <div className="w-[500px] rounded-xl bg-white shadow-lg">
        <Header />
        <FAQ faqClick = {sayHello}
        questions = {questions}
        
        />
      </div>
    </div>
  );
};

export default App;

