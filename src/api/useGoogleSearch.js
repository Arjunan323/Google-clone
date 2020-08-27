import React, { useState, useEffect } from "react";
import API_KEY from "./key";

const CONTEXT_KEY = "dce105417a6f04196";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`;
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
