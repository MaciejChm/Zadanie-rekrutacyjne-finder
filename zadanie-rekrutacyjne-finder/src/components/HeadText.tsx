import { Typography } from "@mui/material";

const HeadText = () => {
  //Tutaj tworzę napisy nagłówkowe
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ margin: "25px 0 10px 0" }}
      >
        Join 2 million+ Australians finding better
      </Typography>
      <Typography>
        Finder's team of 40+ experts will help you find the right choises in
        over 100 categories.
      </Typography>
    </>
  );
};

export default HeadText;
