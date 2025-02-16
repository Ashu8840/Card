import Link from "next/link";
/* eslint-disable react/jsx-key */
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-8">
      <Link className="text-white font-bold" href={"/"}>
        To-Do List
      </Link>
      <Link className="bg-white p-2 " href={"/addTopic"}>
        Add Topic{" "}
      </Link>
    </nav>
  );
}
