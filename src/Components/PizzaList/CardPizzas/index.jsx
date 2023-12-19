import styles from "../../PizzaList/pizzaStyle.module.scss";
import { useEffect } from "react";

export const CardPizza = ({ pizza, cartList, setCartList }) => {
  useEffect(() => {
    // Carregar dados do localStorage na primeira renderização
    if (!localStorage.getItem("@cartList")) {
      return;
    }

    const storedCartList = JSON.parse(localStorage.getItem("@cartList"));
    setCartList(storedCartList || []);
  }, [setCartList]);

  const handleCart = () => {
    // Adicionar a pizza ao carrinho se não estiver presente
    const updatedCart = [...cartList, pizza];
    setCartList(updatedCart);

    // Atualizar o localStorage com o novo carrinho
    localStorage.setItem("@cartList", JSON.stringify(updatedCart));
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.itemContainer}>
        <img src={pizza.image} alt={pizza.name} />
        <h3>{pizza.name}</h3>
        <p className={styles.description}>{pizza.description}</p>
        <p className={styles.price}>$ {pizza.price.toFixed(2)}</p>
        <select name="" id="" className={styles.sizePizza}>
          <option value="regular">Regular</option>
          <option value="big">Big</option>
          <option value="small">Small</option>
        </select>
        <button className={styles.btnOrder} onClick={handleCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
