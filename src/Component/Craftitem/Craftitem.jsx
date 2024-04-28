import { useEffect, useState } from "react";
import Craftiteminfo from "../Craftiteminfo/Craftiteminfo";


const Craftitem = () => {

    const [craftitem, setcraftitem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/craftlist')
            .then(res => res.json())
            .then(data => setcraftitem(data));
    }
        , [])


    return (
        <div className="mb-10">
            <div className="mb-5">
                <h1 className="text-center text-5xl font-bold">Craftsmans Corner</h1>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-2 gap-4">
                {
                    craftitem.map(craft => <Craftiteminfo  craft={craft} key={craft._id}></Craftiteminfo>)
                }
            </div>
        </div>
    );
};

export default Craftitem;