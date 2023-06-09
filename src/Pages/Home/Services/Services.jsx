import { useEffect, useRef, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://car-solutions-server.vercel.app/services?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      // fetch(
      //   `http://localhost:5000/services?search=${search}&sort=${
      //     asc ? "asc" : "desc"
      //   }`
      // )
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, [asc, search]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };

  return (
    <div className="mt-6">
      <div className="text-center">
        <h3 className="text-3xl text-orange-600 font-bold">Our Services</h3>
        <h3 className="text-5xl font-bold">Our Service Area</h3>
        <p className="mx-6 lg:mx-80">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              ref={searchRef}
              onChange={handleSearch}
              placeholder="Search…"
              className="input input-bordered"
            />
          </div>
        </div>
        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-sm btn-secondary mt-5"
        >
          Price {asc ? "High to Low" : "Low to High"}
        </button>
      </div>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
