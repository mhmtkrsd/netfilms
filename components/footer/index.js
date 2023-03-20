import styles from "./styles.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️
      <Link href="https://twitter.com/mhmtkrsd" target="_blank">
        by Mehmet Kursad YUCA
      </Link>
    </footer>
  );
}

export default Footer;
