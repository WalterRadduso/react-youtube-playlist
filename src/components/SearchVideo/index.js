import React, { useContext } from 'react';

// Context
import { HomeContext } from '../../contexts/Home';

// Actions
import { searchVideos } from '../../contexts/Home/actions';

// Ant Design
import { Input } from 'antd';

const { Search } = Input;

const SearchVideo = () => {
  const {
    dispatch,
    state: { searchingVideos },
  } = useContext(HomeContext);

  const handleSearch = async search => {
    await searchVideos(dispatch, search);
  };

  return (
    <div className="search-video">
      <Search
        enterButton
        loading={searchingVideos}
        onSearch={value => handleSearch(value)}
        placeholder="Search videos..."
      />
    </div>
  );
};

export default SearchVideo;
