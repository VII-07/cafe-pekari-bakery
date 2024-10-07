import FavoriteCard from "./Card/FavoriteCard";
import { CardContainerStyled } from "./CardContainer.styled";
import CardUrL from '../../../../assets/z-tuentsem.webp.png';

export type Product = {
    id: number;
    name: string;
    description: string;
    weight: string;
    calories: string;
    originalPrice: number;
    discountPrice: number;
    isTopSeller: boolean;
    weeklyDiscount: number;
    imageUrl: string;
  };
const FAVORITE_CARD: Product[] = [
  {
    id: 1,
    name: "Круассан з тунцем",
    description:
      "круасан, зелена цибуля, тунець, яєчна, лимон, помідор, салат, соус Класичний",
    weight: "225 г",
    calories: "304 ккал",
    originalPrice: 149,
    discountPrice: 119,
    isTopSeller: true,
    weeklyDiscount: 10, // відсотки
    imageUrl: CardUrL,
  },
  {
    id: 2,
    name: "Круассан з тунцем",
    description:
      "круасан, зелена цибуля, тунець, яєчна, лимон, помідор, салат, соус Класичний",
    weight: "225 г",
    calories: "304 ккал",
    originalPrice: 149,
    discountPrice: 119,
    isTopSeller: false,
    weeklyDiscount: 10, // відсотки
    imageUrl: CardUrL,
  },
  {
    id: 3,
    name: "Круассан з тунцем",
    description:
      "круасан, зелена цибуля, тунець, яєчна, лимон, помідор, салат, соус Класичний",
    weight: "225 г",
    calories: "304 ккал",
    originalPrice: 149,
    discountPrice: 119,
    isTopSeller: false,
    weeklyDiscount: 10, // відсотки
    imageUrl: CardUrL,
  },
];

const CardContainer = () => {
  return (
    <CardContainerStyled>
      {FAVORITE_CARD.map((card) => (
        <FavoriteCard key={card.id} card={card} />
      ))}
    </CardContainerStyled>
  ) 
};

export default CardContainer;
