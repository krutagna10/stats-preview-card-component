import cardImageDesktop from "../../assets/image-header-desktop.jpg";
import cardImageMobile from "../../assets/image-header-mobile.jpg";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <picture className="card__picture">
          <source media="(min-width: 48em)" srcSet={cardImageDesktop} />
          <img
            className="card__image"
            src={cardImageMobile}
            alt="Three womens doing some work"
          />
        </picture>
      </div>
      <div className="card__content">
        <h2 className="card__title">
          Get insights that help your business grow.
        </h2>
        <p className="card__description">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="card__stats">
          <div className="card__stat">
            <h3 className="card__stat-title">10k+</h3>
            <p className="card__stat-label">Companies</p>
          </div>
          <div className="card__stat">
            <h3 className="card__stat-title">314</h3>
            <p className="card__stat-label">Templates</p>
          </div>
          <div className="card__stat">
            <h3 className="card__stat-title">12M+</h3>
            <p className="card__stat-label">Queries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
