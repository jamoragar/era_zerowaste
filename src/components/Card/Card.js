import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles);

export default function CardItem(props) {
    const classes = useStyles();
    const { img, title, description, price, orders, setOrders } = props;

    const order = {
        title: title,
        description: description,
        price: price
    };

    const addToOrder = () => {
        console.log(order)
        setOrders([...orders, order])
    }

    return (
        <Card className={classes.card + " " + classes.cardProduct + " " + classes.cardPlain}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="375"
                image={'https://walyou.com/wp-content/uploads//2010/03/gmail-soap-image-thumb-300x170.jpg'}
                title="Contemplative Reptile"
            />
            <CardContent>
                <div className={classes.cardTitle}>
                    {title}
                </div>
                <p className={classes.cardDescription}>
                    {description}
                </p>
            </CardContent>
            <CardActions className={classes.footer}>
                <div className={classes.priceContaine}>
                    <div className={classes.price}>
                        $9.990
                    </div>
                </div>
                <div style={{marginLeft: "auto", marginRight: "20px"}}>
                    <Button
                        id={title}
                        color="era"
                        size="sm"
                        onClick={() => addToOrder()}
                    >
                        <i className="fas fa-shopping-cart" />
                        Comprar
                    </Button> 
                </div>
            </CardActions>
        </Card>
    );
}