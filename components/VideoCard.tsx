import React from "react";
import { Video } from "../types";
// NextPage is used for setting the type of our page
import { NextPage } from "next";

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  return <div>VideoCard</div>;
};

export default VideoCard;
