import { useState } from "react";
import {
  MenuContainer,
  HeadingMenu,
  Cards,
  Card,
  CardTitle,
  CardImage,
  CardPrice,
  ButtonWrapper,
} from "./Menu.element";
import { Button } from "../../globalStyles";
import { daftarMenu } from "./Data";

const Menu = () => {
  const [carts, setCarts] = useState(
    localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : []
  );
  const addToCart = (menu) => {
    const cartItem = carts.slice();
    let alreadyInCart = false;
    cartItem.forEach((item) => {
      if (item.id === menu.id) {
        item.amount++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItem.push({ ...menu, amount: 1 });
    }
    setCarts(cartItem);
    localStorage.setItem("carts", JSON.stringify(cartItem));
  };
  return (
    <>
      <MenuContainer>
        <HeadingMenu>Spesial Minggu Ini</HeadingMenu>
        <Cards>
          {daftarMenu.map(
            (menu) =>
              menu.type === 1 && (
                <Card key={menu.id}>
                  <CardImage src={menu.image} alt={menu.name} />
                  <CardTitle>{menu.name}</CardTitle>
                  <CardPrice>{`Rp. ${menu.price} / Porsi`}</CardPrice>
                  <Button primary onClick={() => addToCart(menu)}>
                    Pesan
                  </Button>
                </Card>
              )
          )}
        </Cards>
        <HeadingMenu>Makanan</HeadingMenu>
        <Cards>
          {daftarMenu.map(
            (menu) =>
              menu.category === "makanan" && (
                <Card key={menu.id}>
                  <CardImage src={menu.image} alt={menu.name} />
                  <CardTitle>{menu.name}</CardTitle>
                  <CardPrice>{`Rp. ${menu.price} / Porsi`}</CardPrice>
                  <Button primary>Pesan</Button>
                </Card>
              )
          )}
        </Cards>
        <ButtonWrapper>
          <Button primary big fontBig>
            Makanan Lainnya ...
          </Button>
        </ButtonWrapper>
        <HeadingMenu>Minuman</HeadingMenu>
        <Cards>
          {daftarMenu.map(
            (menu) =>
              menu.category === "minuman" && (
                <Card key={menu.id}>
                  <CardImage src={menu.image} alt={menu.name} />
                  <CardTitle>{menu.name}</CardTitle>
                  <CardPrice>{`Rp. ${menu.price} / Porsi`}</CardPrice>
                  <Button primary>Pesan</Button>
                </Card>
              )
          )}
        </Cards>
        <ButtonWrapper>
          <Button primary big fontBig>
            Minuman Lainnya ...
          </Button>
        </ButtonWrapper>
      </MenuContainer>
    </>
  );
};

export default Menu;
