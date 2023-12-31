import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/DataContext";

const GaleryShow = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);

  // Filtrer les données pour trouver la donnée correspondante à l'ID
  const selectedData = data.find((item) => item.id === id);

  if (!selectedData) {
    return <div>Aucune donnée trouvée pour cet ID.</div>;
  }

  return (
    <section className="projectShow">
      <div className="leftContains">
        <h2>{selectedData.id}</h2>
        <h3>
          <span>Technologie :</span> <br /> {selectedData.technologie}
        </h3>
        <h3>
          <span>Mission :</span> <br /> {selectedData.mission}
        </h3>
        <h3>
          <span> Skill développée : </span>
          <br /> {selectedData.skill}
        </h3>
        <div className="linkCode">
          <span>Lien : </span>
          <br />
          <ul>
            <li>
              <i className="fa-brands fa-square-github"></i>{" "}
              <a href={selectedData.github}> Code Github </a>
            </li>
            <li>
              <i className="fa-brands fa-internet-explorer"></i>
              {""}
              <a href={selectedData.siteUrl}> Site web </a>
            </li>
            <li>
              <i className="fa-brands fa-readme"></i>{" "}
              <a href={selectedData.moreInfo}> Readme </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rightContains">
        <figcaption>
          <img src={selectedData.picture} alt={selectedData.id} />
        </figcaption>
      </div>
    </section>
  );
};

export default GaleryShow;
