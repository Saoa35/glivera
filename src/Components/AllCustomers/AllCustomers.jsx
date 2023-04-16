import { useEffect, useState } from "react";
import styles from "./AllCustomers.module.scss";
import { v4 as uuidv4 } from "uuid";

function AllCustomers() {
  const [customers, setCustomers] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((obj) => setCustomers(obj))
      .catch((error) => console.error(error));
  }, []);

  const customersList = customers.map((obj) => (
    <div key={uuidv4()} className="template">
      <p>{obj.name}</p>
      <p>{obj.username}</p>
      <p>{obj.address.zipcode}</p>
      <p>{obj.email}</p>
      <p>{obj.address.city}</p>
      <p>Active</p>
    </div>
  ));

  const titlesList = [
    "Customer Name",
    "Company",
    "Phone Number",
    "Email",
    "Country",
    "Status",
  ];

  return (
    <div className={styles.main_container}>
      <header>
        <div className={styles.title}>
          <p>All Customers</p>
          <p>Active Members</p>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
        </div>
      </header>
      <div className={styles.customers_block}>
        <div className={styles.customers_list}>
          <ul className={styles.table_titles}>
            {titlesList.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>

          {customersList}
        </div>
      </div>
    </div>
  );
}

export default AllCustomers;
