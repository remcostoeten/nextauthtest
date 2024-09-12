
export function SignUpFooter() {
  return (
    <footer className="flex gap-10 justify-between items-center mt-60 w-full text-sm leading-none whitespace-nowrap text-slate-400 max-md:mt-10">
      <nav className="flex gap-2.5 justify-center items-center self-stretch my-auto">
        <a href="#" className="self-stretch my-auto">
          Terms
        </a>
        <a href="#" className="self-stretch my-auto">
          Privacy
        </a>
        <a href="#" className="self-stretch my-auto">
          Docs
        </a>
        <a href="#" className="self-stretch my-auto">
          Helps
        </a>
      </nav>
      <div className="flex gap-2 items-center self-stretch my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b847723b7723ea8c2216ea785817d0883aa3e218e13ef72cc92f0f9deb625e0?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <span className="self-stretch my-auto">English</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/46aa16c942325f5ba3882745b1555f69790470ad668c5ea817fc4f9a5223cf89?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      </div>
    </footer>
  );
}
