
import ListBox from "./components/listBox";
import NavBar from "./components/navbar";
import WatchedBox from "./components/watchedBox";
import Footer from "./components/footer";


export default function App() {

  return (
    <>
      <div className="flex flex-col items-center">
         <div>
           <NavBar />
         </div>
         <div className="flex flex-row gap-8 mt-4">
         <ListBox />
         <WatchedBox />
         </div>
      </div>
    </>
  );
}
