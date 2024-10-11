import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Your Cards</h1>
      <ul>
        <li>No cards available yet</li>
      </ul>
      <Link to ="/addcard">
        <button>Add new card</button>
      </Link>
    </div>
  );
};

export default Home;