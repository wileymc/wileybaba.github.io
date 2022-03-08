import React from "react";
import "css-doodle";

export default function Doodle({ width = "68px" }) {
  const gridColumns = 9;
  return (
    <css-doodle>
      {`:doodle {
            @grid: ${gridColumns} / ${width};
        }
        clip-path: @shape(
            fill: evenodd;
            points: 36;
            scale: .45;
            x: cos(9t) + cos(3t);
            y: sin(9t) + sin(5t);
        );
        --hue: calc(70 + 5 * @row * @col);
        background: hsl(var(--hue), 70%, 80%);
        transition: @r(2s) ease-in;
  `}
    </css-doodle>
  );
}
