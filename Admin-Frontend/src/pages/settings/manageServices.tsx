import { HeartPlus, Pen, Trash } from "lucide-react";
import Header2 from "../../components/Header2";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

function ManageServices() {
  return (
    <main className="flex flex-col w-full h-screen font-roboto pl-80 p-4 bg-bg-color text-zinc-900 overflow-hidden">
      <Header2 header="Services" description="Manage clinic services." />
      <Sidebar />
      <div className="h-full w-full p-5 pb-0 flex-1 min-h-0 flex flex-col border-t">
        <nav className="flex items-center justify-end">
          <Link
            to="/add-service"
            className="flex items-center gap-2 mb-2 justify-end px-2 py-1 rounded-lg bg-primary text-white w-fit"
          >
            <HeartPlus className="w-5" />
            <p className="font-bold text-lg">Add Service</p>
          </Link>
        </nav>

        <header className="grid grid-cols-4 font-bold">
          <p>Service</p>
          <p>Price</p>
          <p>Status</p>
          <p>Actions</p>
        </header>

        <section className="flex flex-col gap-3 mt-3">
          <div className="grid grid-cols-4">
            <p>Vaccine</p>
            <p>₱ 100.00</p>
            <p>Available</p>
            <div className="flex items-center gap-2">
              <button
                title="Edit service"
                className="cursor-pointer text-green-500"
              >
                <Pen />
              </button>
              <button
                title="Delete service"
                className="cursor-pointer text-red-500"
              >
                <Trash />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ManageServices;
