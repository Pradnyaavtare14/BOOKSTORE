import { Link , useLocation , useNavigate} from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div className="flex h-screen items-center justify-center bg-white shadow-lg">
      <div className=" w-[600px] ">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-black">Signup</h3>

            {/* Name Input */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>

            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>

            {/* Signup Button and Login Trigger */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-xl text-black">
                Have an account?{" "}
                <button
                  type="button" // Prevent form submission
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
