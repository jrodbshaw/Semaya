import React from "react";
import { connect } from "react-redux";
// * styles and components
import "./cart-dropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButtom";
import CartItem from "../cart-item/CartItem";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropDown);
