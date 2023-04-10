import React, { useState } from "react";
import Card from "./Card";

function Modal(props) {

    function hideModal (e){
      let target= e.target;
      if(target.id == 'modal')
       props.OnhideModal();
    }

    return (
        <div id="modal" onClick={props.hideModal} className={props.show ? 'modal' : ' hide'}>
          <Card className="cardModal"> {props.children}
          </Card>
        </div>

    )
}

export default Modal;