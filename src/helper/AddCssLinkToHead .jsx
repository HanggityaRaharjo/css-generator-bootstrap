import React, { useEffect } from "react";

const AddCssLinkToHead = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "http://localhost:8000/bootstrap-test/css/styles.css"; // Ganti dengan tautan CSS yang ingin ditambahkan
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Menghapus tautan CSS saat komponen dibongkar
      // document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default AddCssLinkToHead;
