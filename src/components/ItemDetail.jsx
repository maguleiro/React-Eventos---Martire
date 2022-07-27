import ItemCount from "./ItemCount";
import {useState} from"react";
import {Link} from  'react-router-dom';

const ItemDetail = ({item}) => {
	const [amount, setAmount] = useState(0); 
	const {title, price, stock, pictureUrl, id, discount} = item;
	const onAdd = (amount) =>{
		setAmount(amount);
	};
	return (
	<div className="card-group p-2" style={{ width:"50rem" }}>
		<div className="card">
			<img className="card-img-top" src="{pictureUrl}" alt="Card image cap"/>
			<div className="card-body d-flex flex-column justify-content-center">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">{`${stock} units avaiable`}</p>
			<p className="card-text">{`$${
				(price * discount) / 100
			}| width a % discount!`}</p>	
			</div>
			{amount == 0 ? (<ItemCount stock={stock} initial={0} onAdd={onAdd} />) 
			 : (<h1>{amount} Items agregados al carrito</h1>)} 
			<Link to={"/cart"}>
				<button> Go to checkout</button>
			</Link>
		</div>
	</div>	
	);
};

export	default ItemDetail;