import { FcGoogle } from "react-icons/fc";
import styles from "../styles/Home.module.css";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <style jsx>
          {`
            .center {
              background: linear-gradient(
                82.55deg,
                rgba(212, 255, 241, 1) 10.41%,
                rgba(212, 255, 241, 1) 79.7%
              );
              border: 1px solid #0c9869;
              border-radius: 15px;
              text-align: center;
              margin: auto;
              margin-top: 50px;
              margin-bottom: 50px;
              margin-left: 20%;
              margin-right: 20%;
              padding: 20px;
              font-family: sans-serif;
            }
            .float {
              position: fixed;
              width: auto;
              height: auto;
              padding: 5px;
              bottom: 40px;
              right: 40px;
              background-color: #0c9869;
              color: #fff;
              border-radius: 50px;
              text-align: center;
            }
            .navback {
              margin: auto;
              
              margin-left: 20%;
              margin-right: 20%;
              
              font-family: sans-serif;
            }
            img {
              border-radius: 50%;
            }
            .btn{
              background: #0c9869;
              border: 1px solid #0c9869;
              padding: 10px;
              color: #fff;
              width: 100%;
              border-radius: 5px;
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .btn2{
              background: #ffa3a3;
              border: 1px solid #ffa3a3;
              padding: 10px;
              border-radius: 5px;
            }
            @media (max-width: 769px) {
              .center{
                background: linear-gradient(82.55deg, rgba(255, 205, 205, 0.5) 10.41%, rgba(255, 163, 163, 0) 79.7%);
                border: 1px solid #FFA3A3;
                border-radius: 15px;
                text-align: center;
                margin-top: 50px;
                margin-bottom: 50px;
                margin-left:2%;
                margin-right: 2%;
              }
              .navback {
                margin: auto;
                
                margin-left: 0%;
                margin-right: 0%;
                
                font-family: sans-serif;
              }
          `}
        </style>
        <div>
          <div className="navback">
            <a onClick={() => router.replace("/")} className="float">
              <AiFillHome size={50} />
            </a>
          </div>
          <div className="center">
            <img src={session.user.image} /> <br />
            <h1>Welcome</h1>
            <h2>{session.user.name}</h2>
            <h3>{session.user.email}</h3>
            <button className="btn" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    /* This is the login page. It is a simple page that allows you to login with Google. */
    <div className={styles.login}>
      <img src="/logo.png" /> <br />
      <button className={styles.loginbtn} onClick={() => signIn()}>
        <FcGoogle size={20} /> &nbsp; Login With Google
      </button>
    </div>
  );
}
