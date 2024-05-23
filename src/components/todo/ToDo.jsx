/* eslint-disable react/prop-types */
import { useState } from "react";
import EditTask from "../editTask/EditTask";
import { Draggable } from "react-beautiful-dnd";
import "./ToDo.css";
import { useDispatch } from "react-redux";
import { removePost } from "../../rtk/DD-ToDo-List";

export default function ToDo({ tsk, index, droppableId }) {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();

  const toggleEditHandle = () => {
    setOpenEdit(!openEdit);
  };
  return (
    <>
      <Draggable key={tsk.id} draggableId={tsk.id} index={index}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="ToDo"
          >
            <p className="ToDo__content">{tsk.content}</p>

            <span
              className="ToDo__btn ToDo__btn--delete"
              onClick={() =>
                dispatch(removePost({ DRid: droppableId, id: tsk.id }))
              }
            >
              🗑
            </span>
            <span
              className="ToDo__btn ToDo__btn--edit"
              onClick={toggleEditHandle}
            >
              🖊
            </span>
          </div>
        )}
      </Draggable>
      {openEdit && (
        <EditTask
          toggleEditHandle={toggleEditHandle}
          droppableId={droppableId}
          id={tsk.id}
          content={tsk.content}
        />
      )}
    </>
  );
}
