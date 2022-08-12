
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Card from './Card/Card'

function App() {
  const [guns, setGuns] = useState([]);
  // console.log(setGuns); //prothome evabe run korle empty arr dbe 
  //initial value empty arr na dile undefined dibe tokhn porer line gula thik mto exicute hbe na , agei map korar try krbe
  console.log(guns) //console.log hochee
  const [cart, setCart] = useState([])
  console.log(cart);
  // const handleAddToCart = (id) => {
  //   console.log(id); //add to cart e click korle showing
  // }
  const handleAddToCart = (gun) => {
    console.log(gun); //add to cart e click korle showing
    const newCart = [...cart, gun];
    console.log(newCart)
    setCart(newCart) //sudhu click korr por show hochee
  }
  useEffect(() => {
    //fetch er place e data.json  dileo hbe 
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
      .then(res => res.json())
      .then((data) => setGuns(data));
  }, [])
  //ei empty arr ke useeffect er dependency array bole
  //prothom bar load hobar por jottuk load hy and jottuk dekhae etake bole initial render
  //enfinity loop theke bachar jnno ei empty arr dewa hy, ei kaj korle initial render er pore just ekbar run hbe 
  //set guns ke call kore data take guns er modhe set kore dsi

  return (
    <div className="App">
      {/* ekhane grid dile jhamela hye jabe tai puro jinsh ta ekta div er modhe apply krbo */}

      <Navbar></Navbar>
      <div>
        {
          cart.map((item) => <h1 key={item.id}>{item.name}</h1>)
        }
      </div>

      {
        // guns.map(gun => console.log(gun))
        // guns.map(gun => console.log(gun.name))
        //row js likhle evabe second braket er modhe likhbo
        //inspact e shob guns dekhachee
      }
      {/* {
        guns.map((gun) => <h2 key={gun.id}>{gun.name} </h2>)
        //react e template string dewa lagena 
        //key dile error dibena 

      } */}
      <div className='card-container'>
        {
          guns.map((gun) => <Card key={gun.id} gunData={gun} handleAddToCart={handleAddToCart}></Card>)
          //react e template string dewa lagena 
          //key dile error dibena 

        }
      </div>
    </div>
  );
}

export default App;
