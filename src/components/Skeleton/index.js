import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import "../PokemonCard/pokemonCard.css"
import "./skeleton.css"

export default function Skeleton() {
  return (
    <Card
      className='card-wrapper skeleton-pulse'
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <div
        className='id-container skeleton-pulse'
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", height: "24px" }}
      />
      <CardMedia
        className='card-media skeleton-pulse'
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", height: "180px" }}
      />
      <div
        className='typesContainer skeleton-pulse'
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          height: "30px",
          margin: "10px 0",
        }}
      />
      <CardContent
        className='cardContent skeleton-pulse'
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          height: "50px",
          padding: "8px",
        }}
      />
    </Card>
  )
}
