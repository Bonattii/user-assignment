import './Card.css';

interface CardProps {
  name: string;
  imgUrl: string;
  email: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={`${props.name}'s photo`} />

      <div className="card-content">
        <h3>{props.name}</h3>
        <a className="button" href={`mailto:${props.email}`}>
          Contact
        </a>
      </div>
    </div>
  );
}
