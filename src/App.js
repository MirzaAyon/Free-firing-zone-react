
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Card from './Card/Card'
import Modal from 'react-modal';

//custom style for react modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
//index.html e noscript e div e root element er modhe add hochee tai eke root kore dilam

function App() {
  const [guns, setGuns] = useState([]);
  // console.log(setGuns); //prothome evabe run korle empty arr dbe 
  //initial value empty arr na dile undefined dibe tokhn porer line gula thik mto exicute hbe na , agei map korar try krbe
  console.log(guns) //console.log hochee
  const [cart, setCart] = useState([])
  console.log(cart);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  //use state es pashe react er part ta baad dsi
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

      <Navbar cart={cart} openModal={openModal}></Navbar>

      {/* <div>
      {
          cart.map((item) => <h1 key={item.id}>{item.name}</h1>)
        }
      </div> */}
      {/* ei jinish ta ui te na dekhae modal er peter vitore dekhabo */}

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
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Close</button>
        <h1>
          <div>
            {
              cart.map((item) => <h1 key={item.id}>{item.name}</h1>)
            }
          </div>
          {/* select kore click korle ui te modal akare show hochee */}
        </h1>
      </Modal>
    </div>
  );
}

export default App;
