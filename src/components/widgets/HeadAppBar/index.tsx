import {useEffect, useState} from 'react'
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon, ShoppingCart as ShoppingCartIcon } from "@material-ui/icons";
import styles from "./index.module.scss";
const HeadAppBar = (props: any) => {
  const [cartItemsCount,setCartItemsCount]=useState<number>(0)
  useEffect(()=>{
    if(typeof props.carts?.carts?.length==='number')  {
      setCartItemsCount(props.carts.carts.length)
    }
  }, [props.carts])
  return (
      <div className={styles.headAppBarbackground}>
        <AppBar position="fixed">
          <Toolbar>
                <IconButton
                  onClick={() => {}}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">Shopping Cart App</Typography>
                <div className={styles.cart}>{cartItemsCount} items</div>
                <ShoppingCartIcon className={styles.cartIcon} />
                <Button className={styles.checkoutBtn} onClick={()=>{}}>Checkout</Button>
               
          </Toolbar>
        </AppBar>
      </div>
  );
};
const mapStateToProps = ({ carts }:any) => ({
  carts: carts
});
export default connect(mapStateToProps, {  })(HeadAppBar);
