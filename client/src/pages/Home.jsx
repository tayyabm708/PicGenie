import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  console.log(data);

  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeOut, setsearchTimeOut] = useState(null);
  // console.log(posts.length);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/v1/post/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          setPosts(result.data.reverse());
          //console.log(result.data);
        }
      } catch (error) {
        console.error("Error fetching posts", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    clearTimeout(searchTimeOut);
    setsearchText(e.target.value);

    setsearchTimeOut(
      setTimeout(() => {
        const searchResults = posts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-black text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px] text-justify">
          Transform your words into vivid images with PicGenie. Unleash your
          creativity and see your ideas come to life through AI-powered
          visualizations{" "}
        </p>
      </div>

      <div className="mt-16 ">
        <FormField
          labelName="Search Posts"
          type="text"
          name="text"
          placeholder="Search posts"
          value={searchText}
          handleChange={handleSearch}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="text-[#666e75] text-xl mb-3">
                Showing results for{" "}
                <span className="text-[3222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={searchedResults} title="No search results found" />
              ) : (
                <RenderCards data={posts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
