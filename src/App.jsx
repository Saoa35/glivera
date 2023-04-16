import "./styles/App.scss";
import AllCustomers from "./Components/AllCustomers/AllCustomers";
import { Dashboard } from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <main>
      <aside>
        <Dashboard />
      </aside>
      <section>
        <div className="greetings">Hello Evano 👋🏼,</div>
        <div className="customers">
          <AllCustomers />
        </div>
      </section>
    </main>
  );
}

export default App;
