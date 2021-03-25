import { FC } from "react";
import Link from "next/link";

const SearchPage: FC = () => {
  return (
    <>
      <h1>Seaaarch!</h1>
      <div>
        <Link href="/recipes/1">recipe 1</Link>
      </div>
      <div>
        <Link href="/recipes/2">recipe 2</Link>
      </div>
    </>
  );
};

export default SearchPage;
