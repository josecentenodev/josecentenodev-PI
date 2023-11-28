import { useState, useEffect } from "react";
import getTeams from "../services/getTeams";

const useTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((teams) => {
      setTeams(teams);
    });
  }, [setTeams]);

  return { teams };
};

export default useTeams