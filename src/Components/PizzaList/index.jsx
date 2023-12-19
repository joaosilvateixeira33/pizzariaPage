// PizzaList.jsx
import styles from "../PizzaList/pizzaStyle.module.scss";
import { CardPizza } from "../PizzaList/CardPizzas/index";
import { CartModal } from "../CartModal";

export const PizzaList = ({ pizzas, cartList, setCartList }) => {
  return (
    <div className={styles.divMod}>
      <ul className={styles.containerCard}>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            pizza={pizza}
            cartList={cartList}
            setCartList={setCartList}
          />
        ))}
      </ul>
      <CartModal cartList={cartList} />
    </div>
  );
};
