import React from "react";
import { connect } from "react-redux";
// * redux
import { selectCartItems } from "../../redux/cart/cart.selectors";
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

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropDown);
