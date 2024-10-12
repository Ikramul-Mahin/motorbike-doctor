import Image from 'next/image';
import React from 'react';

const ServicesCard = ({service}) => {
	const {price,title,img} = service || {}

	return (
		<div className="card card-compact bg-base-100 w-72 shadow-xl">
		<figure>
		 <Image height={120}
		 alt='title'
		 width={430}
		 src={img}></Image>
		</figure>
		<div className="card-body">
		
		  <p>{title}</p>
		  <div className="card-actions justify-between items-center">
			<h6>Price:{price}</h6>
			 <button className="btn btn-primary">Buy Now</button>
		  </div>
		</div>
	 </div>
	);
};

export default ServicesCard;