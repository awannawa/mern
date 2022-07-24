import React from "react";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="iamge-bg" className="bg-image" />
      </div>

      <div className="right">
        <p className="title">Login</p>
        <Input placeholder="emailkamu@email.com" label="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Login" />
        <Link title="Belum Punya Akun? Daftar di sini" />
      </div>
    </div>
  );
};

export default Login;
