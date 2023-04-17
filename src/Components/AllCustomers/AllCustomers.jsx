import { useEffect, useState } from "react";
import styles from "./AllCustomers.module.scss";
import { v4 as uuidv4 } from "uuid";

function AllCustomers() {
  const [customers, setCustomers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const titlesList = [
    "Customer Name",
    "Company",
    "Phone Number",
    "Email",
    "Country",
    "Status",
  ];

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const activeStatus = (customer) => {
    return !customer.address.zipcode.startsWith(
      Math.floor(Math.random() * 10).toString()
    );
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((obj) => setCustomers(obj))
      .catch((error) => console.error(error));
  }, []);

  const customersList = customers
    .filter((obj) => {
      const isActive = activeStatus(obj);
      const searchText = searchValue.toLowerCase();

      return (
        (obj.name && obj.name.toLowerCase().includes(searchText)) ||
        (obj.username && obj.username.toLowerCase().includes(searchText)) ||
        (obj.address &&
          obj.address.zipcode &&
          obj.address.zipcode.includes(searchValue)) ||
        (obj.email && obj.email.toLowerCase().includes(searchText)) ||
        (obj.address &&
          obj.address.city &&
          obj.address.city.toLowerCase().includes(searchText)) ||
        (isActive && isActive.toString().toLowerCase().includes(searchText))
      );
    })
    .map((obj) => {
      const isActive = activeStatus(obj);
      return (
        <div key={uuidv4()} className={styles.template}>
          <p>{obj.name}</p>
          <p>{obj.username}</p>
          <p>{obj.address.zipcode}</p>
          <p>{obj.email}</p>
          <p>{obj.address.city}</p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <span className={isActive ? "active" : "inactive"}>
              {isActive ? (
                <span style={{ display: "inline-block" }}>Active</span>
              ) : (
                <span style={{ display: "inline-block" }}>Inactive</span>
              )}
            </span>
          </p>
        </div>
      );
    });

  return (
    <div className={styles.main_container}>
      <header>
        <div className={styles.title}>
          <p>All Customers</p>
          <p>Active Members</p>
        </div>
        <div className={styles.search}>
          <svg
            className={styles.icon}
            height="32px"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <desc />
            <defs />
            <g
              fill="none"
              fillRule="evenodd"
              id="Page-1"
              stroke="none"
              strokeWidth="1"
            >
              <g fill="#929292" id="icon-111-search">
                <path
                  d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z"
                  id="search"
                />
              </g>
            </g>
          </svg>

          <input
            className={styles.input_field}
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </header>
      <div className={styles.customers_list}>
        <ul className={styles.table_titles}>
          {titlesList.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>

        {customersList}
      </div>
      <footer>
        <p>Showing data 1 to 8 of 256K entries</p>
        <div className="pagination">
          <button>&lt;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>...</button>
          <button>40</button>
          <button>&gt;</button>
        </div>
      </footer>
    </div>
  );
}

export default AllCustomers;
