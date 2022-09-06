import ky from "ky";
import { useCallback, useState } from "react";

import CommonButton from "components/CommonButton";

import { ResponseData } from "./api/long-process";

import type { NextPage } from "next";

type FetchState = {
  data?: ResponseData;
  error?: unknown;
  fetching: boolean;
};

const Home: NextPage = () => {
  const [{ data, error, fetching }, setFetchState] = useState<FetchState>({
    data: undefined,
    error: undefined,
    fetching: false,
  });

  const clickHandle = useCallback(async () => {
    setFetchState((fetchState) => {
      return {
        ...fetchState,
        fetching: true,
      };
    });
    try {
      const res = await ky.get("/api/long-process", {
        retry: 1,
        timeout: false,
      });
      const result = await res.json<ResponseData>();
      setFetchState((fetchState) => {
        return {
          ...fetchState,
          data: result,
          fetching: false,
        };
      });
    } catch (e) {
      setFetchState((fetchState) => {
        return {
          ...fetchState,
          error: e,
          fetching: false,
        };
      });
    }
  }, []);

  return (
    <main>
      <div className="mx-auto max-w-lg pt-24">
        <CommonButton clickHandle={() => clickHandle()} text="すごく長〜い処理" />
      </div>
      {fetching ? (
        <div>Fetcing...</div>
      ) : error ? (
        <div>エラー</div>
      ) : (
        <div>{data?.message ?? "データなし"}</div>
      )}
    </main>
  );
};

export default Home;
