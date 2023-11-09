// src/components/ProductDetails.js
import React from 'react';
import Image from 'next/image';

const ProductDetails = ({ selectedProduct }) => {
	return (
		<div className="flex w-full items-center justify-center overflow-hidden bg-[#091f36] p-10 text-white ">
			{selectedProduct && (
				<div className="flex h-72 flex-col items-center justify-center gap-10 rounded-sm sm:w-max sm:flex-row sm:border sm:p-10 ">
					<Image src={selectedProduct.img} className="w-1/2 sm:w-96 rounded-md" alt="Logo" width={400} height={400} priority />
					<div className="flex w-96 flex-col items-center justify-center gap-5 sm:items-start">
						<h2 className="text-3xl">{selectedProduct.name}</h2>
						<p className="font-bold-100 text-center sm:text-start">{selectedProduct.info}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;