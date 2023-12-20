import styles from "../../PizzaList/pizzaStyle.module.scss";
import { useEffect } from "react";

export const CardPizza = ({ pizza, cartList, setCartList }) => {
  // const [selectedSize, setSelectedSize] = useState("regular");
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
        <p className={styles.price}>$ {pizza.price}</p>
        <select name="size" id="size" className={styles.sizePizza}>
          <option value="regular">{pizza.size[1]}</option>
          <option value="big">{pizza.size[2]}</option>
          <option value="small">{pizza.size[0]}</option>
        </select>
        <button className={styles.btnOrder} onClick={handleCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
