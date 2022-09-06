import { FC, useMemo } from "react";
import { IoClose } from "react-icons/io5";

import { FetchState } from "pages";

type ProgressViewProps = {
  fetchingState: FetchState;
};

const ProgressView: FC<ProgressViewProps> = ({ fetchingState }) => {
  const { error, fetching } = useMemo(() => fetchingState, [fetchingState]);

  return fetching || error ? (
    <div className="absolute inset-0 flex items-center justify-center bg-frosted">
      <div className="h-28 w-5/6 max-w-xl rounded-sm border border-black bg-white">
        <div className="relative flex h-6 items-center justify-center border-b border-black bg-gradient-to-b from-header-thin to-header-dark">
          <p className="text-center text-xs">Progress Bar</p>
          <button className="absolute left-2 h-4 w-4 rounded-full bg-close">
            <div className="flex h-4 w-4 items-center justify-center">
              <IoClose size={12} />
            </div>
          </button>
        </div>
        <div className="mx-auto flex w-11/12 flex-col justify-center gap-2">
          <div>
            <div className="mx-auto mt-4 h-5 rounded-full border border-black bg-gradient-to-b from-bar-dark to-bar-thin shadow-xl"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent"></div>
            <p className="text-sm text-slate-900">すごく長〜い処理を実行中…</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProgressView;
