import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import searchIcon from "../Images/searchIcon.svg";
import cardClick from "../Images/Card_click.svg";
import { getApiUrl } from '../apiEndpoints';
// import LoadingImage from '../Images/loading-waiting.gif'
import LoadingImage from '../Images/loading.gif'
import { ReactComponent as ValidatorImg } from "../Images/DashboardImages/Validator_card.svg";
import { ReactComponent as QualityImg } from "../Images/DashboardImages/Quality_card.svg";
import { ReactComponent as ObservImg } from "../Images/DashboardImages/Observability_card.svg";
import { ReactComponent as DvtImg } from "../Images/DashboardImages/DVT_card.svg";
import { ReactComponent as IngestionImg } from "../Images/DashboardImages/DataIngestion_card.svg";
import { ReactComponent as ConnectorImg } from "../Images/DashboardImages/DataConnector_card.svg";
import Info from "../Images/InfoIcon.svg";
import Doc from "../Images/DocIcon.svg";
import { Tooltip } from "react-tooltip";
import {allDocLink} from "../Pages/DashboardList";

const imageComponents = {
  "Data Validator": ValidatorImg,
  "Data Quality": QualityImg,
  "Data Observability": ObservImg,
  "Data Veracity Tool": DvtImg,
  "Data Ingestion (loader)": IngestionImg,
  "Data Connector": ConnectorImg
};

const Dashboard = () => {
  const [dashboardList, setDashboardList] = useState([])
  const [loading, setLoading] = useState(true);

  const handleViewCount = async (module) => {
    try {
      let countApi = await fetch(getApiUrl('/update_views'),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: module
          }),
        }
      );
      let countResponse = await countApi.json();
      console.log("countResponse - ", countResponse)
      setDashboardList(countResponse)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const getViewDetails = async () => {
    try {
      setLoading(true)
      let response = await fetch(getApiUrl('/get_views'),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let viewDetails = await response.json();
      console.log("viewDetails - ", viewDetails)
      setDashboardList(viewDetails)
      setLoading(false) 
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false) 
    }
  }

  useEffect(() => {
    getViewDetails();
  }, [])

  console.log("Dashboard");
  return (
    <div className="dashboard-main">
      {loading ? ( 
        <div className="loading-image"><img className="image" src={LoadingImage} alt="Loading" /></div>
      ) : ( 
        <>
          <div className="row mb-3">
            <div className="col-11">
              <span className="search-main">
                <img className="mx-2" src={searchIcon} alt="search" />
              </span>
              <input type="text" className="dashboard-input" placeholder="Search" />
            </div>
            <div className="col-1 tooltip-container">
              <a href={allDocLink} target="_blank" rel="noreferrer"><img className="info-icon" data-tooltip-id="target-element" data-tooltip-content="FDPP Understanding Document" src={Info} alt="Info" /></a>
              <Tooltip id="target-element" style={{background:"#313265", color:"#fff",width:"175px"}} opacity={1} />
            </div>
          </div>
          <div className="dashboard-card-list mb-2">
            <div className="row mt-2" style={{ margin: "5px" }}>
              {dashboardList.map((item) => {
                const ServiceImage = imageComponents[item?.service_name];
                return (
                  <div className="col-4 mt-3" key={item?.service_id}>
                    <div className="card dash-card">
                      <div className="card-body dash-card-body">
                        <div className="card-img-main">
                          <div className="card-img">
                            <a
                              href={item.weblink}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => handleViewCount(item.service_id)}
                            >
                              {" "}
                              <ServiceImage />
                            </a>
                          </div>
                          <div className="card-click">
                            <a href={item.weblink} target="_blank" rel="noreferrer"><img src={cardClick} alt="hover" onClick={() => handleViewCount(item.service_id)} /> </a>
                          </div>
                        </div>
                        <div>
                          <h5 className="card-title dash-card-title">
                            {item?.service_name}
                          </h5>
                          <p className="card-text dash-card-text">
                            {item?.description}
                          </p>
                          <span className="dash-card-views">
                            {item.views} views
                          </span>
                           <a href={item?.doc_link} target="_blank" rel="noreferrer"><img className="dash-card-doc"  data-tooltip-id={item.service_id}  data-tooltip-content={`${item.service_name} Understanding Doc`} src={Doc} alt="doc" /></a>
                          <Tooltip className="dash-tooltip" id={item.service_id} style={{background:"#313265", color:"#fff",width:"175px"}} opacity={1} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="row mt-3 dash-card" style={{ margin: "15px" }}>
              <div className="col-12 mt-2 other-text">
                Apart from these data products, we have the relevant documentation for Log Analyzer and Application Tracker available on <span> <a href="https://factihub.factspanapps.com/" rel="noreferrer" target="_blank">Factihub.</a></span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
