import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <p>Not Found</p>
      <Link to={"/"}>Kembali</Link>
    </div>
  );
}
