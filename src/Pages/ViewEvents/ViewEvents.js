import { react, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ViewEvents.css";
import { Checkbox, Button, Modal, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import refreshSvg from "../../Images/events/refresh.svg";
import filterSvg from "../../Images/events/filter.svg";
import downLoadSvg from "../../Images/events/download.svg";
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
const ViewEvents = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const location = useLocation();
  const { data, myData } = location.state || { data: [], myData: {} };
  console.log("myArray", data, myData);
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  var myArray = [
    {
      name: "Ratings / Average Audience for Episode ",
      uv: "24 %",
      pv: "22 %",
      amt: 2400,
    },
    {
      name: "% Change from Season Premiere",
      uv: "24 %",
      pv: "22 %",
      amt: 2210,
    },
    {
      name: "% Change from Prior Season Same Episode #",
      uv: "24 %",
      pv: "22 %",
      amt: 2290,
    },
    { name: "% Change from Panel Data", uv: "24 %", pv: "22 %", amt: 2000 },
  ];
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <div class="row" style={{ padding: "10px" }}>
        <div className="col-9">
          <div className="event_div">
            <div className="event_heading">
              MINUTE X MINUTE BY TELECAST (LIVE +SD)
            </div>
            <div className="border_line"></div>
            <div>
              <Checkbox onChange={onChange}>
                <span className="second_heading">HighLight Events</span>
              </Checkbox>
            </div>
            <div className="border_line"></div>
            <div>
              <img src={refreshSvg} />
            </div>
            <div style={{ lineHeight: "24px" }} className="second_heading">
              {" "}
              Last update: hh:mm mm/dd/yy from Source
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="event_div">
            <div className="border_line"></div>
            <div style={{ cursor: "pointer" }}>
              <img onClick={() => setModal1Open(true)} src={filterSvg} />
            </div>
            <div style={{ lineHeight: "26px" }} className="second_heading">
              Filters
            </div>
            <div className="border_line"></div>
            <div>
              <img src={downLoadSvg} />
            </div>
            <div style={{ lineHeight: "26px" }} className="second_heading">
              Dowload PDF
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "210px" }}>
        <ResponsiveContainer
          style={{ position: "absolute", left: "30px" }}
          width="95%"
          height={230}
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
      </div>
      <br />
      <div className="border_width_2"></div>
      <div style={{ padding: "10px" }} class="row">
        <div class="col-4 event_heading">EPISODE METRICS</div>
        <div class="col-4">
          <Checkbox onChange={onChange}>
            <span className="second_heading">Nelson Panel Data</span>
          </Checkbox>
        </div>
        <div class="col-4">
          <Checkbox onChange={onChange}>
            <span className="second_heading">Nelson Big Data</span>
          </Checkbox>
        </div>
      </div>
      <div>
        <table className="data-table">
          <thead>
            <tr>
              <th className="third_heading">Episode Details</th>
              <th className="third_heading">
                Popular news show that delivers the latest news, interviews
                updates
              </th>
              <th className="third_heading">
                Popular news show that delivers the latest news, interviews
                updates
              </th>
            </tr>
          </thead>
          <tbody>
            {myArray.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.uv}</td>
                <td>{item.pv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title={<div className="model_heading">FILTERS</div>}
        style={{
          top: 120,
          left: 370,
          //   bottom:10,
        }}
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
        footer={[
          <Button key="cancel" onClick={() => setModal1Open(false)}>
            Cancel
          </Button>,
          <Button
            key="customOk"
            type="primary"
            style={{backgroundColor:'#313265'}}
            onClick={() => setModal1Open(false)}
          >
            Apply
          </Button>,
        ]}
      >
        <br />
        <div style={{ position: "relative", left: "22px" }} class="row">
          <div class="col-5 dropdown_gap">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Program Name
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Brodacast Date
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Annotation display
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Axis Selection
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Category
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Content type
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Sustaining Program Flag
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Head of HouseHold
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div class="border_line_3 col-1"></div>
          <div class="col-5 dropdown_gap">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Person Age Range
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Person Gender Description
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Person Occupation
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Person Education
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  HouseHold Presence
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  HouseHold Income
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  HouseHold Country Size
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Button
                className="button_class_modal"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  DMA Rank
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewEvents;
