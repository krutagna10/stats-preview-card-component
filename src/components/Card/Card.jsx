import cardImageDesktop from "../../assets/image-header-desktop.jpg";
import cardImageMobile from "../../assets/image-header-mobile.jpg";
import "./Card.css";

const stats = [
  {
    title: "10k+",
    label: "Companies",
  },
  {
    title: "314",
    label: "Templates",
  },
  {
    title: "12M+",
    label: "Queries",
  },
];

function Card() {
  return (
    <section className="card-section">
      <div className="card grid grid-cols-2">
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
        <div className="card__content flow">
          <h2 className="fs-400">
            Get <span className="clr-violet">insights</span> that help your
            business grow.
          </h2>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="grid grid-cols-3 gap">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="fs-300 ">{stat.title}</h3>
                <span className="card__stat-label fs-100 clr-grey text-uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
