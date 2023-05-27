import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
const Order = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [menu] = useMenu();
	const desserts = menu?.filter(item => item.category === 'dessert');
	const soup = menu?.filter(item => item.category === 'soup');
	const salad = menu?.filter(item => item.category === 'salad');
	const pizza = menu?.filter(item => item.category === 'pizza');
	const drinks = menu?.filter(item => item.category === 'drinks');
	const offered = menu?.filter(item => item.category === 'offered');
	return (
		<div>
			<Cover img={orderCoverImg} title="Order Food"></Cover>
			<Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
				<TabList>
					<Tab>Salad</Tab>
					<Tab>Pizza</Tab>
					<Tab>Soup</Tab>
					<Tab>Dessert</Tab>
					<Tab>Drinks</Tab>
				</TabList>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{
							salad?.map(item => <FoodCard
								key={item._id}
								item={item}
							></FoodCard>)
						}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{
							pizza?.map(item => <FoodCard
								key={item._id}
								item={item}
							></FoodCard>)
						}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{
							soup?.map(item => <FoodCard
								key={item._id}
								item={item}
							></FoodCard>)
						}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{
							desserts?.map(item => <FoodCard
								key={item._id}
								item={item}
							></FoodCard>)
						}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{
							drinks?.map(item => <FoodCard
								key={item._id}
								item={item}
							></FoodCard>)
						}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Order;