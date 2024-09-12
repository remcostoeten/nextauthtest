import TrialSignup from "@/components/TrialSignup/TrialSignup";
import SignUpForm from "./(auth)/_components/register-form/SignUpForm";

export default function page() {
  return (
    <div className="flex  items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className=" flex overflow-hidden justify-between  max-w-[1440px] px-12 pt-12 pb-10 w-full rounded-2xl border border-solid bg-neutral-950 border-white border-opacity-10 max-md:px-5 max-md:max-w-ful">
        <TrialSignup />
        <SignUpForm />
      </section>
    </div>
  );
}
