import type { NextPage } from "next";
import axios from "axios";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";

import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No Video"} />
      )}
    </div>
  );
};

// in nextJs we can fetch data using below async function
export const getServerSideProps = async () => {
  // making a get request to backend
  const { data } = await axios.get(`${BASE_URL}/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
