import { FC, memo, useEffect, useMemo, useState } from "react";

import { FetchState } from "pages";

type ProgressViewProps = {
  fetchingState: FetchState;
};

const ProgressView: FC<ProgressViewProps> = ({ fetchingState }) => {
  const [progress, setProgress] = useState<number>(0);
  const { error, fetching } = useMemo(() => fetchingState, [fetchingState]);

  useEffect(() => {
    if (fetching || error) return;
    setProgress(0);
  }, [error, fetching]);

  useEffect(() => {
    if (!fetching) return;
    const id = setInterval(() => {
      setProgress((progress) => progress + 0.1);
    }, 10);
    return () => clearInterval(id);
  }, [fetching]);

  return fetching || error ? (
    <div className="absolute inset-0 flex items-center justify-center bg-frosted">
      <div className="h-28 w-5/6 max-w-xl rounded-sm border border-black bg-white">
        <div className="relative flex h-6 items-center justify-center border-b border-black bg-gradient-to-b from-header-thin to-header-dark">
          <p className="text-center text-xs">Progress Bar</p>
        </div>
        <div className="mx-auto flex w-11/12 flex-col justify-center gap-2">
          <div>
            <div className="relative mx-auto mt-4 h-2 rounded-full bg-gradient-to-b from-bar-dark to-bar-thin shadow-xl">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-sky-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-1 font-noto text-sm">
            {fetching ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
                <p className="font-normal text-slate-900">すごく長〜い処理を実行中…</p>
              </>
            ) : (
              <p className="font-medium text-red-500">エラーが発生しました…</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default memo(ProgressView);
