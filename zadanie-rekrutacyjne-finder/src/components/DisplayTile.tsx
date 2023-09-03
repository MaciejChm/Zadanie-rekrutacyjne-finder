import Grid from "@mui/material/Grid";
import LinkTile from "./LinkTile";
import tilesData from "./TilesData";

interface expandedTiles {
  columns: any;
}

// Tworzę funkcję która będzie wyświetlać kafelki na ekranie oraz określam ile miejsca mają zajmować
// funkcją splice określam do ilu elementów ma być ucięta tabela (w zależności od ilości kolumn), a metoda map z każdego elementu tablicy tworzy osobny kafelek
// cała aplikacja jest responsywna
const DisplayTile = ({ columns }: expandedTiles) => {
  return (
    <Grid container spacing={2}>
      {tilesData.slice(0, columns).map((tile, index) => (
        <Grid item xs={6} sm={3} md={2} key={index}>
          <LinkTile title={tile.title} url={tile.url} icon={tile.icon} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayTile;
