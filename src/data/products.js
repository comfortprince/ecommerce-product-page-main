import product1 from '../assets/images/image-product-1.jpg'
import product1Thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import product2 from '../assets/images/image-product-2.jpg'
import product2Thumbnail from '../assets/images/image-product-2-thumbnail.jpg'
import product3 from '../assets/images/image-product-3.jpg'
import product3Thumbnail from '../assets/images/image-product-3-thumbnail.jpg'
import product4 from '../assets/images/image-product-4.jpg'
import product4Thumbnail from '../assets/images/image-product-4-thumbnail.jpg'

const products = [
	{
		"id": "1",
		"name": "Fall Limited Edition Sneakers",
		"description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
		"price": "125",
		"discount": "50",
		"oldPrice": "250",
		"companyName": "Sneaker Company",
		"thumbnail": `${product1Thumbnail}`,
		"imgs": [
			{
				"img": `${product1}`,
				"thumbnail": `${product1Thumbnail}`
			},
			{
				"img": `${product2}`,
				"thumbnail": `${product2Thumbnail}`
			},
			{
				"img": `${product3}`,
				"thumbnail": `${product3Thumbnail}`
			},
			{
				"img": `${product4}`,
				"thumbnail": `${product4Thumbnail}`
			},
		]
	}
]

export default products