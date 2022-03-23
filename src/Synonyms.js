import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <ul>
          <p>Synonyms:</p>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
