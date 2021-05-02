import { useState } from "react";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#f2c2Aa");

    return (
        <HashLoader color={color} loading={loading} css={override} size={200} />
    );
}

export default Spinner;
