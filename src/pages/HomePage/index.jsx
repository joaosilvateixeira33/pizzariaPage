import { CartModal } from "../../Components/CartModal";
import { Header } from "../../Components/Header/index";
import { Banner } from "../../Components/Banner/index";
import { Recommend } from "../../Components/Recommend/index";
import { PizzaList } from "../../Components/PizzaList/index";
import { Footer } from "../../Components/Footer/index";

import { useEffect, useState } from "react";
import { pizzas } from "../../data/pizzas";

export const HomePage = () => {
  const [cartList, setCartList] = useState([]);
  const [render, setRender] = useState(false);
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    // Simulação de uma chamada assíncrona para a API
    const fetchData = async () => {
      setPizzaList(pizzas);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header cartList={cartList} setRender={setRender} />
      <main>
        <CartModal
          cartList={cartList}
          setCartList={setCartList}
          render={render}
          setRender={setRender}
        />
        <Banner />
        <Recommend>
          <PizzaList
            pizzas={pizzaList}
            cartList={cartList}
            setCartList={setCartList}
          />
        </Recommend>
      </main>
      <Footer />
    </>
  );
};
