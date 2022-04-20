import styles from "../../styles/Page.module.css";
import GooglePayButton from "@google-pay/button-react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
export default function Whitetshirt() {
  const router = useRouter();
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "50.00",
      currencyCode: "INR",
      countryCode: "IN"
    }
  };
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <a onClick={() => router.replace("/")} className={styles.float}>
          <AiOutlineArrowLeft size={50} />
        </a>

        <div>
          <div className={styles.img}>
            <h1 className={styles.h1}>ALOCASIA</h1>
            <img src="/1.jpeg" width={300} />
            <br />
            <div className={styles.info}>
              Bedding and balcony plants, potted plants and nursery plants.
              <br /> Hardy perennial plants (conifers, other non-forest nursery
              products). <br /> Trees from planted or natural forest stands.
            </div>
            <br />
            <div className={styles.type}>
              Quantity: &nbsp;
              <select name="cars" id="cars">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <br />
            <div className={styles.price}>Print Price ($): 50</div>
          </div>
          <div className={styles.buy}>
            <GooglePayButton
              environment="TEST"
              buttonSizeMode="static"
              paymentRequest={paymentRequest}
              onLoadPaymentData={(paymentRequest) => {
                console.log("load payment data", paymentRequest);
              }}
            />
          </div>
        </div>
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
