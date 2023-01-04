import { createContext, useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "./AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const ClientContext = createContext();

export default ClientContext;

export const ClientProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const Navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const someQueryParam = searchParams.get("keyword");



  const [query, setQuery] = useState('')
  const [listing, setListing] = useState([])
  const [searchloading, setSearchLoading] = useState(false)







  //* -------------------------------------------------------------------------- */
  //*                                SUBMIT A JOB                                */
  //* -------------------------------------------------------------------------- */



  let jobSubmit = async (e) => {

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    let response = await axios.post(
      "client/postjob/",
      {
        user: user.user_id,
        job_title: e.job_title,
        category: e.category,
        min_budget: e.min_budget,
        max_budget: e.max_budget,
        skill_required: e.skill_required,
        job_description: e.job_description,
        img: e.img[0],
      },
      config
    );

    if (response.status === 200) {
      Navigate("/");

      console.log("Job Posted");
    } else {
      console.log("Something problem in Posting");
    }
  };
 

  let searchHandler = (e) => {
    if (e) {
      Navigate(`?keyword=${e}&page=1`)
  } else {
      Navigate('/list_job')
  }

}
  let servicesearchHandler = (e) => {
    if (e) {
      Navigate(`?keyword=${e}&page=1`)
  } else {
      Navigate('/list_service')
  }
    setSearchLoading(false)
}

  let contextData = {

    jobSubmit: jobSubmit,
    searchHandler,
    servicesearchHandler,
    query,setQuery,
    listing,setListing,
    searchloading,setSearchLoading

  };
  return (
    <ClientContext.Provider value={contextData}>
      {children}
    </ClientContext.Provider>
  );
};
