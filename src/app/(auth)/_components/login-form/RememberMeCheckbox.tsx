export default function RememberMeCheckbox() {
  return (
    <label className="flex gap-2 items-center self-start mt-6 text-sm leading-none text-white cursor-pointer">
      <input type="checkbox" className="sr-only" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2a0649078c8e32e38d8b6e49d2cd1ad97c61044153f6881ea02547ae4f1e7f?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <span className="self-stretch my-auto">Remember Me</span>
    </label>
  );
}
