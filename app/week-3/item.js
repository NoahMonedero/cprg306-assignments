export default function Item({itemObj}){

    let {name,quantity,category} = itemObj;

    return(
        <div class="flex-1 justify-center align-middle bg-slate-500">
            <div>
                <p className="font-extrabold uppercase text-center">{name}</p>
            </div>
            <div>                    
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    );
}