import styles from "../styles/Product.module.css";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

export default function Products() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className={styles.crleft}>
          <a onClick={() => router.replace("/user")} className={styles.float}>
            <FaUserCircle size={50} />
          </a>
          <h1>
            Welcome <br />
            {session.user.name}
          </h1>
          <br />
          <p>
            We provide all kind of plants and flowers. We keep in mind that we
            provide you with the best quality of plants and flowers.
          </p>
        </div>
        <section>
          <div className={styles.maincontainer}>
            <ul className={styles.gridwrapper}>
              <Link href="../products/alocasia">
                <li>
                  <div className={styles.imgspace}>
                    <img src="./1.jpeg" width={200} />
                  </div>
                  <div className={styles.infospace}>
                    <h3>ALOCASIA</h3>
                    <p>Neatherland</p>
                  </div>
                </li>
              </Link>
              <li>
                <div className={styles.imgspace}>
                  <img src="./2.jpeg" width={200} />
                </div>
                <div className={styles.infospace}>
                  <h3>CARMONA</h3>
                  <p>France</p>
                </div>
              </li>
              <li>
                <div className={styles.imgspace}>
                  <img src="./3.jpeg" width={200} />
                </div>
                <div className={styles.infospace}>
                  <h3>Cycas</h3>
                  <p>Norway</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
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
