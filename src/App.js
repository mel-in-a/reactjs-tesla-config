import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [price1, setPrice1] = useState(null);
  const [price2, setPrice2] = useState(null);

  return (
    <div>
      <Header />
      <div className="container">
    
      <div class="container-vertical">

        <div class="vehicle">
          <h2>Sélectionnez votre véhicule</h2>
          <div class="price1" onClick={() => setPrice1(90700)} style={{ backgroundColor: price1 === 90700 ? "rgb(186, 149, 221)" : ""}}>Grande autonomie - 90700 €</div>
          <div class="price2" onClick={() => setPrice1(106700)} style={{ backgroundColor: price1 === 106700 ? "rgb(186, 149, 221)" : ""}}>Performance - 106700 €</div>
        </div>
        <h2>Sélectionnez la couleur</h2>
        <div class="color">
          <div class="price3" onClick={() => setPrice2(0)} style={{ backgroundColor: price2 === 0 ? "rgb(186, 149, 221)" : ""}}>Blanc nacré multicouche - 0 € </div>
          <div class="price4" onClick={() => setPrice2(1000)} style={{ backgroundColor: price2 === 1000 ? "rgb(186, 149, 221)" : ""}}>Noir uni - 1000 €</div>
        </div>
        <div className="total" >{price1 + price2} € 
         {price1 + price2 > 0 ?   <span><button onClick={() => alert('Yeah, je roule en Tesla :)')}>Buy !</button></span> : ''}
      
        </div>
        
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
