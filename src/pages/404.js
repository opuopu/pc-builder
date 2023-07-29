import React from "react";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Page not found</h1>
      <div style={{ position: "relative", width: "100%", height: "60vh", maxWidth: "800px" }}>
        <Image
          src="https://www.shutterstock.com/image-vector/error-404-page-datacenter-server-600w-604255535.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
