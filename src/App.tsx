import './App.css';

import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { users } from './lib/data';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="cards-container">
        {users.map(user => (
          <Card
            key={user.id}
            name={`${user.firstName} ${user.lastName}`}
            email={user.email}
            imgUrl={user.image}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default App;
