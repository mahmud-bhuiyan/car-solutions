import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
          <img src={img} alt={title} className="rounded-xl h-56" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold text-orange-600">Price: {price}</p>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
