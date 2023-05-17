const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, date, service, price, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded-lg w-20 h-20">
            {img && <img src={img} alt={service} />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-green-600">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-info btn-sm"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
