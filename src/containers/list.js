import React from 'react';
import { useSelector } from "react-redux";
import ListModule from 'modules/list';

const ListPage = () => {
  const list = useSelector(state => state.InformationsReducer)?.infoData || [];

  return <ListModule list={list} />;
};

export default ListPage;
