import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { options, URL_GEO_API } from "../api";
import classes from "./Search.module.css";


const Search = (props) => {
    const [search, setSearch] = useState(null);

    const changeHandler = (searchData) => {
        setSearch(searchData);
        props.onSearchChange(searchData);
        setSearch(null);
    };

    const loadOptionsHandler = (inpData) => {

        return fetch(`${URL_GEO_API}/cities?minPopulation=1000000&namePrefix=${inpData}`, options)
            .then(response => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.country}`
                        }
                    })

                }
            })
            .catch(err => console.error(err));
            
    };

    return <AsyncPaginate
    className={classes.search}
        placeholder="Search For City"
        debounceTimeout={600}
        value={search}
        onChange={changeHandler}
        loadOptions={loadOptionsHandler}
    />
}

export default Search;