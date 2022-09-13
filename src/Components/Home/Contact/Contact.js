import React from 'react';

const Contact = () => {
    return (
        <div className='mid-container'>
            <h1 className='lg:text-4xl text-3xl font-bold text-center  lg:py-24 md:py-16 py-10'>Let us handle your <br /> project, professionally</h1>

            <form action="" className='lg:w-3/4 mx-auto pb-12'>
                <div className='text-center mb-5 grid grid-cols-2 gap-5'>
                    <input type="text" placeholder="Full Name" class="input w-full   bg-secondary" />
                    <input type="text" placeholder="Last Name" class="input w-full bg-secondary " />

                    <input type="text" placeholder="Email Address" class="input w-full bg-secondary" />
                    <input type="text" placeholder="Phone Number" class="input w-full bg-secondary" />
                </div>
                <div className='text-center w-full h-40'>
                    <textarea class="textarea w-full mr-5 h-full bg-secondary" placeholder="Your Message"></textarea>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary mt-7 '>Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;