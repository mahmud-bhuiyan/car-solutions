import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src="https://i.ibb.co/f9rqJXk/register-1.png" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center mb-10">Sign Up</h1>
              <form onSubmit={handleRegister}>
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input input-bordered pr-10"
                    />
                    <div
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {/* confirm password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirm"
                      placeholder="Confirm password"
                      className="input input-bordered pr-10"
                    />
                    <div
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center my-4">
                Already have an account?{" "}
                <Link to="/login" className="text-orange-600 font-bold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
