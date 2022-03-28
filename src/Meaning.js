import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <br />
                <em>Example: {definition.example}</em>
              </p>
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
