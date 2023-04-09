import { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots, Circles } from "react-loader-spinner";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    setLoading(true);
    console.log(data);
    axios
      .post("http://localhost:3000/login", {
        email: data.email,
        password: data.password,
      })
      .then(function (res) {
        setLoading(false);

        console.log(res);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("firstName", res.data.user.firstName);
        setUser(res.data.user);

        navigate("/", { replace: true });
      })
      .catch(function (err) {
        setLoading(false);

        console.log(err);
      });
  };

  return (
    <div className="container mx-auto mt-12 ">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div
          className="md:w-1/2  w-full h-80 md:h-96  flex  items-center justify-center p-2 md:p-8 bg-no-repeat bg-cover  bg-center"
          style={{
            backgroundImage: " url('public/assets/images/yoga1.jpg') ",
            backgroundSize: "contain",
          }}
        ></div>
        <div className="w-full lg:w-1/2 py-4 md:py-16 px-12">
          <h2 className="text-3xl   mb-10 mt-0 md:mt-12">Login</h2>

          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-400 py-1 px-2 w-full"
                id="email"
                {...register("email", {
                  required: "email is required",
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
                {...register("password", {
                  required: "password is required",
                })}
              />
              {errors.password && (
                <div style={{ color: "red" }}>password is required</div>
              )}
            </div>

            <div className="mt-7">
              {loading ? (
                <div className="container mx-auto text-center h-10 flex justify-center items-center w-5">
                  <Circles />
                </div>
              ) : (
                <button className="w-full bg-[#A0C3D2] py-3 text-center text-white">
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
