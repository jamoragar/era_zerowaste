import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    container: props => ({
        position: "fixed",
        right: "0px",
        top: "60px",
        width: "340px",
        backgroundColor: "white",
        height: "calc(100% - 48px)",
        zIndex: "10",
        boxShadow: "4px 0px 5px 4px grey",
        display: "flex",
        flexDirection: "column",
        transition: "0.4s",
        transform: `${props.openCart ? 'translateX(100%)' : 'translateX(0)'}`
    }),
    title:{
        padding: "20px",
        height: "100%"
    },
    checklist:{
        backgroundColor: "#41bab4",
        width: "50px",
        height: "50px",
        color: "#ffffff",
        textAlign: "center",
        position: "absolute",
        top: "15px",
        left: "-55px",
        cursor: "pointer",
        borderRadius: "25px"
    },
    cart:{
        lineHeight: "75px",
    },
    x:{
        lineHeight: "50px",
        fontWeight: "700",
        fontSize: "22px"
    },
    bag__quantity: {
        bottom: "5px",
        right: "10px",
        display: "inline-block",
        width: "18px",
        height: "18px",
        color: "#0c0b10",
        fontWeight: "bold",
        fontSize: "0.7em",
        textAlign: "center",
        lineHeight: "18px",
        borderRadius: "50%",
        backgroundColor: "#eabf00",
        position: "absolute",
        bottom: "-5px",
        right: "0px"
      }
}

const useStyles = makeStyles(styles);

const ChecklList = (props) => {

    const {openCart, setOpenCart, orders, setOrders} = props
    const classes = useStyles(props);

    useEffect(() =>{
        orders.length === 0 ? setOpenCart(true) : setOpenCart(false)
    }, [orders.length]);

    return (
        <div className={classes.container}>
            <div onClick={()=>{setOpenCart(!openCart)}} className={`${classes.checklist} ${openCart ? classes.cart : classes.x}`}>
                {openCart ? (
                    <div>
                        <img className="shopping-cart" src={require('./bag-icon.png')} alt="ERA zero waste"/>
                        <span className={orders.length > 0 ? classes.bag__quantity : ''}>{orders.length > 0 ? orders.length : null}</span>
                    </div>
                )
                :
                'X'}
            </div>
            {orders.length === 0 ? (
                <div className={classes.title}>Su carro esta vacío</div>
            )
            :
            (
                <div>
                    <div className={classes.title}>Su pedido: </div>
                    {
                        orders.map((order, index) => (
                            <div>
                                <h1>{order.title}</h1>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default ChecklList;