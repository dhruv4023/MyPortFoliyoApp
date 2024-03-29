import React from "react";
import { Typography, useTheme } from "@mui/material";
import MenuItems from "./MenuItems";
import FlexBetween from "../../Components/FlexBetween";

export const Navbar = () => {
  // const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  // const isNonMobileScreens = useMediaQuery("(min-width: 800px)");

  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const primaryLight = theme.palette.primary.light;


  return (
    <>
      <FlexBetween backgroundColor={primaryLight} padding="1rem 6%">
        <Typography
          color={"primary"}
          fontWeight={"bold"}
          fontSize={"clamp(1rem,1.5rem,2rem)"}
          sx={{
            "&:hover": {
              color: dark,
              cursor: "pointer",
            },
          }}
        >
          Dhruv
        </Typography>
        {/* {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius={"9px"}
            gap={"3rem"}
            width={"40rem"}
            padding={"0 0.5rem"}
            margin={"0 2rem"}
          >
            <FlexBetween sx={{ width: "100%" }}>
              <InputBase sx={{ width: "80%" }} placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </FlexBetween>
        )} */}
        {/* {isNonMobileScreens ? ( */}
        <>
          <FlexBetween gap={"1rem"}>
            <MenuItems />
          </FlexBetween>
        </>
        {/* ) : (
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu />
          </IconButton>
        )} */}
        {/* {!isNonMobileScreens && isMobileMenuToggled && (
          <Box
            position={"fixed"}
            right="0"
            // botom="0"
            top="0"
            // height="100%"
            zIndex="10"
            maxWidth="500px"
            minWidth="30px"
            backgroundColor={background}
          >
            <FlexBetween
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="3rem"
            >
              <Box
                display={"flex"}
                zIndex={"11"}
                justifyContent={"flex-end"}
                p={"1rem"}
              >
                <IconButton
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                  <Close />
                </IconButton>
              </Box>
              <MenuItems />
            </FlexBetween>
          </Box>
         )}  */}
      </FlexBetween>
    </>
  );
};
