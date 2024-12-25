
import bg from '../../public/more/7.png'
import bg1 from '../../public/more/24.jpg'
import { Link } from 'react-router-dom';
import { AiOutlineRight } from "react-icons/ai";

const FAQ = () => {
    return (
        <div>
            <div
                className="h-[300px] flex items-center lg:pl-40"
                style={{
                    backgroundImage: `url(${bg1})`,
                }}>
                <div className="">
                    <div className=" text-white ">
                        <h1 className="mb-5 text-2xl lg:text-7xl font-bold">Frequently Asked Questions</h1>
                        <p className="mb-5 font-bold flex items-center">
                            <Link className='text-[#d19462] mr-2 flex items-center' to={'/'}>CoffeeKing
                                <AiOutlineRight className='text-white '></AiOutlineRight></Link>
                            Frequently Asked Questions
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-20 lg:mx-40'>
                <div tabIndex={0} className="collapse collapse-arrow my-5">
                    <div className="collapse-title text-xl font-bold">Is it possible to pay for an order with Visa and MasterCard payment cards ?</div>
                    <div className="collapse-content">
                        <p>Pellentesque blandit arcu eu orci venenatis aliquet.Morbi in quam porta nibh hendrerit dapibus.Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus.Phasellus luctus commodo aliquam.Pellentesque ac orci nec ligula efficitur blandit vel at sem.Sed commodo orci sapien, a finibus odio dignissim ac.Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula. <br />
                            <br />
                            Donec neque urna, imperdiet a nisl eget, finibus mollis lacus.Nunc efficitur a elit in facilisis.Maecenas massa ex, tempor ac viverra id, varius et massa.Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero.Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur.Aenean vitae tincidunt mauris, pellentesque pulvinar ante.Proin malesuada vestibulum justo lacinia finibus.Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow my-5">
                    <div className="collapse-title text-xl font-bold">Is it possible to pay by credit card?</div>
                    <div className="collapse-content">
                        <p>
                            Pellentesque blandit arcu eu orci venenatis aliquet. Morbi in quam porta nibh hendrerit dapibus. Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus. Phasellus luctus commodo aliquam. Pellentesque ac orci nec ligula efficitur blandit vel at sem. Sed commodo orci sapien, a finibus odio dignissim ac. Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                            <br />
                            Donec neque urna, imperdiet a nisl eget, finibus mollis lacus. Nunc efficitur a elit in facilisis. Maecenas massa ex, tempor ac viverra id, varius et massa. Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero. Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur. Aenean vitae tincidunt mauris, pellentesque pulvinar ante. Proin malesuada vestibulum justo lacinia finibus. Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow my-5">
                    <div className="collapse-title text-xl font-bold">What payment methods exist in your company?</div>
                    <div className="collapse-content">
                        <p>Pellentesque blandit arcu eu orci venenatis aliquet. Morbi in quam porta nibh hendrerit dapibus. Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus. Phasellus luctus commodo aliquam. Pellentesque ac orci nec ligula efficitur blandit vel at sem. Sed commodo orci sapien, a finibus odio dignissim ac. Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                        <br />
                            Donec neque urna, imperdiet a nisl eget, finibus mollis lacus. Nunc efficitur a elit in facilisis. Maecenas massa ex, tempor ac viverra id, varius et massa. Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero. Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur. Aenean vitae tincidunt mauris, pellentesque pulvinar ante. Proin malesuada vestibulum justo lacinia finibus. Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow my-5">
                    <div className="collapse-title text-xl font-bold">Can I return the product after purchase?</div>
                    <div className="collapse-content">
                        <p>Pellentesque blandit arcu eu orci venenatis aliquet. Morbi in quam porta nibh hendrerit dapibus. Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus. Phasellus luctus commodo aliquam. Pellentesque ac orci nec ligula efficitur blandit vel at sem. Sed commodo orci sapien, a finibus odio dignissim ac. Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                        <br />
                            Donec neque urna, imperdiet a nisl eget, finibus mollis lacus. Nunc efficitur a elit in facilisis. Maecenas massa ex, tempor ac viverra id, varius et massa. Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero. Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur. Aenean vitae tincidunt mauris, pellentesque pulvinar ante. Proin malesuada vestibulum justo lacinia finibus. Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow my-5">
                    <div className="collapse-title text-xl font-bold">How do I use a promotional code?</div>
                    <div className="collapse-content">
                        <p>Pellentesque blandit arcu eu orci venenatis aliquet.Morbi in quam porta nibh hendrerit dapibus.Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus.Phasellus luctus commodo aliquam.Pellentesque ac orci nec ligula efficitur blandit vel at sem.Sed commodo orci sapien, a finibus odio dignissim ac.Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                        <br />
                            Donec neque urna, imperdiet a nisl eget, finibus mollis lacus.Nunc efficitur a elit in facilisis.Maecenas massa ex, tempor ac viverra id, varius et massa.Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero.Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur.Aenean vitae tincidunt mauris, pellentesque pulvinar ante.Proin malesuada vestibulum justo lacinia finibus.Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow my-5">
                    <div className="collapse-title text-xl font-bold">What is the validity period of the gift certificate?</div>
                    <div className="collapse-content">
                        <p>Pellentesque blandit arcu eu orci venenatis aliquet.Morbi in quam porta nibh hendrerit dapibus.Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus.Phasellus luctus commodo aliquam.Pellentesque ac orci nec ligula efficitur blandit vel at sem.Sed commodo orci sapien, a finibus odio dignissim ac.Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                        <br />
                            Donec neque urna, imperdiet a nisl eget, finibus mollis lacus.Nunc efficitur a elit in facilisis.Maecenas massa ex, tempor ac viverra id, varius et massa.Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero.Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur.Aenean vitae tincidunt mauris, pellentesque pulvinar ante.Proin malesuada vestibulum justo lacinia finibus.Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow my-5">
                    <div className="collapse-title text-xl font-bold">What if the prepaid goods are not delivered?</div>
                    <div className="collapse-content">
                        <p>Pellentesque blandit arcu eu orci venenatis aliquet.Morbi in quam porta nibh hendrerit dapibus.Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus.Phasellus luctus commodo aliquam.Pellentesque ac orci nec ligula efficitur blandit vel at sem.Sed commodo orci sapien, a finibus odio dignissim ac.Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                        <br />
                            Donec neque urna, imperdiet a nisl eget, finibus mollis lacus.Nunc efficitur a elit in facilisis.Maecenas massa ex, tempor ac viverra id, varius et massa.Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero.Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur.Aenean vitae tincidunt mauris, pellentesque pulvinar ante.Proin malesuada vestibulum justo lacinia finibus.Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow my-5">
                    <div className="collapse-title text-xl font-bold">Where and how can I exchange or refund?</div>
                    <div className="collapse-content">
                        <p>Pellentesque blandit arcu eu orci venenatis aliquet.Morbi in quam porta nibh hendrerit dapibus.Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus.Phasellus luctus commodo aliquam.Pellentesque ac orci nec ligula efficitur blandit vel at sem.Sed commodo orci sapien, a finibus odio dignissim ac.Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                        <br />
                            Donec neque urna, imperdiet a nisl eget, finibus mollis lacus.Nunc efficitur a elit in facilisis.Maecenas massa ex, tempor ac viverra id, varius et massa.Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero.Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur.Aenean vitae tincidunt mauris, pellentesque pulvinar ante.Proin malesuada vestibulum justo lacinia finibus.Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow my-5">
                        <div className="collapse-title text-xl font-bold">Is it possible to pay for an order with Visa and MasterCard payment cards?</div>
                        <div className="collapse-content">
                            <p>Pellentesque blandit arcu eu orci venenatis aliquet.Morbi in quam porta nibh hendrerit dapibus.Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus.Phasellus luctus commodo aliquam.Pellentesque ac orci nec ligula efficitur blandit vel at sem.Sed commodo orci sapien, a finibus odio dignissim ac.Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                            <br />
                                Donec neque urna, imperdiet a nisl eget, finibus mollis lacus.Nunc efficitur a elit in facilisis.Maecenas massa ex, tempor ac viverra id, varius et massa.Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero.Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur.Aenean vitae tincidunt mauris, pellentesque pulvinar ante.Proin malesuada vestibulum justo lacinia finibus.Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow my-5">
                        <div className="collapse-title text-xl font-bold">Is it possible to pay by credit card?</div>
                        <div className="collapse-content">
                            <p>Pellentesque blandit arcu eu orci venenatis aliquet.Morbi in quam porta nibh hendrerit dapibus.Donec erat tortor, ullamcorper in dictum a, rhoncus quis risus.Phasellus luctus commodo aliquam.Pellentesque ac orci nec ligula efficitur blandit vel at sem.Sed commodo orci sapien, a finibus odio dignissim ac.Nunc ante purus, elementum ac tempor sed, facilisis sit amet ligula.<br />
                            <br />
                                Donec neque urna, imperdiet a nisl eget, finibus mollis lacus.Nunc efficitur a elit in facilisis.Maecenas massa ex, tempor ac viverra id, varius et massa.Sed convallis, metus a aliquet suscipit, purus nunc ultrices est, sed dapibus tellus sapien eget libero.Praesent maximus velit vitae est venenatis, nec lobortis arcu consectetur.Aenean vitae tincidunt mauris, pellentesque pulvinar ante.Proin malesuada vestibulum justo lacinia finibus.Nulla nibh ante, iaculis sit amet pharetra at, tincidunt quis nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
