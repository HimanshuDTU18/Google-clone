import React from "react";
import useGoogleSearch from "./useGoogleSearch";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import Search from "./Search";

import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageIcon from '@mui/icons-material/Image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./SearchPage.css";




function SearchPage() {
  const [{ term  }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  
  console.log(term);

 

  
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google"
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search button={false} />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <NewspaperIcon/>
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Image</Link>
              </div>
              <div className="searchPage__option">
                <ShoppingCartIcon />
                <Link to="shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <LocationOnIcon />
                <Link to="/maps">Location</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
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

      {term &&(<div className="searchPage__results"> 
        <p className="searchPage__resultCount">
          About{data?.searchInformation.formattedTotalResults} results({data.searchInformation.formattedSearchTime}Seconds) for {term}
        </p>

      </div>

    )} 

    {data?.items.map(item=>(
      <div className='searchPage__result'>
        <a href={item.link}>
      

          {item.displayLink}
        </a>
        <a className="searchPage__result Title" href={item.link}>
          <h2>{item.title}</h2>

        </a>
        <p className="searchPage__results snippet">
          {item.snippet}
        </p>
        </div>
    ))}
 
 </div> 
  );
}

export default SearchPage;
