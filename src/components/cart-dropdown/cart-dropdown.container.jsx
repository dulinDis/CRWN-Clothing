import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors.js';
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

const CartDropdownContainer = compose(withRouter,connect(mapStateToProps))(CartDropdown);
export default CartDropdownContainer;