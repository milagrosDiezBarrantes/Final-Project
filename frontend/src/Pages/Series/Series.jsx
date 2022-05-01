import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

 /* const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
*/

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Series Today</span>
      <div className="Series">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              series={c.series}
              title={c.title || c.name}
              available={c.available}
              collectionURI={c.collectionURI}
              items={c.items}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Series;