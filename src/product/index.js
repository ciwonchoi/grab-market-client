import { useParams } from 'react-router-dom';

function ProductPage() {
	const { id } = useParams();
	return <h1>상품 상세 페이지 {id} 상품들</h1>;
}

export default ProductPage;
