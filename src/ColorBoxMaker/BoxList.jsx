import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"
import { v4 as uuidv4 } from 'uuid';


const BoxList = () => {
    
const [boxes, setBoxes] = useState([]);

function addBox(newBox) {
    setBoxes(boxes => [...boxes,{ ...newBox,id: uuidv4()}])
}
return (
        <div>
            <h3>Create a Box</h3>
            <NewBoxForm addBox={addBox} />
            <div>
               {boxes.map(({ id, color, height, width, borderRadius }) => <Box id={id} color={color} height={height} width={width} borderRadius={borderRadius} key={id}/> )} 
            </div>
        </div>
    )
}
export default BoxList;