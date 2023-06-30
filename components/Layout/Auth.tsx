import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import user from "@components/components/images/user.svg";
import padlock from "@components/components/images/password.svg";
import blackbg from "@components/components/images/darkbg.jpg";
import tms from "@components/components/images/tms-image.jpg";
import styles from "./Auth.module.css";
import jwt from "jsonwebtoken";

export default function Auth() {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogIn] = useState(true);

  const { signup: any } = router.query;

  const stylez = {
    backgroundImage: `url(${blackbg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  // fnction switching between sign-up and log-in page
  const switchModeHandler = () => {
    setIsLogIn((prevState) => !prevState);
  };

  // function for sending login information
  async function submitHandler(e: any) {
    e.preventDefault();
    const data = { mail, password };
    const PATH = "http://localhost:3000/auth";
    try {
      if (data) {
        // if user is logging in
        if (isLogin) {
          const datum = await fetch(`${PATH}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          // getting the token
          const resData = await datum.json();
          const token = resData.token;
        } else {
          // user is signing up
          const datum = await fetch(`${PATH}?signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          // getting the token
          const resData = await datum.json();
          // const token = resData.token;
          const token = jwt.sign({ mail }, resData.token, {
            expiresIn: 60 * 24 * 7,
          });
        }
      }
    } catch (error) {
      alert("An error Occured");
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
              <Link
                href="/auth?signup"
                className={styles.button}
                onClick={switchModeHandler}
              >
                Sign Up
              </Link>
            </p>
          )}
          {!isLogin && (
            <p className={styles.p}>
              Already Have an Account?{"   "}
              <Link
                href="/auth"
                className={styles.button}
                onClick={switchModeHandler}
              >
                Log in
              </Link>
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
