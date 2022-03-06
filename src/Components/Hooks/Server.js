import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Server = () => {
  const [blog, setBlog] = useState([]);
  const [readBlog, setReadBlog] = useState([]);
  const [tagBlog, setTagBlog] = useState([]);
  const [HomePageBlog, setHomePageBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 9;

  useEffect(() => {
    fetch(`http://localhost:5000/h-blog?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setHomePageBlog(data.result);
        const count = data.count;
        const pageCountNumber = Math.ceil(count / size);
        setPageCount(pageCountNumber);
      });
  }, [page]);

  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setBlog(data);
      });
  }, []);

  const HandleReadBlog = (id) => {
    useEffect(() => {
      fetch(`http://localhost:5000/read-blog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setReadBlog(data);
        });
    }, [id]);
  };
  const HandleTagBlog = (query) => {
    useEffect(() => {
      fetch(`http://localhost:5000/tag-blog/${query}`)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setTagBlog(data);
        });
    }, [query]);
  };

  return {
    blog,
    readBlog,
    HandleReadBlog,
    HandleTagBlog,
    tagBlog,
    setPage,
    page,
    pageCount,
    HomePageBlog,
    isLoading,
  };
};

export default Server;
