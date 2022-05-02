import React, { useState, useEffect, useCallback } from 'react';

import './style.css';

import Posts from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPost] = useState([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [postsPerPage] = useState(5);

  const noMorePost = page + postsPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleloadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPost(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleloadPosts(0, postsPerPage);
  }, [handleloadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1> SearchValue: {searchValue} </h1>}
        <SearchInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length === 0 && <p>Not found</p>}

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      <div className="button-container">
        {!searchValue && <Button disabled={noMorePost} onClick={loadMorePosts} text="Load more pages" />}
      </div>
    </section>
  );
};

export default Home;
