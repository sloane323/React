import { useParams } from "react-router-dom";
const BoardId = () => {
    const {id} = useParams();
    return ( 
        <div>
            <p>{id}</p>
        </div>
     );
}
 
export default BoardId;