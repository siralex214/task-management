"use client";

import { useQuery } from "@apollo/client";
import { GET_TASKS_BY_USER } from "@query/Tasks";
import React from "react";

const QueryComponent = () => {
  const { data, loading, error } = useQuery(GET_TASKS_BY_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return <div>QueryComponent</div>;
};

export default QueryComponent;
