import React from "react";
import { Link } from "react-router";
export const dataPusat = [
  {
    id: 1,
    judul: "Cara Mendaftar Akun",
    subjudul: "petunjuk langkah demi langkah mendaftar",
  },
  {
    id: 2,
    judul: "Metode Pembayaran",
    subjudul: "daftar metode pembayaran yang didukung",
  },
  {
    id: 3,
    judul: "Kebijakan Pengembalian",
    subjudul: "syarat dan ketentuan refund",
  },
];
export default function Home() {
  return (
    <div className="space-y-2 w-full">
      <p className="font-semibold">Pusat Bantuan</p>
      <h1 className="font-bold text-4xl">Pertanyaan Umum</h1>
      <p className="text-gray-500">
        Temukan jawaban dari pertanyaan yang sering ditanyakan.
      </p>
      <div className="gap-10 grid grid-cols-3 mt-20 w-full text-left">
        {dataPusat.map((value) => (
          <div
            key={value.id}
            className="space-y-2 shadow p-8 hover:border rounded-3xl transition-all hover:-translate-y-2 duration-300">
            <p className="flex justify-center items-center bg-gray-200 rounded-xl size-14 font-bold text-2xl">
              {value.id}
            </p>
            <h2 className="font-bold text-xl">{value.judul}</h2>
            <p className="text-gray-400">{value.subjudul}</p>
            <Link to={`/${value.id}`} className="flex gap-2 underline">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
