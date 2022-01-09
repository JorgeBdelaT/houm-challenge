import type { NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getBeerInfo } from "../../data";
import type { Beer } from "../../types";

interface BeerProps {
  beer: Beer;
}

const Beer: NextPage<BeerProps> = ({ beer }) => {
  return (
    <div>
      <Head>
        <title>Beer {beer.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {beer.name}
    </div>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
  const { params } = context;
  const beer = await getBeerInfo(parseInt(params?.id ?? "", 10));
  if (!beer) return { notFound: true };
  return { props: { beer } };
}

export default Beer;