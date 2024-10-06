import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    watch,
   
    formState: { errors, isSubmitting },
  } = useForm();
  const [isDifferentShipping, setIsDifferentShipping] = useState(false);
 const delay=(d)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve()
    }, d*1000);
  })
 }

  const onSubmit = async(data) => {
   await delay(2)
    console.log(data);
  }
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
    {isSubmitting && <div>
     LOAding
      </div>}
    <div className="container mx-auto my-7 p-6"  style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/011/097/213/large_2x/bags-fashion-seamless-background-free-vector.jpg")' }}>
      <h1 className='my-3 py-3 font-bold text-4xl text-black text-center'>Please fill all the details and click on Place Order</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            Firstname
          </label>
          <input 
            id="firstname"
            placeholder='Firstname' 
            {...register("Firstname", { required: true })} 
            type="text" 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.Firstname ? 'border-red-500' : ''}`} 
          />
          {errors.Firstname && <p className="text-red-500 text-xs italic">Firstname is required.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
            Lastname
          </label>
          <input 
            id="lastname"
            placeholder='Lastname' 
            {...register("LastName")} 
            type="text" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone No
          </label>
          <input 
            id="phone"
            placeholder='Phone No' 
            {...register("number", { required: true })} 
            type="number" 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.number ? 'border-red-500' : ''}`} 
          />
          {errors.number && <p className="text-red-500 text-xs italic">Phone number is required.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            id="email"
            placeholder='Email' 
            {...register("email", { required: true })} 
            type="email" 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? 'border-red-500' : ''}`} 
          />
          {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input 
            id="address"
            placeholder='Address' 
            {...register("Address", { required: true })} 
            type="text" 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.Address ? 'border-red-500' : ''}`} 
          />
          {errors.Address && <p className="text-red-500 text-xs italic">Address is required.</p>}
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Payment Method
          </label>
          <div className="flex items-center">
            <input 
              id="cod"
              type="radio" 
              value="Cash on Delivery" 
              {...register("paymentMethod", { required: true })} 
              className="mr-2 leading-tight focus:ring-2 focus:ring-blue-600" 
            />
            <label htmlFor="cod" className="text-gray-700">
              Cash on Delivery
            </label>
          </div>
          {errors.paymentMethod && <p className="text-red-500 text-xs italic">Payment method is required.</p>}
        </div>

        {/* Shipping Address */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Shipping Address
          </label>
          <div className="flex items-center">
            <input 
              id="same"
              type="radio" 
              value="same" 
              {...register("shippingAddress", { required: true })} 
              className="mr-2 leading-tight focus:ring-2 focus:ring-blue-600" 
              onChange={() => setIsDifferentShipping(false)} 
            />
            <label htmlFor="same" className="text-gray-700 mr-4">
              Same as Billing Address
            </label>
            <input 
              id="different"
              type="radio" 
              value="different" 
              {...register("shippingAddress", { required: true })} 
              className="mr-2 leading-tight focus:ring-2 focus:ring-blue-600" 
              onChange={() => setIsDifferentShipping(true)} 
            />
            <label htmlFor="different" className="text-gray-700">
              Different
            </label>
          </div>
          {errors.shippingAddress && <p className="text-red-500 text-xs italic">Shipping address option is required.</p>}
        </div>

        {isDifferentShipping && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="differentAddress">
              Shipping Address
            </label>
            <input 
              id="differentAddress"
              placeholder='Shipping Address' 
              {...register("differentAddress", { required: isDifferentShipping })} 
              type="text" 
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.differentAddress ? 'border-red-500' : ''}`} 
            />
            {errors.differentAddress && <p className="text-red-500 text-xs italic">Shipping address is required.</p>}
          </div>
        )}

        <div className="flex items-center justify-between">
          <input 
          disabled={isSubmitting}
            type="submit" 
            value="Place Order" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </form>
    </div>
    </>
  );
};

export default CheckoutForm;
