import { FC } from "react";

type CommonButtonProps = {
  clickHandle: () => void;
  text: string;
};

const CommonButton: FC<CommonButtonProps> = ({ text, clickHandle }) => {
  return (
    <button
      className="w-full rounded bg-blue-400 px-12 py-2 text-center font-noto font-bold text-white transition-bg duration-300 hover:bg-blue-600"
      onClick={() => clickHandle()}
    >
      {text}
    </button>
  );
};

export default CommonButton;
