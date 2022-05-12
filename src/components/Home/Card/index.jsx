import React from "react";
import { useAxios } from "../../../hooks/useAxios";
import { Card } from "../../Generic/Card";
import { Wrap } from "./style";
import { useQuery } from "react-query";
import { useProductContext } from "../../../context/Product";

const HomeCard = () => {
  const { request } = useAxios();
  const [{ allProduct }, dispatch] = useProductContext();

  useQuery(["getProduct"], () => request({}), {
    onSuccess: (res) => {
      dispatch({ type: "getAllProduct", payload: { data: res?.data?.data } });
    },
    onError: (err) => console.log(err, "getproduct"),
  });

  return (
    <Wrap>
      {allProduct?.map((value) => {
        return <Card key={value?._id} data={value} />;
      })}
    </Wrap>
  );
};

export default HomeCard;
