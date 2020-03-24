import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import CardItem from "../Card/Card";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function Products(props) {
  const classes = useStyles();
  const {state, dispatch } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nuestros productos</h2>
          <h5 className={classes.description}>
            Estamos enfocado en acercar a la comunidad productos que no dañen ni contaminen el medio ambiente, a los animales no humanos ni a nuestro organismo. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CardItem title={'Producto 1'} description={'asdasdasdasdsad'} orders={state.order} dispatch={dispatch} />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardItem title={'Producto 2'} description={'asdasdasdasdsad'} orders={state.order} dispatch={dispatch} />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardItem title={'Producto 3'} description={'asdasdasdasdsad'} orders={state.order} dispatch={dispatch} />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardItem title={'Producto 4'} description={'asdasdasdasdsad'} orders={state.order} dispatch={dispatch} />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardItem title={'Producto 5'} description={'asdasdasdasdsad'} orders={state.order} dispatch={dispatch} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
