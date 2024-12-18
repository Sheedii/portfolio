import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  file,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  file?: string; // Optional prop for file download
  handleClick?: () => void; // Optional prop for custom click handlers
  otherClasses?: string;
}) => {
  return file ? (
    // Render as a link if a file is provided
    <a
      href={file}
      download
      className="relative inline-flex h-12 w-[100%] md:w-58 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </a>
  ) : (
    // Render as a button if no file is provided
    <button
      className="relative inline-flex h-12 w-[100%] md:w-58 md:mt-5 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
