import React from "react";
import { ATABLES } from "./queries";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 50px;
`;

const Atable = () => {
  const { loading, error, data } = useQuery( ATABLES );
  if (loading)
    return (
      <React.Fragment>
        <Helmet>
          <title>Loading | AtableQL</title>
        </Helmet>
        loading...
      </React.Fragment>
    );
  if (error) return "error";
  return (
    <React.Fragment>
      <Container>
        <Helmet>
          <title>AtableQL</title>
        </Helmet>
        {data.atable_all.map(atable => (
          <span>
              {atable.col1} | {atable.col2}
          </span>
        ))}      
      </Container>
    </React.Fragment>
  );
};

export default Atable;
