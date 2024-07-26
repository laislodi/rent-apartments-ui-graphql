import React, { useState } from "react";
import axios from "axios";
import { Apartment } from "../queries/types";
import { ApartmentCard } from "./ApartmentCard";
import { ApartmentFilter, ApartmentFilterHeader } from "./ApartmentFilterHeader";
import { AllApartments, GET_APARTMENTS } from "../queries/apartments";
import { GRAPHQL_API, headers } from "../queries/auth";

export const ApartmentTileDetails: React.FunctionComponent = () => {
  const [data, setData] = useState<Apartment[]>([]);
  const [filter, setFilter ] = useState<ApartmentFilter>({
    "description": "",
    "bedrooms": "0+",
    "bathrooms": "0+",
    "hasParking": false
  });

  React.useEffect(  () => {
    const fetchData = async () => {
      await axios.request<AllApartments>({
        method: "POST",
        url: GRAPHQL_API,
        headers: headers,
        data: {
          query: GET_APARTMENTS
        }
      }).then(res => {
        setData(res.data.data.findAll);
      }).catch(error => {
        console.log(error);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <ApartmentFilterHeader
        filter={filter}
        setFilter={setFilter}
      />
      <div className={"row"}>
        {data && data.map(apartment =>
          <div key={apartment.id} className="col-sm-6 col-md-4 col-lg-2">
            {ApartmentCard({apartment})}
          </div> )}
      </div>
    </div>
  );
};


