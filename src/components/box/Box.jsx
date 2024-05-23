/* eslint-disable react/prop-types */
import { Droppable } from "react-beautiful-dnd";
import ToDo from "../todo/ToDo";
import "./Box.css";

export default function Box({ col }) {
  return (
    <div className="Box" style={{ backgroundColor: col.color }}>
      <h2 className="Box__title">{col.title}</h2>
      <Droppable droppableId={col.id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="Box__todos"
            style={{
              backgroundColor: snapshot.isDraggingOver ? "#c0e5ba" : "white",
            }}
          >
            {col.items.length > 0 ? (
              col.items.map((tsk, index) => (
                <ToDo
                  key={tsk.id}
                  tsk={tsk}
                  index={index}
                  droppableId={col.id}
                />
              ))
            ) : (
              <h5 className="Box__msg-drop-here">
                Drop Here...
                <span>!</span>
              </h5>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
