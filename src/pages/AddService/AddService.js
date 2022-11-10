import React from 'react';




const AddService = () => {
    const handleAddService = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            serviceName:title,
            price:price,
            description
        }


        fetch('https://y-opal-theta.vercel.app/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('Service Added Successfully')
            }
            form.reset();
            console.log(data)

        })
        .catch(err => console.error(err))

    }
    return (
        <div className='max-w-5xl mx-auto py-20'>
             <form onSubmit={handleAddService}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
            <input name="title" type="text" placeholder="Service Title" className="input input-bordered w-full" />
            <input name="price" type="text" placeholder="Price" className="input input-bordered w-full" />
            </div>
            <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
            <input type="submit" value="Place Your Order" className='btn  outline bg-sky-900 w-full my-5' />
           </form>
        
        </div>
    );
};

export default AddService;