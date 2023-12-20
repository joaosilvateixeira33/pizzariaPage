import React from "react";
import styles from "../cart.module.scss";

export const CartItemCard = ({ pizza, cartList, setCartList }) => {
  const handleDelete = () => {
    const cartFiltered = cartList.filter((item) => item.id !== pizza.id);
    setCartList(cartFiltered);
    localStorage.removeItem(cartFiltered);
  };

  return (
    <li>
      <div className={styles.cardContainer}>
        <img src={pizza.image} alt={pizza.name} />
        <div className={styles.cardInfo}>
          <h3>{pizza.name}</h3>
          <span>R$ {pizza.price}</span>
          <p>Size: {pizza.size}</p>
        </div>
        <button
          aria-label="delete"
          title="Remover item"
          onClick={handleDelete}
          className={styles.deleteBtn}
        >
          <i class="bi bi-trash-fill"></i>
        </button>
      </div>
    </li>
  );
};
