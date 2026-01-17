// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SearchOverlay.css";

// const SearchOverlay = ({ onClose }) => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const submit = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     navigate(`/search?query=${query}`);
//     onClose();
//   };

//   return (
//     <div className="search-overlay">
//       {/* TOP BAR */}
//       <div className="search-top">
//         <button className="close-btn" onClick={onClose}>
//           ✕ Close
//         </button>
//       </div>

//       {/* CENTER */}
//       <div className="search-center">
//         <form onSubmit={submit}>
//           <input
//             type="text"
//             placeholder="Search"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             autoFocus
//           />
//           <button type="submit">→</button>
//         </form>

//         <div className="recent">
//           <p className="recent-title">Recently searched</p>
//           <span>sunglasses</span>
//           <span>premium section</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchOverlay;














// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SearchOverlay.css";

// const SearchOverlay = ({ onClose }) => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const submit = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     navigate(`/search?query=${query}`);
//     onClose();
//   };

//   return (
//     <div className="search-overlay">
//       <div className="search-top">
//         <button onClick={onClose} className="close-btn">
//           ✕ Close
//         </button>
//       </div>

//       <div className="search-center">
//         <form onSubmit={submit}>
//           <input
//             type="text"
//             placeholder="Search"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             autoFocus
//           />
//           <button type="submit">→</button>
//         </form>

//         <div className="recent">
//           <p>Recently searched</p>
//           <span>sunglasses</span>
//           <span>premium section</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchOverlay;





















// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SearchOverlay.css";

// const SearchOverlay = ({ onClose, onSearch }) => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const submitSearch = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     onSearch(query);   // goes to /search?query=
//     onClose();
//   };

//   return (
//     <div className="search-overlay">
//       {/* TOP BAR */}
//       <form className="search-top" onSubmit={submitSearch}>
//         <input
//           autoFocus
//           type="text"
//           placeholder="Search on CorVex.com"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />

//         <button type="button" onClick={onClose}>
//           CLOSE
//         </button>
//       </form>

//       <hr />

//       {/* BODY */}
//       <div className="search-body">
//         <div className="search-col">
//           <h4>HIGHLIGHTS</h4>
//           <p>Gifts</p>
//           <p>Linea Rossa</p>
//         </div>

//         <div className="search-col">
//           <h4>HIGHLIGHTS</h4>

//           {/* 👇 FIXED LINKS */}
//           <p
//             onClick={() => {
//               navigate("/men");
//               onClose();
//             }}
//           >
//             New Arrivals For Him
//           </p>

//           <p
//             onClick={() => {
//               navigate("/women");
//               onClose();
//             }}
//           >
//             New Arrivals For Her
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchOverlay;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchOverlay.css";

const SearchOverlay = ({ onClose, onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
    onClose();
  };

  const goTo = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="search-overlay">
      {/* TOP BAR */}
      <form className="search-top" onSubmit={submitSearch}>
        <input
          autoFocus
          type="text"
          placeholder="Search on CorVex.com"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="button" onClick={onClose}>
          CLOSE
        </button>
      </form>

      <hr />

      {/* BODY */}
      <div className="search-body">
        <div className="search-col">
          <h4>HIGHLIGHTS</h4>

          <p onClick={() => goTo("/gifts")}>
            Gifts
          </p>

          <p onClick={() => goTo("/new-arrivals")}>
             Limited Edition
          </p>

          <p onClick={() => goTo("/limited-edition")}>
            Linea Rossa
          </p>
        </div>

        <div className="search-col">
          <h4>HIGHLIGHTS</h4>

          <p onClick={() => goTo("/men")}>
            New Arrivals For Him
          </p>

          <p onClick={() => goTo("/women")}>
            New Arrivals For Her
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
