import React from "react";
import { dataPusat } from "./Home";
import { Link, useParams } from "react-router";

export default function HomeDetail() {
  const { id } = useParams();
  const sortData = dataPusat.filter((d) => d.id == id);

  return (
    <div className="text-left">
      <Link to={"/"} className="text-gray-400">
        kembali ke HOME
      </Link>
      {sortData.map((value) => (
        <div key={value.id} className="space-y-2 shadow-2xl p-8 rounded-3xl">
          <p className="flex justify-center items-center bg-gray-200 rounded-xl size-14 font-bold text-2xl">
            {value.id}
          </p>
          <p className="font-semibold">Detail Pertanyaan</p>

          <h2 className="font-bold text-3xl">
            {value.judul} - ID: {value.id}
          </h2>
          <p className="text-gray-400">{value.subjudul}</p>
          <hr />
          <p className="mb-4 p-2 text-gray-400">
            Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada
            halaman detail.
          </p>
          <Link to={"/"} className="bg-black px-4 py-3 rounded-md text-white">
            Kembali ke HOME
          </Link>
        </div>
      ))}
    </div>
  );
}
