import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newWord } from "../redux/word/wordAction";
import getRandomLine from "../utils/wordchooser";
import * as Icon from "react-bootstrap-icons";
import { Modal } from "react-bootstrap";

const TopBar = () => {
  const dispatch = useDispatch();

  dispatch(newWord(getRandomLine()));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="top-bar">
        <div></div>
        <div>
          <h2>ORDLEIK</h2>
        </div>
        <div>
          <Icon.BarChart className="stats" onClick={() => {handleShow()}}></Icon.BarChart>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
       
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default TopBar;
