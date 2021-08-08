import React, { useEffect } from "react";
import Tmdb from "./Tmdb";

const App = () => {
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      console.log(list);
    };

    loadAll();
  }, []);
  return <div>olá mundo</div>;
};
export { App };
