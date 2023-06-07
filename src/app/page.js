import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="Elon" />
      <User name="Musk" />
      <h1>Home Page</h1>
      <div>Hello</div>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>User name Is {props.name}</h2>
    </div>
  );
};
