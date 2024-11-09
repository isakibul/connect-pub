import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSeniors = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/api/seniors");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchSeniors;
