export default function FooterLinks() {
  const links = ["Terms", "Privacy", "Docs", "Helps"];

  return (
    <nav className="flex gap-2.5 justify-center items-center self-stretch my-auto">
      {links.map((link) => (
        <a key={link} href="#" className="self-stretch my-auto">
          {link}
        </a>
      ))}
    </nav>
  );
}
