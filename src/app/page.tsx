import Main from "./main";
import { baseMetadata } from './constants/metadata';
// import styles from "./page.module.css";

export const metadata = {
  ...baseMetadata,
}

export default function Home() {
  return <Main />;
}
