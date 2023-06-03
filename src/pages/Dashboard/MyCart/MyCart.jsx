import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
	const [cart,refetch] = useCart();
	console.log(cart);
	// how does reduce work
	const total = cart.reduce((sum, item) => item.price + sum, 0);

	const handleDelete = item => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/carts/${item._id}`, {
					method:'DELETE'
				})
					.then(res => res.json())
					.then(data => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire(
								'Deleted!',
								'Your file has been deleted.',
								'success'
							)
					}
				})
			}
		})
	}
	return (
		<div className="w-full">
			<Helmet>
				<title>Bistro Boss| My cart</title>
			</Helmet>
			<div className="uppercase h-[60px] font-semibold flex justify-evenly item-center gap-8">
				<h3 className="text-3xl">Total Items:{cart.length}</h3>
				<h3 className="text-3xl">Total Price: ${total}</h3>
				<button className="btn btn-warning btn-sm">Pay</button>
			</div>
			<div className="overflow-x-auto ps-32">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Food</th>
							<th>Item Name</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							cart?.map((row,index) => <tr key={row._id}>
								<td>
									{index+1}
								</td>
								<td>
									<div className="flex items-center justify-evenly md:space-x-64">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img src={row.image} />
											</div>
										</div>
										<div>
											<div className="font-bold"></div>
											
										</div>
									</div>
								</td>
								<td>
									
									<span className="font-medium">{row.name}</span>
								</td>
								<td className="text-end">{row.price}</td>
								<td>
									<button onClick={()=>handleDelete(row)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
								</td>
							</tr>)
						}
						
						
						
						
					</tbody>
					

				</table>
			</div>
		</div>
	);
};

export default MyCart;