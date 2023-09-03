import Button from "@mui/material/Button";
import { useState } from "react";
import DisplayTile from "./DisplayTile";
import tilesData from "./TilesData";
import { Card, Typography, useMediaQuery } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

const ExpandTiles = () => {
  // Tworzę Hook useState z wartością początkową false określający czy kafelki są rozwinięte
  const [expanded, setExpanded] = useState(false);

  // Tworzę funkcję która wywołuje rozwinięcie i zwinięcie kafelek
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Określam przedziały w jakim ma być widok Tabletowy
  const isTablet = useMediaQuery(`(min-width: 600px) and (max-width: 900px)`);

  // Skrócona funkcja if pokazuje tekst w zależności od tego czy kafelki są rozwinięte czy zwinięte
  const btnText = expanded ? "Show less categories" : "Show more categories";

  // Tutaj funkcją if przekazuję ile elementów ma być wyświetlonych (dla tableta 4, dla pozostałych wielkości 6 oraz wszystkie po rozwinięciu)
  const columns = expanded ? tilesData.length : isTablet ? 4 : 6;

  // Tworzę parent element który zawiera kafelki oraz przycisk do rozwijania
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px",
        boxShadow: 0,
        marginTop: "25px",
      }}
    >
      {/* Wyświetlam Kafelki na ekranie oraz przekazuję do komponentu DisplayTile zmienną columns*/}
      <DisplayTile columns={columns} />

      {/* Tworzę przycisk który po naciśnięciu aktualizuje stan kafelek (rozwija i zwija) */}
      <Button
        variant="text"
        sx={{
          color: "#0271e1",
          textTransform: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        onClick={handleExpandClick}
      >
        {/* Wyświetlam tekst przycisku w zależności od stanu */}
        <Typography sx={{ fontWeight: "bold" }}>{btnText}</Typography>

        {/* Strzałka SVG na przycisku obracająca się przy naciśnięciu */}
        <Typography
          sx={{
            marginLeft: "5px",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaAngleDown style={{ width: "20px", height: "20px" }} />
        </Typography>
      </Button>
    </Card>
  );
};

export default ExpandTiles;
