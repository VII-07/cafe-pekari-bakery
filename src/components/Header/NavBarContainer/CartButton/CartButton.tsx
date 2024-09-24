import { CartButtonStyled } from "./CartButtonStyled";
import CartImg from "../../../../assets/3643737_cart_drop_shop_shopping_trolly_icon 1.svg";

const CartButton = () => {
    const cartItemCount = 2; // приклад кількості товарів
  
    return (
      <CartButtonStyled>
        <img src={CartImg} alt="cart" />
        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
      </CartButtonStyled>
    );
  };
  
  export default CartButton;