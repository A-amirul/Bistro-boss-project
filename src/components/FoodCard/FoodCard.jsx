
const FoodCard = ({ item }) => {
	const { image, price, recipe, name } = item;
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure><img src={image} alt="Shoes" /></figure>
			<p className="bg-slate-700 text-white absolute right-0 rounded-md px-4 mt-2 mr-4">${price}</p>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{recipe}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;