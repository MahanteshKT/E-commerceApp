import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";
import context from "../../../store/Context";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModelOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const PortalElement = document.getElementById("overlay");

const Model = (props) => {
  const ctx = useContext(context);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          onClick={(e) => {
            e.preventDefault();
            ctx.onshowCart();
          }}
        />,
        PortalElement
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          onClick={(e) => {
            e.preventDefault();
            ctx.onshowCart();
          }}
        >
          {props.children}
        </ModelOverlay>,
        PortalElement
      )}
    </React.Fragment>
  );
};

export default Model;
