import React from "react";
// * styles and components
import "./cart-dropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButtom";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
