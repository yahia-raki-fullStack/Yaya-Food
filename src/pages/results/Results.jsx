/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useParams } from "react-router-dom";
import ResultsCards from "../../components/ResultsComponents/ResultsCards";
import apiCall from "../../utility/apiCall";
import ErrorPage from "../error/Error";

function Results() {
  const { SearchQuery } = useParams();
  const loadedData = useLoaderData();
  const { hits } = loadedData;

  if (!hits || hits.length <= 0) {
    return <ErrorPage />;
  }

  const formattedQuery = SearchQuery.replace(":", "");
  return (
    <>
      {" "}
      <h1 className="text-center  text-red-950 text-xl mb-12 mt-6  md:text-2xl bg-white ">
        Results for <span className=" text-cyan-500">{formattedQuery}</span>
      </h1>
      <ul
        className="grid 
       mt-4  min-h-screen gap-5 justify-center items-center md:grid-cols-2 md:grid-rows-2 md:gap-12 md:m-auto md:mx-8 lg:grid-cols-3 lg:grid-rows-3 lg:gap-14 lg:m-auto lg:mx-10"
      >
        {" "}
        {hits.map((results) => (
          <ResultsCards key={results.recipe.shareAs} results={results} />
        ))}
      </ul>
    </>
  );
}

export default Results;
export async function loader({ params }) {
  const apiData = await apiCall(params.SearchQuery);

  return apiData;
}
