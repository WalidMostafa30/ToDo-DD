import "./Boxs.css";
import Box from "../box/Box";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { swipePost } from "../../rtk/DD-ToDo-List";

export default function Boxs() {
  const columns = useSelector((state) => state.To_Do);
  const dispatch = useDispatch();

  const onDradEndHandle = (result) => {
    const { source, destination } = result;
    dispatch(swipePost({ source, destination }));
  };

  return (
    <DragDropContext onDragEnd={onDradEndHandle}>
      <div className="Boxs">
        {columns.map((col) => (
          <Box key={col.id} col={col} />
        ))}
      </div>
    </DragDropContext>
  );
}
