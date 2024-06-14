import React, { useState } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import '../resourses/auth.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(`${window.location.origin}/api/users/login`, values);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        window.location.href = "/";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  return (
    <div className="h-screen d-flex justify-content-center align-items-center auth">
      <div className="w-400 card p-3">
        <h1 className="text-lg">SWIFT - Login</h1>
        <hr />
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <div className="password-input-container">
              <input type={type} />
              <span onClick={handleToggle} className="password-toggle-icon">
                <Icon icon={icon} size={20} />
              </span>
            </div>
          </Form.Item>
          <div className="d-flex justify-content-between align-items-center my-3">
            {/* <Link to="/register">Click Here To Register</Link> */}
          <Link to="/register" style={{ marginRight: '50px' }}>Click Here To Register</Link>

            <button className="secondary-btn" type="submit">
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;

// import React from "react";
// import { Form, message } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { HideLoading, ShowLoading } from "../redux/alertsSlice";
// import '../resourses/auth.css'

// function Login() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());
//       const response = await axios.post("/api/users/login", values);
//       dispatch(HideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//         localStorage.setItem("token", response.data.data);
//         window.location.href = "/";
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   return (
//     <div className="h-screen d-flex justify-content-center align-items-center auth">
//       <div className="w-400 card p-3">
//         <h1 className="text-lg">BookMyBus - Login</h1>
//         <hr />
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item label="Email" name="email">
//             <input type="text" />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <input type="password" />
//           </Form.Item>
//           <div className="d-flex justify-content-between align-items-center my-3">
//             <Link to="/register">Click Here To Register</Link>
//             <button className="secondary-btn" type="submit">
//               Login
//             </button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;


