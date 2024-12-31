import { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

  const [emailId,setEmailId] = useState("mrunal@gmail.com");
  const [password, setPassword] = useState("Mrunal@007");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      const res = await axios.post(BASE_URL +"/login",{
        emailId,
        password
      },{withCredentials:true});
      //console.log(res.data.user);
      dispatch(addUser(res.data.user));
      navigate("/")
    } catch (error) {
      console.error("Error ...",error)
    }
  };

  return (
    <div className="m-8 flex justify-center">
      <div className="card bg-base-300  text-gray-100 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email Id: </span>
              </div>
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text">Password: </span>
              </div>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          <div className="card-actions justify-end">
            <button className="btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
