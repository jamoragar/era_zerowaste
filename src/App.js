import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from './components/Header/Header';
import HeaderLinks from './components/Header/HeaderLinks';
import Parallax from "./components/Parallax/Parallax";
import GridContainer from "./components/Grid/GridContainer";
import GridItem from './components/Grid/GridItem';
import Button from './components/CustomButtons/Button';
import Footer from "./components/Footer/Footer.js";
import CheckList from "./components/CheckList/CheckList";

//Vistas
import Products from "./components/Products/Products";
//Hooks
import {useCart} from "./hooks/useCart";
import {useOrders} from "./hooks/useOrders";

import styles from "./assets/jss/material-kit-react/views/landingPage";

const useStyles = makeStyles(styles);

function App(props) {
  const classes = useStyles();
  const openCart = useCart();
  const orders = useOrders();
  console.log(orders)
  return (
    <div className="App">
      <Header
        color="transparent"
        brand="ERA zero waste"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax filter image={require("./assets/img/background_page.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12}>
              <h1 className={classes.title}>ERA Tienda Online</h1>
              <h4 className={classes.text}>
                  Delivery <b>gratis</b> por todas las compras sobre $25.000!
                </h4>
                <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <CheckList {...openCart} {...orders} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Products {...orders} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
