/* eslint-disable react/prop-types */

import styles from "./ResultsCards.module.css";
// eslint-disable-next-line react/prop-types
function ResultsCards({ results }) {
  // eslint-disable-next-line react/prop-types
  const {
    label,

    images: {
      REGULAR: { url: img },
    },
    url,
  } = results.recipe;
  // console.log(results);

  return (
    <>
      {" "}
      <li className={styles.card}>
        <img src={img} className="w-full h-full " />
        <div className={styles.card__content}>
          <p className={styles.card__title}>{label}</p>
          <p className={styles.card__description}>
            CLICK THE LINK BELLOWE TO FIND {label} instruction
          </p>
          <a
            target="_blank"
            href={url}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            instruction
          </a>
        </div>
      </li>{" "}
    </>
  );
}

export default ResultsCards;
