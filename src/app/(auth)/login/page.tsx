import FooterLinks from "../_components/login-form/FooterLinks";
import InputWithIcon from "../_components/login-form/InputWithIcon";
import LanguageSelector from "../_components/login-form/LanguageSelector";
import RememberMeCheckbox from "../_components/login-form/RememberMeCheckbox";

export default function LoginPages() {
  return (
    <main className="flex overflow-hidden flex-col bg-neutral-950">
      <section className="flex flex-col items-center px-20 pt-36 pb-64 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center mb-0 max-w-full w-[584px] max-md:mb-2.5">
          <header className="flex flex-col items-center text-3xl font-medium leading-none text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/840f52ad18f62cfe32d52af9af66b952521c12891f67b7e22ef772362e3b6f98?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
              alt=""
              className="object-contain w-10 aspect-square"
            />
            <h1 className="mt-6">Login to Superlist</h1>
          </header>
          <form className="flex flex-col mt-14 w-full max-w-[584px] max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col px-12 pt-12 pb-10 w-full rounded-2xl border border-solid bg-white bg-opacity-10 border-white border-opacity-10 max-md:px-5">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <label htmlFor="username" className="text-base text-white">
                    Username or email
                  </label>
                  <InputWithIcon
                    id="username"
                    placeholder="Username or email"
                    iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4a4dca5f67f9a596a512fb00a66f4dea931343d7ff81f8a3595128ead6042f36?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                    type="text"
                  />
                </div>
                <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                  <div className="flex  gap-10 justify-between items-center w-full max-md:max-w-full">
                    <label
                      htmlFor="password"
                      className="self-stretch my-auto text-base text-white"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="self-stretch my-auto text-sm leading-none text-yellow-300"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <InputWithIcon
                    id="password"
                    placeholder="Password"
                    iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/835447db89758674f949113781acb14c98a1dac1fa7a56b694db7e9319844f87?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                    type="password"
                    showPasswordToggle
                  />
                </div>
                <RememberMeCheckbox />
                <button className="self-stretch px-10 py-3 mt-6 w-full text-base font-medium bg-yellow-300 rounded-lg min-h-[48px] text-neutral-950 max-md:px-5 max-md:max-w-full">
                  Log In
                </button>
              </div>
              <p className="self-start mt-8 text-sm leading-none text-center text-yellow-300 max-md:max-w-full">
                Do not have an account?{" "}
                <a href="#" className="text-yellow-300">
                  Sign Up
                </a>
              </p>
            </div>
            <footer className="flex  gap-10 justify-between items-center mt-10 w-full text-sm leading-none whitespace-nowrap text-slate-500 max-md:max-w-full">
              <FooterLinks />
              <LanguageSelector />
            </footer>
          </form>
        </div>
      </section>
    </main>
  );
}
