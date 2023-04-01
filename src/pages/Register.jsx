import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots, Circles } from "react-loader-spinner";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [firstName, setFirstName] = useState();
  const [surName, setSurName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const formSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/register", {
        firstName: data.firstName,
        surName: data.surName,
        email: data.email,
        password: data.password,
      })
      .then(function (res) {
        console.log(res);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("firstName", res.data.user.firstName);
        localStorage.setItem("surName", res.data.user.surName);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("firstName", res.data.user.firstName);

        // localStorage.getItem("token");
        navigate("/", { replace: true });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div
          className="md:w-1/2 w-full lg:w-1/2   h-80 md:h-auto  flex  items-center justify-center mt-4 md:mt-0 py-5 md:p-8 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: " url('public/assets/images/yoga1.jpg')",
          }}
        ></div>
        <div className="w-full lg:w-1/2 py-7 md:py-16 px-12">
          <h2 className="text-3xl mb-4">Register</h2>
          <p className="mb-4">
            Create your account. It’s free and only take a minute
          </p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="FirstName"
                className="border border-gray-400 py-1 px-2"
                id="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                {...register("firstName", {
                  required: "name is required",
                })}
              />
              {/* <br /> */}
              {errors.firstName && (
                <div style={{ color: "red" }}>First name is required</div>
              )}
              <input
                type="text"
                placeholder="Surname"
                className="border border-gray-400 py-1 px-2"
                id="surName"
                value={surName}
                onChange={(e) => {
                  setSurName(e.target.value);
                }}
                {...register("surName", {
                  required: " surname  is required",
                })}
              />
              {errors.surName && (
                <div style={{ color: "red" }}>sur name is required</div>
              )}
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-400 py-1 px-2 w-full"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div style={{ color: "red" }}>email is required</div>
              )}
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-400 py-1 px-2 w-full"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                {...register("password", {
                  required: " password  is required",
                  minLength: 5,
                })}
              />
              {errors.password && (
                <div style={{ color: "red" }}>password is required</div>
              )}
            </div>

            <div className="mt-5">
              <input type="checkbox" className="border border-gray-400" />
              <span>
                I accept the{" "}
                <a href="#" className="text-[#A0C3D2] font-semibold">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="#" className="text-[[#A0C3D2]] font-semibold">
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="mt-5">
              {loading ? (
                <div className="container mx-auto text-center h-10 flex justify-center items-center w-5">
                  <Circles />
                </div>
              ) : (
                <button className="w-full bg-[#A0C3D2] py-3 text-center text-white">
                  Register Now
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
