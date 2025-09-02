import { Link } from "react-router-dom";
import Header2 from "../../components/Header2";
import Sidebar from "../../components/Sidebar";
import { Trash2 } from "lucide-react";

export default function ViewAppointments() {
  return (
    <main className="flex flex-col w-full h-screen font-roboto pt-18 pl-56 bg-zinc-100 text-zinc-900">
      <Header2 />
      <Sidebar />
      <div className="h-full  w-full p-5">
        <form className="flex  flex-col w-full h-full flex-1 mt-3">
          <h1 className="font-bold text-2xl">My Appointments</h1>
          <header className="grid grid-cols-4 mt-3 font-semibold">
            <h3>Reference Id</h3>
            <h3>Department</h3>
            <h3>Date and Time</h3>
            <h3>Actions</h3>
          </header>

          <section className="flex flex-col gap-3">
            <div className="grid grid-cols-4 mt-3 bg-primaryLight/15 rounded-xl p-3">
              <p>1234567890</p>
              <p>Laboratory</p>
              <p>08/21/30, 9:30 AM</p>
              <div className="flex gap-2 items-center">
                <Link
                  to=""
                  className="bg-[#458FF6] rounded-lg px-2 font-bold text-white"
                >
                  Pay Now
                </Link>
                <button className="cursor-pointer">
                  <Trash2 className="text-red-500" />
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
