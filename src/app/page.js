"use client";
import React from "react";
import CatImage from "@/components/CatImage";
import "./Page.css";

const Page = () => {
  return (
    <div className="page-container">
      {" "}
      <h1>Tugas Cloud Computing Kelompok 3</h1>
      <div className="centered-image">
        {" "}
        <CatImage />
      </div>
      <div className="txt-container">
        <b>PENJELASAN</b>
        <br></br>
        <p>
          Pengertian Kucing adalah jenis hewan mamalia karnivora yang berasal
          dari keluarga Felidae. Habitat kucing adalah di darat yang biasanya
          berbaur dengan manusia sebagai peliharaan dan ada juga yang hidup
          liar. Istilah kucing ini biasanya tertuju pada hewan kucing kecil yang
          telah jinak dan dipelihara manusia tetapi sebenarnya istilah kucing
          juga bisa merujuk kepada kucing besar seperti singa dan harimau.
        </p>
      </div>
    </div>
  );
};

export default Page;
