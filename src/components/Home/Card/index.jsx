import React from "react";
import { Card } from "../../Generic/Card";
import { data } from "../../../mock/card";
import { Wrap } from "./style";

const HomeCard = () => {
  return (
    <Wrap>
      {data.map((value) => {
        return <Card key={value?.id} data={value} />;
      })}
    </Wrap>
  );
};

export default HomeCard;
