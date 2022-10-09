import { SiLua, SiVim } from "react-icons/si";

export default function ProjectCard() {
  return (
    <div className="w-full space-y-2 rounded-lg border bg-white p-5 drop-shadow-sm transition-all hover:scale-[1.02] hover:cursor-pointer">
      <h1 className="text-lg font-semibold">Neovim</h1>
      <p>Vim-fork focused on extensibility and usability</p>
      <div className="g flex space-x-2">
        <SiVim />
        <SiLua />
      </div>
    </div>
  );
}
