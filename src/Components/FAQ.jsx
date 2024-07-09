
// Components
import ListItem from "./ListItem";

const FAQ = (props) => {

  return (
    <div className="p-10">
      <ul>
       {props.questions.map((item,index, array) => (
        <ListItem listItemClick = { () => props.faqClick(index) }
         item = {item} />
      
       )) }
      </ul>
    </div>
  );
};

export default FAQ;
