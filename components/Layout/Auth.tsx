import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import user from "@components/components/images/user.svg";
import padlock from "@components/components/images/password.svg";
import blackbg from "@components/components/images/darkbg.jpg";
import tms from "@components/components/images/tms-image.jpg";
import styles from "./Auth.module.css";

export default function Auth() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogIn] = useState(true);

  const stylez = {
    backgroundImage: `url(${blackbg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const switchModeHandler = () => {
    setIsLogIn((prevState) => !prevState);
  };

  // function for sendinf login information
  async function submitHandler(e: any) {
    e.preventDefault();
    const data = { mail, password };
    // if user is logging in
    if (isLogin) {
      console.log(data);
    } else {
      // user is signing up
    }
    setMail("");
    setPassword("");
  }
  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-block"]} style={stylez}>
        <div className={styles["form-block"]}>
          <h2> TMS</h2>
          <form onSubmit={submitHandler}>
            <h3>Welcome to TMS</h3>
            <p>{isLogin ? "Log into your Account" : "Register Your Account"}</p>
            <Image src={user} width={20} height={20} alt="user" />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />

            <br />
            <Image src={padlock} width={20} height={20} alt="user" />
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isLogin && (
              <div className={styles["checkbox-block"]}>
                <p>
                  {" "}
                  <input type="checkbox" /> Remember me
                </p>
                <Link href="">Forgot Password? </Link>
              </div>
            )}
            <button type="submit"> {isLogin ? "Login" : "Sign up"}</button>
          </form>
          {isLogin && (
            <p className={styles.p}>
              Don't Have an account?
              <button className={styles.button} onClick={switchModeHandler}>
                Sign Up
              </button>
            </p>
          )}
          {!isLogin && (
            <p className={styles.p}>
              Already Have an Account?
              <button className={styles.button} onClick={switchModeHandler}>
                Log in
              </button>
            </p>
          )}
        </div>
        <div className={styles["picture-block"]}>
          <h1>
            Welcome to
            <br />
            TMS
          </h1>
          <Image src={tms} alt="user" />
        </div>
      </div>
    </div>
  );
}
