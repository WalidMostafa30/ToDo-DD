import { useDispatch } from "react-redux";
import "./Inputs.css";
import { useEffect, useRef, useState } from "react";
import { addPost } from "../../rtk/DD-ToDo-List";
import toast from "react-hot-toast";

const Inputs =()=> {
  const [input, setInput] = useState("");
  const inpt = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inpt.current.focus();
  }, []);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const postData = () => {
    const postdata = {
      id: `${Math.random()}`,
      content: input,
    };
    dispatch(addPost(postdata));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      postData();
      setInput("");
      inpt.current.focus();
    } else {
      toast.error("Enter any task to post 😡");
    }
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <input
        ref={inpt}
        className="form__input"
        placeholder="Add Some Tasks..."
        onChange={onChangeHandler}
        value={input}
      />
      <button className="form__btn">Post</button>
    </form>
  );
}

export default Inputs