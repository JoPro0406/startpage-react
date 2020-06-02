import React from "react";

import ytIcon from "./icons/yt.png";
import redditIcon from "./icons/reddit.png";
import crIcon from "./icons/crunchyroll.png";
import cottaIcon from "./icons/cotta.png";
import gmailIcon from "./icons/gmail.png";
import nineanimeIcon from "./icons/9anime.png";

const FAVORITES = [
  {
    name: "YouTube",
    url: "https://youtube.com/",
    icon: ytIcon,
  },
  {
    name: "Crunchyroll",
    url: "https://crunchyroll.com/",
    icon: crIcon,
  },
  {
    name: "9anime",
    url: "https://9anime.to",
    icon: nineanimeIcon,
  },
  {
    name: "CottaGym",
    url: "http://cottagym.selfhost.eu/",
    icon: cottaIcon,
  },
  {
    name: "Gmail",
    url: "https://mail.google.com",
    icon: gmailIcon,
  },
  {
    name: "Reddit",
    url: "https://reddit.com/",
    icon: redditIcon,
  },
];

const Favorites = () => {
  return (
    <div className="favorites-container">
      {FAVORITES.map((favorite) => (
        <div
          className="favorite-item"
          onClick={() => (window.location.href = favorite.url)}>
          <img src={favorite.icon} alt="" className="favorite-item-icon" />
          <p>{favorite.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
