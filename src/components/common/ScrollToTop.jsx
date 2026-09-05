import React, { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi"; // ✅ Changed from BiArrowUp

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            background: "#149ddd",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            zIndex: 1000,
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          <BiChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
