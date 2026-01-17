// import { useState } from "react";
// import "./ProductGallery.css";

// const ProductGallery = ({ images }) => {
//   const [activeImg, setActiveImg] = useState(images[0]);

//   return (
//     <div className="product-gallery">
//       <div className="gallery-main">
//         <img src={activeImg} alt="product" />
//       </div>

//       <div className="gallery-thumbs">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt="thumb"
//             className={activeImg === img ? "active" : ""}
//             onClick={() => setActiveImg(img)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductGallery;











// import React, { useState } from "react";
// import "./ProductGallery.css";

// const ProductGallery = ({ images }) => {
//   const [activeImg, setActiveImg] = useState(images[0]);
//   const [zoomStyle, setZoomStyle] = useState({});

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } =
//       e.currentTarget.getBoundingClientRect();

//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;

//     setZoomStyle({
//       transform: "scale(2)",
//       transformOrigin: `${x}% ${y}%`,
//     });
//   };

//   const handleMouseLeave = () => {
//     setZoomStyle({
//       transform: "scale(1)",
//       transformOrigin: "center",
//     });
//   };

//   return (
//     <div className="pg-wrapper">

//       {/* THUMBNAILS */}
//       <div className="pg-thumbs">
//         {images.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt="thumb"
//             className={activeImg === img ? "active" : ""}
//             onClick={() => setActiveImg(img)}
//           />
//         ))}
//       </div>

//       {/* MAIN IMAGE */}
//       <div
//         className="pg-main"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         <img
//           src={activeImg}
//           alt="product"
//           style={zoomStyle}
//         />
//       </div>

//     </div>
//   );
// };

// export default ProductGallery;



















// import React, { useState } from "react";
// import "./ProductGallery.css";

// const ProductGallery = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomStyle, setZoomStyle] = useState({});
//   const [openModal, setOpenModal] = useState(false);

//   const activeImg = images[activeIndex];

//   /* ZOOM FOLLOW MOUSE */
//   const handleMouseMove = (e) => {
//     const { left, top, width, height } =
//       e.currentTarget.getBoundingClientRect();

//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;

//     setZoomStyle({
//       transform: "scale(2)",
//       transformOrigin: `${x}% ${y}%`,
//     });
//   };

//   const handleMouseLeave = () => {
//     setZoomStyle({
//       transform: "scale(1)",
//       transformOrigin: "center",
//     });
//   };

//   /* MODAL NAV */
//   const nextImg = () => {
//     setActiveIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImg = () => {
//     setActiveIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <>
//       <div className="pg-wrapper">

//         {/* THUMBNAILS */}
//         <div className="pg-thumbs">
//           {images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt="thumb"
//               className={activeIndex === i ? "active" : ""}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>

//         {/* MAIN IMAGE */}
//         <div
//           className="pg-main"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => setOpenModal(true)}
//         >
//           <img
//             src={activeImg}
//             alt="product"
//             style={zoomStyle}
//           />
//         </div>
//       </div>

//       {/* FULLSCREEN MODAL */}
//       {openModal && (
//         <div className="pg-modal">
//           <button className="pg-close" onClick={() => setOpenModal(false)}>✕</button>

//           <button className="pg-arrow left" onClick={prevImg}>‹</button>

//           <img src={activeImg} alt="fullscreen" className="pg-modal-img" />

//           <button className="pg-arrow right" onClick={nextImg}>›</button>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductGallery;












import React, { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});
  const [modalZoom, setModalZoom] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const activeImg = images[activeIndex];

  /* ===== PAGE IMAGE ZOOM ===== */
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transform: "scale(2)",
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const resetZoom = () =>
    setZoomStyle({ transform: "scale(1)" });

  /* ===== MODAL IMAGE ZOOM ===== */
  const handleModalMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setModalZoom({
      transform: "scale(2.2)",
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const resetModalZoom = () =>
    setModalZoom({ transform: "scale(1)" });

  /* NAV */
  const nextImg = () =>
    setActiveIndex((p) => (p + 1) % images.length);

  const prevImg = () =>
    setActiveIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <>
      <div className="pg-wrapper">

        {/* THUMBS */}
        <div className="pg-thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={i === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div
          className="pg-main"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetZoom}
          onClick={() => setOpenModal(true)}
        >
          <img src={activeImg} alt="" style={zoomStyle} />
        </div>
      </div>

      {/* ===== FULLSCREEN MODAL ===== */}
      {openModal && (
        <div className="pg-modal">
          <button className="pg-close" onClick={() => setOpenModal(false)}>✕</button>
          <button className="pg-arrow left" onClick={prevImg}>‹</button>

          <div
            className="pg-modal-img-box"
            onMouseMove={handleModalMove}
            onMouseLeave={resetModalZoom}
          >
            <img
              src={activeImg}
              alt=""
              className="pg-modal-img"
              style={modalZoom}
            />
          </div>

          <button className="pg-arrow right" onClick={nextImg}>›</button>
        </div>
      )}
    </>
  );
};

export default ProductGallery;
