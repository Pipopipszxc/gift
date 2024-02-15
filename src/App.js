import './App.css';
import sound from './perfect.mp3'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'

function App() {

function doThis(){
  new Audio(sound).play()
}



  return (
    <div id="container">
      <div className='card' >
        <div className="img"><img src={pic2} /></div>
        <div className="content"> <h2>Click po</h2> <p>I love you future asawa ko!, Happy Anniversary! I'm sorry if minsan dimo maramdaman na love kita, hindi kasi me marunong magpakita ng love masyado, pero tandaan mo po lagi na mahal na mahal kita </p></div>
      </div>  
      <div className='card'>
        <div className="img"><img src={pic3}/> </div>
        <div className="content"><h2>Click po</h2> <p>Lagi ako pinagbibigyan ng Panginoong kong Diyos at Panginoon kong si Jesu-Cristo. Natupad nanaman prayer ko na sana maka anib ka sa Iglesia. Sayo din may hiling ako sana magstay ka sa Iglesia.</p></div>
      </div>   
      <div className='card'>
        <div className="img"> <img src={pic1}  /></div>
        <div className="content"><h2>Click po</h2> <p>Salamat sa pagaalaga mo saakin and sa pag iintindi kahit minsan parang bata ako na mahirap pagsabihan and bawalan po, I love you super duper! Oo nga pala sayang nagerror huhu so umulit ako sa pag gawa so rush ko na nagawa to para makahabol sa date. Dipako masyado maalam mag react and sorry po pero sana maapreciate mo padin. I love you!</p></div>
      </div>       
    </div>
  );
}

export default App;
