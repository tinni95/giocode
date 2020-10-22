import React from "react";
import { useParams } from "react-router-dom";

export default function PortfolioItem() {
  const { id } = useParams();
  return <p>{id}</p>;
}
