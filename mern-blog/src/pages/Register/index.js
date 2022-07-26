import React from "react";
import { RegisterBg } from "../../assets";
import "./register.scss";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="iamge-bg" className="bg-image" />
      </div>

      <div className="right">
        <p className="title">Form Pendaftaran Akun</p>
        <Input label="Full Name" placeholder="Ketik Nama Kamu" />
        <Gap height={10} />
        <Input placeholder="emailkamu@email.com" label="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button
          title="Daftar Sekarang"
          onClick={() => history.push("/login")}
        />
        <Link title="Kembali ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
