import Image from "next/image";
import styles from "./page.module.css";
import {Button} from "antd";

export default function Home() {
  return (
    <main className="home">
      <Button type="primary">题库</Button>
    </main>
  );
}
