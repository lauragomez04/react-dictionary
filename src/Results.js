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
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
