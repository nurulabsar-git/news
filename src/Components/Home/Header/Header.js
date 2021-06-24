import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '155px',
      right: 'auto',
      width: '310px',
      height: '100vh' ,
      boxShadow: '6px 6px 12px gray',
      borderRadius: '17px',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');
const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <div style={{borderRadius: '5px'}}> <button onClick={openModal}><i style={{ width: '50px'}} className="fa fa-align-center" aria-hidden="true"></i></button></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div style={{float: 'right', paddingBottom: '40px', paddingTop: '0'}}>
       <button  onClick={closeModal} style={{ border: 'none', paddingTop: '10px'}}><i class="fa fa-times" aria-hidden="true"></i></button>
       </div>
        <div style={{marginTop: '50px'}}>
        <form>
          <Link to="/" className="text-decorations">
          <li className="list-none border-b-8"> Home</li>
          </Link>
          <Link to="/delete" className="text-decorations">
          <li className="list-none border-b-8">Delete</li>
          </Link>
          <Link to="/" className="text-decorations">
          <li className="list-none border-b-8">Blogs</li>
          </Link>
          <Link to="/admin" className="text-decorations">
          <li  className="list-none border-b-8">Admin</li>
          </Link>
        </form>
        </div>
      </Modal>
        </div>
    );
};

export default Header;