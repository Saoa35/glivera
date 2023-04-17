import "./styles/App.scss";
import AllCustomers from "./Components/AllCustomers/AllCustomers";
import { Dashboard } from "./Components/Dashboard/Dashboard";

function App() {
  const userName = "Evano";
  const occupation = "Project Manager";

  return (
    <main>
      <aside>
        <Dashboard occupation={occupation} userName={userName} />
      </aside>
      <section>
        <div className="greetings">Hello {userName} 👋🏼,</div>
        <div className="customers">
          <AllCustomers />
        </div>
      </section>
    </main>
  );
}

export default App;
