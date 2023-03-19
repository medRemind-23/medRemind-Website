import React, { useRef, useContext } from "react";
import { AuthContext } from "./authProvider";
import { onAuthStateChanged } from "firebase/auth";
import Router from "./router/Router";

function Nav() {
  const { values } = useContext(AuthContext);
  if (values) {
    return true;
  } else {
    return false;
  }
}

export default Nav;
