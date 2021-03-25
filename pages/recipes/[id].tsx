import { FC } from "react";
import { useRouter } from "next/router";

const RecipePage: FC = () => {
  const router = useRouter();
  return (
    <>
      <h1>Recipe Id: {router.query.id}</h1>
    </>
  );
};

export default RecipePage;
