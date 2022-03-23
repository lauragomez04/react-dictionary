import React from "react";
import Meaning from "./Meaning";
import WordPhonetics from "./WordPhonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <WordPhonetics info={props.results} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
