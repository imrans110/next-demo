import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import LaunchCard from "@components/LaunchCard";
import Filter from "@components/Filter";
import { useState, useEffect, useMemo } from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import { useRouter } from "next/router";
import Constants from "../constants.json";
import "semantic-ui-css/semantic.min.css";

const CustomLoader = () => (
  <Segment>
    <Dimmer active inverted>
      <Loader size="large">Loading</Loader>
    </Dimmer>

    <Image src="/paragraph.png" />
  </Segment>
);

const Home = () => {
  const [launchData, setLaunchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  console.log({ router });

  useEffect(() => {
    const queryString = `?${new URLSearchParams(router.query).toString()}`;
    setLoading(true);
    fetch(Constants.APIendpoint + queryString)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLaunchData(data);
        setLoading(false);
      })
      .catch((er) => {
        setLoading(false);
        console.log({ er });
      });
  }, [router.query]);

  return (
    <div className="container">
      <Head>
        <title>SpaceX Launch Programs!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="main-page">
        <Filter className="filter" />

        {loading ? (
          <CustomLoader className="launch-items" />
        ) : (
          <div className="launch-items">
            <LaunchCard launchData={launchData} />
          </div>
        )}
      </div>

      <Footer />

      <style jsx>{`
        .container {
          background: #e7e7e7f2;
          padding: 20px;
        }
        .main-page {
          padding: 10px;
        }

        .launch-items {
          display: flex;
          flex-wrap: wrap;
          margin-left: 30vh;
          justify-content: space-evenly;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
