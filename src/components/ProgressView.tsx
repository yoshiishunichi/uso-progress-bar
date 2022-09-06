import { FC } from "react";

type ProgressViewProps = {};

const ProgressView: FC<ProgressViewProps> = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-frosted">
      <div className="h-28 w-96 rounded-sm border border-black bg-slate-100">
        <div className="flex h-6 items-center justify-center border-b border-black bg-gradient-to-b from-header-thin to-header-dark">
          <p className="text-center text-xs">Progress Bar</p>
        </div>
        <div>プログレスバー</div>
      </div>
    </div>
  );
};

export default ProgressView;
