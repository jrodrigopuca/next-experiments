import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Proyectos para realizar pruebas y aprender</h1>
          <p>
            Este es un proyecto de Next.js
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="./products/electronics"
            target="_self"
            rel="noopener noreferrer"
          >
            Lista de Productos
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
