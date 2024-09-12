type FeatureItemProps = {
  iconSrc: string;
  title: string;
  description: string;
};

export function FeatureItem({ iconSrc, title, description }: FeatureItemProps) {
  return (
    <article className="flex flex-col mt-8 w-full">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain w-8 aspect-square"
      />
      <div className="flex flex-col mt-3 w-full">
        <h3 className="text-base font-medium text-white">{title}</h3>
        <p className="mt-2 text-sm leading-5 text-slate-400">{description}</p>
      </div>
    </article>
  );
}
