import { Monster } from "../../App";

import "./card.styles.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div key={id} className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt='monster' />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
