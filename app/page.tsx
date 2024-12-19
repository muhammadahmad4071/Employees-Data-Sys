"use client";
import Crud from "@/components/Crud";
import {HashLoader } from "react-spinners";

export default function Home() {
  return (
    <div className="p-8">
      <HashLoader color="#19ff06" />
      <Crud />
    </div>
  );
} 
