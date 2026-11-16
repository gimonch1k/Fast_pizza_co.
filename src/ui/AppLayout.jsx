import { Outlet, useNavigation } from "react-router";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Spinner from "./Spinner";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Spinner />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
