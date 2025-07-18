import { useState } from "react";
import Footer from "../components/Footer";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex flex-col w-full h-screen bg-zinc-100">
      <section className="w-full flex-1 p-8">
        <div className="bg-primaryLight/30 h-full w-full rounded-lg font-roboto text-zinc-900 py-3 px-5 flex flex-col gap-5 justify-center items-center">
          <header className="flex flex-col items-center">
            <img src="/assets/icons/icon.png" className="w-20" />
            <h1 className="font-bold text-xl">
              Welcome to <span className="text-[#458DFC]">SevenCare!</span>
            </h1>
            <h3 className="text-sm">
              Create your account using the form below.
            </h3>
          </header>

          <form className="flex flex-col justify-center items-center   lg:w-1/2 w-full gap-1">
            {/* First Row */}
            <div className="flex flex-row justify-center items-center gap-6 w-full">
              {/* First name */}
              <div className="flex flex-col w-full">
                <label htmlFor="firstname">First Name</label>
                <CustomInput
                  type="text"
                  name="firstname"
                  state={firstname}
                  stateSetter={setFirstname}
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col w-full">
                <label htmlFor="surname">Last Name</label>
                <CustomInput
                  type="text"
                  name="surname"
                  state={surname}
                  stateSetter={setSurname}
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-row justify-center items-start gap-6 w-full">
              {/* Birth Date */}
              <div className="flex flex-col w-full">
                <label htmlFor="birthDate">Birth Date</label>
                <CustomInput
                  type="text"
                  name="birthDate"
                  placeholder="MM/DD/YYYY"
                  state={birthDate}
                  stateSetter={setBirthDate}
                />
              </div>

              {/* Address */}
              <div className="flex flex-col w-full">
                <label htmlFor="address">Address</label>
                <CustomInput
                  type="text"
                  name="address"
                  placeholder="Street, Barangay, City, Province"
                  state={address}
                  stateSetter={setAddress}
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-row justify-center items-start gap-6 w-full">
              {/* Email */}
              <div className="flex flex-col w-full">
                <label htmlFor="email">Email</label>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  state={email}
                  stateSetter={setEmail}
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col w-full">
                <label htmlFor="phoneNumber">Phone Number</label>
                <CustomInput
                  type="text"
                  name="phoneNumber"
                  placeholder="09XXXXXXXXX"
                  state={phoneNumber}
                  stateSetter={setPhoneNumber}
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="password">Password</label>
              <CustomInput
                type="password"
                name="password"
                placeholder=""
                state={password}
                stateSetter={setPassword}
              />
            </div>

            <button
              type="submit"
              className="bg-primary rounded-xl w-full py-1.5 mt-2.5 text-zinc-200 font-bold cursor-pointer"
            >
              Sign Up
            </button>

            <footer className="w-full py-1 justify-center flex flex-row items-center gap-1 text-zinc-800 text-xs">
              <p>Already have an account?</p>{" "}
              <Link className="text-primary" to={"/login"}>
                Log In
              </Link>
            </footer>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
