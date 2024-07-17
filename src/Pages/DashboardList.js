import React from "react";
import {ReactComponent as ValidatorImg} from "../Images/DashboardImages/Validator_card.svg";
import {ReactComponent as QualityImg} from "../Images/DashboardImages/Quality_card.svg";
import {ReactComponent as ObservImg} from "../Images/DashboardImages/Observability_card.svg";
import {ReactComponent as DvtImg} from "../Images/DashboardImages/DVT_card.svg";
import {ReactComponent as IngestionImg} from "../Images/DashboardImages/DataIngestion_card.svg";
import {ReactComponent as ConnectorImg} from "../Images/DashboardImages/DataConnector_card.svg";

export const dashboardList = [
    {
        imageUrl: <ValidatorImg />,
        id: 1,
        title: "Data Validator",
        views: 122,
        webLink: "http://fdpp.factspanapps.com:8501",
        description: "Validates data across diverse platforms, supported by a potent python-based API covering metrics like Look Up Rate, Match Rate, Disconnects, Missing Fields, and Columns.",
        valTitle : 'data_validator'
    },
    {
        imageUrl: <QualityImg />,
        id: 2,
        title: "Data Quality",
        views: 89,
        webLink: "http://fdpp.factspanapps.com:5009",
        description: "Empowers end-users to monitor and maintain data quality, supported by a potent python-based API covering List of Values, Duplicates, and Data Type checks.",
        valTitle : 'data_quality' 
    },
    {
        imageUrl: <ObservImg />,
        id:3,
        title: "Data Observability",
        views: 63,
        webLink: "http://fdpp.factspanapps.com:5002",
        description: "Powerful Python-based API, monitors and adjusts the current data state, covering metrics like Row Count, Data Freshness, Null Rate, Unique Rate, and Threshold.",
        valTitle : 'data_observability'
    },
    {
        imageUrl: <DvtImg />,
        id:4,
        title: "Data Veracity Tool",
        views: 27,
        webLink: "https://dvt.factspanapps.com/portal/welcome",
        description: "Aids diverse data management across systems, demanding vigilant oversight to guarantee accuracy and maintain data integrity.",
        valTitle : 'data_veracity'
    },
    {
        imageUrl: <IngestionImg />,
        id:5,
        title: "Data Ingestion (loader)",
        views: 118,
        webLink: "http://fdpp.factspanapps.com:5010",
        description: "Transfers selected file data between source and target platforms, smoothly adapting to diverse cloud and on-premise systems with minimal configuration adjustments.",
        valTitle : 'data_ingestion'
    },
    {
        imageUrl: <ConnectorImg />,
        id:6,
        title: "Data Connector",
        views: 71,
        webLink: "http://fdpp.factspanapps.com:5000",
        description: "Streamlines connection object retrieval, allowing users to specify connection type and access details, facilitating diverse source and target platform connections.",
        valTitle : 'data_connector'
    },

]

export const allDocLink = "https://drive.google.com/file/d/13XLXqHAof2E1wHG5sCF8kUoVSWH_c7Be/view?usp=sharing"