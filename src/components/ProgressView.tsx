import { FC, useMemo } from "react";

import { FetchState } from "pages";

type ProgressViewProps = {
  fetchingState: FetchState;
};

const ProgressView: FC<ProgressViewProps> = ({ fetchingState }) => {
  const { error, fetching } = useMemo(() => fetchingState, [fetchingState]);

  return fetching || error ? (
    <div className="absolute inset-0 flex items-center justify-center bg-frosted">
      <div className="h-28 w-96 rounded-sm border border-black bg-slate-100">
        <div className="relative flex h-6 items-center justify-center border-b border-black bg-gradient-to-b from-header-thin to-header-dark">
          <p className="text-center text-xs">Progress Bar</p>
          <button className="absolute left-1 h-3 w-3 rounded-full bg-close"></button>
        </div>
        <div>プログレスバー</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProgressView;
