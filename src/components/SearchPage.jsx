import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "../css/SearchPage.css";

import useGoogleSearch from "../hooks/useGoogleSearch";
import { useStateValue } from "../StateProvider";
// import Response from "../response.js";
import Search from "./Search";

const SearchPage = () => {
  const [{ term }, _] = useStateValue();
  const { data } = useGoogleSearch(term);

  // const data = Response;
  // console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            alt=""
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons prevValue={term} />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/search">All</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div className="searchPage__result">
              <a href={item.link}>
                {/* {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )} */}
                {item.displayLink}
                <img
                  className="searchPage__result--dropdown"
                  src="https://www.flaticon.com/svg/vstatic/svg/60/60995.svg?token=exp=1614117615~hmac=b0cf2a2ba5900cf154de8b5d7bea0592"
                  alt=""
                />
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
