import { FC } from "react";
import Link from "next/link";

const TopPage: FC = () => {
  return (
    <>
      <h1>Hello Next!</h1>
      <Link href="/search">search</Link>
    </>
  );
};

export default TopPage;
