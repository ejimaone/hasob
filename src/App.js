import UnauthenticatedRouter from "./components/unauthenticated-router";
import AuthenticatedRouter from "./components/authenticated-router";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div className="">
      {isLoggedIn ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}
    </div>
  );
}

export default App;
