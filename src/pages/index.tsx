import Link from "next/link";
import type { FC } from "react";

const HomePage: FC = () => (
  <>
    <h1>Home</h1>
    <ul>
      <li>
        <Link href="/page2">Page 2</Link>
      </li>
    </ul>
  </>
);

export default HomePage;
