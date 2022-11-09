import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {

    const {user} = useContext(AuthContext)
    const {_id, title,price} =useLoaderData()

    const handlePlaceOrder = e => {
        e.preventDefault()
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value} `;
        const phone = form.phone.value;
        const email = user?.email || 'unregister';
        const message = form.message.value;

        const order = {
            service:_id,
            serviceName:title,
            price,
            customer:name,
            email,
            phone,
            message

        }

        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('Order Placed Successfully')
            }
            form.reset();
            console.log(data)

        })
        .catch(err => console.error(err))

    }

    
    return (
        <div className='max-w-5xl mx-auto py-20'>
            <div className='py-5'>
            <h2 className='text-center text-5xl mb-5'> Your Service Name:{title} </h2>
            <h3 className='text-center text-3xl'>Price:${price} </h3>
            </div>
             <form onSubmit={handlePlaceOrder}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
            <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
            <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
            <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" />
            <input name="email" defaultValue={user?.email} type="text" placeholder="email" readOnly className="input input-bordered w-full" />
            
            </div>
            <textarea name="message" className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
            <input type="submit" value="Place Your Order" className='btn bg-orange-600 w-full my-5' />
           </form>
        
        </div>
    );
};

export default Checkout;