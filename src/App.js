import { useEffect, useState } from 'react';
import './App.css'
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';
import Modal from 'react-modal';
import { IoMdCloseCircle } from 'react-icons/io';
import View from './View/View';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }



  console.log(cart);

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

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun]
    setCart(newCart);
  }

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])
  return (
    <div>
      <Navbar cart={cart.length} openModal={openModal}></Navbar>


      <div className='card-container'>
        {
          guns.map(gun => (
            <Card key={gun.id} gunData={gun} handleAddToCart={handleAddToCart}></Card>
          ))
        }
      </div>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <IoMdCloseCircle onClick={closeModal}></IoMdCloseCircle>
        <div>
          <View cart={cart}></View>
        </div>
      </Modal>
    </div>
  );
}

export default App;
