import { useEffect, useState} from "react";

async function fetchData(from,to) {
    const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`);
    const data = await response.json();
    return data[to];
  }
  
  function useCurrencyInfo(from,to) {
    const [data, setData] = useState({});
  
    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          const result = await fetchData(from,to);
          setData(result);
          console.log(result);
        } catch (error) {
          console.error('Error fetching currency data:', error);
        }
      };
  
      fetchDataAsync();
    }, [from,to]);

    return data;
  }

export default useCurrencyInfo;