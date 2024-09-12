import { FeatureItem } from "./FeatureItem";
import { SignUpFooter } from "./Footer";

type FeatureItemProps = {
  iconSrc: string;
  title: string;
  description: string;
};

const featureItems: FeatureItemProps[] = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cfbf4b7e72ab205798359a928bbfebe663db5f22dd571b57434f1556a20260d1?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197",
    title: "Invite unlimited colleagues",
    description:
      "Integrate with guaranteed developer-friendly APIs or openly to choose a build-ready or low-code solution.",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d63136109fc449f0ce83c9adae9897497eb8e0163cac2841193053b1ebdca91?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197",
    title: "Ensure compliance",
    description:
      "Receive detailed insights on all your numbers in real-time, see where visitors are coming from.",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cbf458a617ac625c9609a93156c74cb5ea30d4ce9bcc1e06d72178bcc502ad78?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197",
    title: "Built-in security",
    description:
      "Keep your team members and customers in the loop by sharing your dashboard public.",
  },
];

export default function TrialSignup() {
  return (
    <main className="flex flex-col justify-between pt-2 min-w-[240px] w-[379px]">
      <section className="flex flex-col w-full">
        <header className="flex flex-col w-full font-medium text-white">
          <div className="flex gap-2 items-center self-start text-xl leading-tight whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a05d774b6459eb8c71a45d27fd57f64654543267ef000ec5ce234ab87c7157ab?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
              alt="Superlist logo"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <h1 className="self-stretch my-auto">Superlist</h1>
          </div>
          <h2 className="mt-4 text-3xl leading-none">
            Start your 30-day free trial
          </h2>
          <div className="flex gap-2 items-center mt-4 w-full text-sm leading-none text-slate-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13323593d77c69951ef7642f631b64888d001550dcd1d8fe93f783dac489520b?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            <p className="flex-1 shrink self-stretch my-auto basis-0">
              No credit card required
            </p>
          </div>
        </header>
        <div className="flex flex-col mt-12 w-full max-md:mt-10">
          {featureItems.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </section>
      <SignUpFooter />
    </main>
  );
}
