import { useState } from "react";
import App from "./App";

const NoteHandler = () => {
    const [note,setNote] = useState([]);

    const newNote = "Hello, future asawa, happy anniversary and I love you! Salamat sa buong taon na pag-alaga mo saakin. Kahit  minsan parang akong bata na mahirap bawalan at alagaan Sana maappreciate mo po ito. Love na love kita super. I'm sorry if minsan dimo maramdaman, hindi lang kasi talaga ako marunong magpakita ng pagmamahal, pero sana lagi mong tandaan na mahal na mahal kita future asawa ko!! Lagi akong pinagbibigyan at kinaawaan ng Panginoon na aking Diyos at ng Panginoon ko na si Jesu-Cristo sa mga hinihiling or panalangin ko. Isa na doon is yung matuloy kana maging kaanib sa Iglesia. Sayo din naman may hiling ako, sana kahit ano mangyare mag-stay ka lang sa Iglesia. Napakaswerte ko kasi naging isa ka sa mga blessings na binigay para saakin. Sobrang naappreciate ko din yung love mo. Oo nga pala sorry sa design neto, alam mo naman na hindi ako masyado marunong sa designing. Anyway po, lagi mong tandaan na mahal na mahal kita! And HAPPY ANNIVERSARY ulit.";

    function doThis(){
        setNote(newNote);
    }
    

    return (  
        <div>
            <App note={note} doThis={doThis}/>
        </div>
    );
}
 
export default NoteHandler;