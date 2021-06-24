import React from "react";
import {CartIconContainer,ShoppingIcon,ItemCountContainer} from './cart-icon.styles';
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import {selectCartItemsCount}  from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector( {
  itemCount: selectCartItemsCount
});

const mapDispatchtoProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(CartIcon);
