import { FcGoogle } from "react-icons/fc";
import styles from "../styles/Home.module.css";
import { useSession, signIn } from "next-auth/react";
import HomeScreen from "./home";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <HomeScreen />
      </>
    );
  } else {
    return (
      <div className={styles.login}>
        <img src="/logo.png" /> <br />
        <button className={styles.loginbtn} onClick={() => signIn()}>
          <FcGoogle size={20} /> &nbsp; Login
        </button>
      </div>
    );
  }
}
