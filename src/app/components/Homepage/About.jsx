import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className='text-slate-900 h-screen my-12' >
			
			<div className='container mx-auto grid grid-cols-2 space-x-6'>  
				<div>
				<Image 
				src='/assets/images/about_us/person.jpg' 
				width={500}
				height={700}
				></Image>
				</div>
				<div>
				<h1 className='text-primary' >About page</h1>
				<h1 className='text-4xl'>We are qualified & of experience in this field</h1>
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
					<br />
					<br />
					the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
				</p>
				<button className='btn btn-primary'>Get More Info</button>
				</div>
			</div>
		</div>
	);
};

export default About;