import { useCallback } from "react";

import CommonButton from "components/CommonButton";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const clickHandle = useCallback(async () => {
    console.log("押されたよ");
  }, []);

  return (
    <main>
      <div className="mx-auto max-w-2xl">
        <CommonButton clickHandle={() => clickHandle()} text="すごく長〜い処理" />
      </div>
    </main>
  );
};

export default Home;
