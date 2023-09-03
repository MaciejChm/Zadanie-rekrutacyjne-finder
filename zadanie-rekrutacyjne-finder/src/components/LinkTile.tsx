import { Link, Typography } from "@mui/material";

interface tileProps {
  title: string;
  url: string;
  icon: any;
}

const LinkTile = ({ title, url, icon }: tileProps) => {
  //Tutaj tworzę połączenie ze stroną https://www.finder.com.au/ po naciśnięciu na kafelek
  return (
    <Link
      href={url}
      className="tile"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #e3e5e8",
        borderRadius: "16px",
        textAlign: "center",
        textDecoration: "none",
        height: "105px",
        "&:hover": {
          border: "1px solid #0271e1",
        },
      }}
    >
      {/* Tutaj pobieram i wyświetlam ikonę kafelka */}
      <div>
        {icon}
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            padding: "0 10px",
          }}
        >
          {/* Tutaj pobieram i wyświetlam nazwę kafelka */}
          {title}
        </Typography>
      </div>
    </Link>
  );
};

export default LinkTile;
