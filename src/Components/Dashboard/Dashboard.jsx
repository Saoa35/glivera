import { useState } from "react";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles.board_container}>
      <div className={styles.title}>
        <div>
          <svg
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path d="M219.87305,66.73877l-83.99951-47.478a16.08622,16.08622,0,0,0-15.74659,0l-84.00049,47.478A16.02543,16.02543,0,0,0,28,80.66748v94.665a16.02488,16.02488,0,0,0,8.127,13.92871l83.99951,47.478a16.08208,16.08208,0,0,0,15.74659,0l84-47.478A16.02531,16.02531,0,0,0,228,175.33252v-94.665A16.02531,16.02531,0,0,0,219.87305,66.73877ZM212,175.33252l-84,47.478-84-47.478v-94.665l84-47.478,84,47.478ZM84,128a44,44,0,1,0,44-44A44.04978,44.04978,0,0,0,84,128Zm72,0a28,28,0,1,1-28-28A28.03146,28.03146,0,0,1,156,128Z" />
          </svg>
        </div>
        <p>
          Dashboard <span>v.01</span>
        </p>
      </div>
      <div className={styles.board_list}>
        <ul>
          <li
            className={selectedIndex === 0 ? "isChosen" : ""}
            onClick={() => handleItemClick(0)}
          >
            <div>
              <p className="svgStyle"></p>
              <p>Dashboard</p>
            </div>
          </li>
          <li
            className={selectedIndex === 1 ? "isChosen" : ""}
            onClick={() => handleItemClick(1)}
          >
            <div>
              <p className="svgStyle"></p>
              <p>Product</p>
            </div>
            <p>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#9197B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </li>
          <li
            className={selectedIndex === 2 ? "isChosen" : ""}
            onClick={() => handleItemClick(2)}
          >
            <div>
              <p className="svgStyle"></p>
              <p>Customers</p>
            </div>
            <p>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#9197B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </li>
          <li
            className={selectedIndex === 3 ? "isChosen" : ""}
            onClick={() => handleItemClick(3)}
          >
            <div>
              <p className="svgStyle"></p>
              <p>Income</p>
            </div>
            <p>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#9197B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </li>
          <li
            className={selectedIndex === 4 ? "isChosen" : ""}
            onClick={() => handleItemClick(4)}
          >
            <div>
              <p className="svgStyle"></p>
              <p>Promote</p>
            </div>
            <p>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#9197B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </li>
          <li
            className={selectedIndex === 5 ? "isChosen" : ""}
            onClick={() => handleItemClick(5)}
          >
            <div>
              <p className="svgStyle"></p>
              <p>Help</p>
            </div>
            <p>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#9197B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.board_footer}>
        <div></div>
        <div>
          <p>Evano</p>
          <p>Project Manager</p>
        </div>
      </div>
    </div>
  );
};
