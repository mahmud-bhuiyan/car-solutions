const BookingRow = ({ booking }) => {
  const { img, date, service, price } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
