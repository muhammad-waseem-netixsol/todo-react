import { useState } from "react";
import "../list/Todo.css";
const Form = (props) => {
    const [heading, setHeading] = useState("");
    const [details, setDetails] = useState("");
    const [headingIsValid, setHeadingIsValid] = useState(true);
    const [detailsIsValid, setDetailsIsValid] = useState(true);

    // on heading field change
    const onHeadingChange = (e) => {
        setHeading(e.target.value);
        if(heading.trim() !== ""){
            setHeadingIsValid(true);
        }
    };
    // on details change
    const onDetailsChange = (e) => {
        setDetails(e.target.value);
        if(details.trim() !== ""){
            setDetailsIsValid(true);
        }
    };
    // on add new todo
    const onAddNewTodoHandler = () => {
       if(heading === ""){
        setHeadingIsValid(false);
       }else if(details === ""){
        setDetailsIsValid(false); 
       }else{
       props.addNewTodo({
        heading,
        details,
        done: false
       });
       setDetails("")
       setHeading("");
    }
    };
    return <form className={`block w-full p-2 shadow-lg rounded-lg`}>
        <input value={heading} onChange={onHeadingChange} className={`my-2 block w-full bg-card rounded border ${headingIsValid ? "border" : "border-red-500  text-red-500"} outline-none py-3 pl-3 font-bold`} type="text" placeholder={`${headingIsValid ? "Todo heading..." : "Heading is neccessary"}`} />
        <input value={details} onChange={onDetailsChange} className={`my-2 block w-full bg-card rounded border ${detailsIsValid ? "border" : "border-red-500  text-red-500"} outline-none py-3 pl-3 font-bold`} type="text" placeholder="Todo Details..." />
        <input onClick={onAddNewTodoHandler} className="block w-full rounded border-none outline-none py-3 my-4 font-medium bg-todo text-white hover:opacity-75 cursor-pointer" type="button" value="ADD TODO" />
    </form>
};

export default Form;