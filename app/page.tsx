import { Suspense } from "react";
import Header from "./_ui/Header";
import Rides from "./_ui/Rides";
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading/>}>
        <Rides />
      </Suspense>
    </div>
  );
}
