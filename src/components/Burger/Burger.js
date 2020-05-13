// This is just a collection of ingredients types

import React from "react";
import styled from "styled-components";
import Ingredients from "./Ingredients/Ingredients";

const Burger = (props) => {
  // const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
  //   return [Array(props.ingredients[igKey])].map((value) => {
  //     return <Ingredients key={igKey + value} type={igKey} />;
  //   });
  // });

  const transformedIngredients = []; //empty array

  for (let key in props.ingredients) {
    for (let i = 0; i < props.ingredients[key]; i++) {
      transformedIngredients.push(<Ingredients type={key} />);
    }
  }

  return (
    <BurgerDiv>
      <Ingredients type="bread-top" />
      {transformedIngredients}
      <Ingredients type="bread-bottom" />
    </BurgerDiv>
  );
};

export default Burger;

const BurgerDiv = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;
