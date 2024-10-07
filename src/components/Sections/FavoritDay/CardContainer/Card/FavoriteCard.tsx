import { Product } from "../CardContainer";
import { FavoriteCardStyled } from "./FavoriteCard.styled";

type FavoriteCardProps = {
    card: Product;
  };
  
  const FavoriteCard = ({ card }: FavoriteCardProps) => {
  return (
    <FavoriteCardStyled>
      <div className="badges">
        {card.isTopSeller ? <span>ТОП ПРОДАЖІВ</span> : null}
        {card.weeklyDiscount != 0 ? (
          <span className="discount">ЗНИЖКА ТИЖНЯ -{card.weeklyDiscount}%</span>
        ) : null}
      </div>
      <img src={card.imageUrl} alt={card.name} />
      <h3>{card.name}</h3>
      <div className="description">{card.description}</div>
      <div className="details">
        <span>Вага:</span>
        <p> {card.weight}</p>
        <span>Калорії:</span>
        <p>{card.calories}</p>
      </div>
      <div className="price">
        <span className="old-price">{card.originalPrice} ₴</span>
        <span className="new-price">{card.discountPrice} ₴</span>
        <button>У КОШИК</button>
      </div>
    </FavoriteCardStyled>
  );
};

export default FavoriteCard;
