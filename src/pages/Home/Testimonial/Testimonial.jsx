import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
	const [reviews, setreviews] = useState();
	useEffect(() => {
		fetch("/reviews.json")
			.then(res => res.json())
			.then(data => {
			setreviews(data);
		})
	},[])
	
	return (
		<section className="my-20">
			<SectionTitle
				subHeading={"What Our Client Say"}
				heading={"Testimonials"}
			
			></SectionTitle>

			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">

				{
					reviews?.map(review => <SwiperSlide
					key={review._id}
					> <div className="mx-24 my-16 flex flex-col items-center">
							<Rating
								style={{ maxWidth: 180 }}
								value={review.rating}
								readOnly
							/>
							<p className="py-4">{review.details}</p>
							<h3 className="text-2xl text-orange-400">{review.name}</h3>
						</div>
					</SwiperSlide>)
				}
				
			</Swiper>
			
		</section>
	);
};

export default Testimonial;