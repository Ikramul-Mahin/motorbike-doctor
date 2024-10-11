import Image from 'next/image';
import React from 'react';

const Banner = () => {
	return (
		<div className='container mx-auto rounded'>
			<div className="carousel w-full my-10  ">
  {
  banners.map((banner,index)=>
	<div 
	style={(
		{
			backgroundImage: `linear-gradient(to right, rgba(7, 26, 82, 0.5), rgba(0, 0, 0, 0.5)), 
			url(/assets/images/banner/${index+1}.jpg)`,
		}
	)}
	key={index}
	id={`slide${index+1}`}
	 className="carousel-item relative w-full h-screen bg-cover"
	 >
<div className='h-full w-full flex items-center pl-16 text-white'>
<div >
<h1 className='text-4xl'>{banner.title}</h1>
<br />
<p>{banner.decription}</p>
<br />
<button className='btn btn-primary '>Discover more</button>
<button className='btn btn-primary btn-outline'>Latest Project</button>
</div>
</div>
    <div className="absolute  right-12 bottom-12 mx-2 flex transform justify-between">
      <a href={banner.prev} className="btn text-red-800 btn-circle">❮</a>
      <a href={banner.next} className="btn btn-circle">❯</a>
    </div>
  </div>
  )
  }
  
 
			</div>
		</div>
	);
};


export default Banner;
const banners=[
	{
		title:"Affordable Price For Car Servicing",
		decription:"There are many variations of passages of  available, but the majority have suffered alteration in some form",
		next:"#slide2",
		prev:"#slde4",
		
	},
	{
		title:"Affordable Price For Car Servicing2",
		decription:"There are many variations of passages of  available, but the majority have suffered alteration in some form",
		next:"#slide3",
		prev:"#slde1",
		
	},
	{
		title:"Affordable Price For Car Servicing3",
		decription:"There are many variations of passages of  available, but the majority have suffered alteration in some form",
		next:"#slide4",
		prev:"#slde2",
		
	},
	{
		title:"Affordable Price For Car Servicing4",
		decription:"There are many variations of passages of  available, but the majority have suffered alteration in some form",
		next:"#slide1",
		prev:"#slde3",
		
	}
]
