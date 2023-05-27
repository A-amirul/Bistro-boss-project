import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css';

const Featured = () => {
	return (
		<div className="featured-item bg-fixed text-white pt-10 my-20">
			<SectionTitle
				subHeading={"check it out"} 
				heading={"Featured Item"}
			></SectionTitle>

			<div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 md:px-36">
				<div>
					<img src={featuredImg} alt="" />
				</div>
				<div className="md:ml-10">
					<p>Aug 20, 2029</p>
					<p className="uppercase">Where can I get some?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis nihil deleniti illo nam inventore vitae quos excepturi sapiente odit eaque voluptate maxime, asperiores fugit, cumque nisi, magnam commodi dolore consectetur nesciunt hic magni? Omnis corporis mollitia accusamus culpa deleniti, rerum repudiandae et voluptas veniam voluptatem, explicabo labore aliquid iure.</p>
					<button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;