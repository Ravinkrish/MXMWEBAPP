import React from "react";
import "./Home.css";
import { Card, Badge } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ViewEvents from "../ViewEvents/ViewEvents";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];
  const handleClick = () => {
    const myArray = ["item1", "item2", "item3"];
    const myData = { key: "value" };
    navigate("/events", { state: { data, myData } });
  };
  return (
    <div className="home_div">
      <div>
        <div className="home_heading">
          COMPARISON BETWEEN - same show & same episode
        </div>
        <div className="main_card_div">
          <Card
            title={<div className="card_heading_cus">MxM By Telecast</div>}
            bordered={true}
            style={{
              width: 400,
              height: 235,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            hoverable
            onClick={handleClick}
          >
            <ResponsiveContainer
              style={{ position: "absolute", left: "-8px", top: "65px" }}
              width="100%"
              height={150}
            >
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F60"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2985C1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="badge_container">
              <span className="badge_text">200 Views</span>
            </div>
          </Card>
          <Card
            title={<div className="card_heading_cus">MxM Competitive</div>}
            bordered={true}
            style={{
              width: 400,
              height: 235,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <ResponsiveContainer
              style={{ position: "absolute", left: "-8px", top: "65px" }}
              width="100%"
              height={150}
            >
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F60"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2985C1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="badge_container">
              <span className="badge_text">200 Views</span>
            </div>
          </Card>
          <Card
            title={<div className="card_heading_cus">MxM Demographic</div>}
            bordered={true}
            style={{
              width: 400,
              height: 235,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <ResponsiveContainer
              style={{ position: "absolute", left: "-8px", top: "65px" }}
              width="100%"
              height={150}
            >
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F60"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2985C1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="badge_container">
              <span className="badge_text">200 Views</span>
            </div>
          </Card>
          <Card
            title={<div className="card_heading_cus">MxM Demographic</div>}
            bordered={true}
            style={{
              width: 400,
              height: 235,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <ResponsiveContainer
              style={{ position: "absolute", left: "-8px", top: "65px" }}
              width="100%"
              height={150}
            >
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F60"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2985C1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="badge_container">
              <span className="badge_text">200 Views</span>
            </div>
          </Card>
        </div>
      </div>
      <br />
      <div className="Border_width"></div>
      <br />
      <div>
        <div className="home_heading">
          COMPARISON BETWEEN - DIFFERENT show & DIFFERENT episode
        </div>
        <div className="main_card_div">
          <Card
            title={<div className="card_heading_cus">MxM By Telecast</div>}
            bordered={true}
            style={{
              width: 400,
              height: 235,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <ResponsiveContainer
              style={{ position: "absolute", left: "-8px", top: "65px" }}
              width="100%"
              height={150}
            >
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F60"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2985C1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="badge_container">
              <span className="badge_text">200 Views</span>
            </div>
          </Card>
          <Card
            title={<div className="card_heading_cus">MxM Competitive</div>}
            bordered={true}
            style={{
              width: 400,
              height: 235,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <ResponsiveContainer
              style={{ position: "absolute", left: "-8px", top: "65px" }}
              width="100%"
              height={150}
            >
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F60"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2985C1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="badge_container">
              <span className="badge_text">200 Views</span>
            </div>
          </Card>
          <Card
            title={<div className="card_heading_cus">MxM Demographic</div>}
            bordered={true}
            style={{
              width: 400,
              height: 235,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <ResponsiveContainer
              style={{ position: "absolute", left: "-8px", top: "65px" }}
              width="100%"
              height={150}
            >
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F60"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2985C1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="badge_container">
              <span className="badge_text">200 Views</span>
            </div>
          </Card>
          <Card
            title={
              <div className="card_heading_cus">MxM Demographic Age Bands</div>
            }
            bordered={true}
            style={{
              width: 400,
              height: 235,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <ResponsiveContainer
              style={{ position: "absolute", left: "-8px", top: "65px" }}
              width="100%"
              height={150}
            >
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F60"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2985C1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="badge_container">
              <span className="badge_text">200 Views</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
