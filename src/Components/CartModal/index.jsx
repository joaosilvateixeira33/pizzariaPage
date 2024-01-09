import React from "react";
import { CartItemCard } from "./CartItemCard/index";
import styles from "./cart.module.scss";


export const CartModal = ({ cartList, setCartList, render, setRender }) => {
  const total = cartList.reduce((prevValue, pizza) => {
    return prevValue + pizza.price;
  }, 0);

  const deleteAll = () => {
    setCartList([]);
    localStorage.clear();
  };

  const closeModal = () => {
    setRender(false);
  };

  if (!render) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <div role="dialog" className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Carrinho de compras</h2>
          <button
            aria-label="close"
            title="Fechar"
            className={styles.modalClose}
            onClick={closeModal}
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div>
          <ul>
            {cartList.map((pizza) => (
              <CartItemCard
                key={pizza.id}
                pizza={pizza}
                cartList={cartList}
                setCartList={setCartList}
              />
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.modalFooter}>
            <hr />
            <div className={styles.totalPrice}>
              <p>Total </p>
              <span>
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button onClick={deleteAll} className={styles.removeAll}>
              Remover todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
