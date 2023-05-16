const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
          <img src={img} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold text-orange-600">Price: {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
