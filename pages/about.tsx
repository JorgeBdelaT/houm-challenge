import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "../components/link";
import styles from "../styles/pages/styles";

const About: NextPage = () => {
  return (
    <Box sx={styles.about.box}>
      <Head>
        <title>About</title>
        <meta name="description" content="about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography sx={styles.about.title} variant="h5">
        What is BrewDogBeers?
      </Typography>
      <Typography sx={styles.about.paragraph} variant="body1">
        BrewDogBeers is an application that allows you to list all the beers
        from the{" "}
        <Link
          href="https://www.brewdog.com/uk/community/culture/our-history"
          target="_blank"
          text="BrewDog"
        />{" "}
        brewery. You can also filter by name, IBU level and ABV. You can also
        access more information about a beer, such as its description,
        ingredients (hops, yeasts and malts), recommendations and dishes to pair
        it with.
      </Typography>
      <Typography variant="body1">
        The application is based on the{" "}
        <Link
          href="https://punkapi.com/documentation/v2"
          target="_blank"
          text="punkAPI"
        />{" "}
        that delivers information about different beers. The motivation for the
        API is that one of BrewDog&apos;s most popular beers is the{" "}
        <Link
          href="https://www.brewdog.com/uk/punk-ipa-4-can"
          target="_blank"
          text="Punk IPA"
        />
        , hence the name of the API.
      </Typography>
    </Box>
  );
};

export default About;
