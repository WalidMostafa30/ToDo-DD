/* eslint-disable react/prop-types */
import "./editTask.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../rtk/DD-ToDo-List";
import toast from "react-hot-toast";

const EditTask = ({ toggleEditHandle, droppableId, id, content }) => {
  const dispatch = useDispatch();

  const [editContent, seteditContent] = useState(content.trim());

  const onChangeEditContent = (e) => {
    seteditContent(e.target.value);
  };

  const submitEditHandler =(e)=> {
    e.preventDefault();
    if (editContent.trim().length > 0) {
      dispatch(editPost({ content: editContent, DRid: droppableId, id }));
      toggleEditHandle();
    } else {
      toast.error("Enter any task 😠");
    }

    if (
      content.trim() !== editContent.trim() &&
      editContent.trim().length > 0
    ) {
      toast.success("Task Updated 😊");
    } else {
      toast.error("The Task has not Changed 😕");
    }
  }

  const enterHandler =(e)=> {
    if (e.key === "Enter") {
      submitEditHandler(e);
    }
  }

  return (
    <div className="Edit-Task">
      <form className="Edit-Task__form" onSubmit={submitEditHandler}>
        <textarea
          onChange={onChangeEditContent}
          value={editContent}
          onKeyDown={enterHandler}
        />
        <div className="Edit-Task__btns">
          <button className="Edit-Task__btn Edit-Task__btn--edit">Edit</button>
          <button
            className="Edit-Task__btn Edit-Task__btn--close"
            type="button"
            onClick={toggleEditHandle}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask