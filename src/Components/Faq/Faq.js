import React from 'react';
import questions from '../../asset/docmic/questions.png';

const Faq = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-0 gap-10 mt-16 pb-16'>
                <div className='lg:flex md:flex items-center lg:order-1 md:order-1 order-2'>
                    <div>
                        <div className='lg:text-start text-center'>
                            <h1 className='text-secondary'>FAQ Questions</h1>
                            <h1 className='lg:text-3xl text-4xl py-6'>Get Your General Answers</h1>
                        </div>
                        <div>
                            <div tabIndex={0} className="collapse collapse-plus  rounded-box">
                                <div className="collapse-title font-medium">
                                    Focus me to see content
                                </div>
                                <div className="collapse-content">
                                    <p>simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div tabindex={1} className="collapse collapse-plus rounded-box">
                                <div className="collapse-title font-medium">
                                    Will I always see my own doctor?
                                </div>
                                <div className="collapse-content">
                                    <p>simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div tabindex={2} className="collapse collapse-plus  rounded-box">
                                <div className="collapse-title font-medium">
                                    What is one Medicals care?
                                </div>
                                <div className="collapse-content">
                                    <p>simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div tabindex={3} className="collapse collapse-plus rounded-box">
                                <div className="collapse-title font-medium">
                                    What is evidence-based medicine?
                                </div>
                                <div className="collapse-content">
                                    <p>simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div tabindex={4} className="collapse collapse-plus rounded-box">
                                <div className="collapse-title font-medium">
                                    What is academic medical center?
                                </div>
                                <div className="collapse-content">
                                    <p>simply dummy text of the printing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute left-0 bottom-40 md:bottom-32 lg:bottom-16 flex bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                    {/* <img class="w-auto h-20 self-end" src="/img/driver.png" alt="" /> */}
                    <div class="pr-7 pl-2 py-5">
                        <div class="font-bold">Fast delivery</div>
                        <div class="text-gray-600 leading-relaxed">30 mins delivery 🚀</div>
                    </div>
                </div>
                <div className='lg:order-2 md:order-2 order-1 flex justify-end'>
                    <img className='' src={questions} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;