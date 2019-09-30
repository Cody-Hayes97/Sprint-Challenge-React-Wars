import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";

export default function People() {
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        setPage(page);
        setPerson(response.data.results);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="people">
      <button
        onClick={useEffect(() => {
          setPage(page + 1);
        })}
      >
        Next Page
      </button>
      {person.map(people => {
        return (
          <PersonCard
            name={people.name}
            height={people.height}
            url={people.url}
            birth_year={people.birth_year}
            eye_color={people.eye_color}
            skin_color={people.skin_color}
          />
        );
      })}
    </div>
  );
}
