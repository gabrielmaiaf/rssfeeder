import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import NewsCard from "../../components/newsCard";
import Header from "../../components/header";

// Types
import { NewsType } from "../../types/news-feeder";

const TopNews: NextPage = () => {
  const [rss, setRss] = useState<NewsType[]>([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await axios.get(
        "https://rssfeederback.herokuapp.com/topnews"
      );

      setRss(data);
    }

    loadData();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-2xl my-4 mx-6">Top News</h1>
      <div className="space-y-2">
        {rss.map((i: NewsType, index: number) => (
          <NewsCard key={index} news={i} />
        ))}
      </div>
    </div>
  );
};

export default TopNews;
