import Header from "./components/Header";
import PropertyListing from "./components/PropertyListing";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

export default function Home() {
	return (
		<div className="md:flex ">
			<Sidebar />
			<div className="flex-1 w-full h-screen overflow-x-hidden overflow-y-scroll">
				<Header />
				<div className="p-4 md:p-14 ">
					<Search />
					<PropertyListing />
				</div>
			</div>

			
		</div>
	);
}
