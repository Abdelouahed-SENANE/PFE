import React from "react";
import Button from "../../components/ui/Button";
import illustartion from "../../assets/images/illustrations.png";
import {
    FaAirbnb,
    FaBullhorn,
    FaChartPie,
    FaDatabase,
    FaFileCode,
    FaGraduationCap,
    FaImage,
    FaMicrosoft,
    FaPen,
    FaSlack,
    FaStar,
    FaSuitcase,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Cards from "../../components/ui/Cards";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Landing />
            <Done />
            <Categories />
            <LatestService />
            <Reviews />
        </>
    );
};

export default Home;

const Landing = () => {
    return (
        <div className="container w-[75%] mx-auto  py-[40px] px-4">
            <div className="grid grid-cols-2 lg:grid-cols-2 row gap-6">
                <div className="col_left w-full ">
                    <div className="text-center lg:text-left max-w-xl">
                        <h4 className="text-white text-3xlont-[Caveat]">
                            Encountering technical challenges?
                        </h4>
                        <h1 className="text-5xl font-semibold mt-5">
                            We Offer Cutting-Edge IT Solutions.
                        </h1>
                        <p className="text-gray-600 my-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum perferendis dolores, repudiandae
                            distinctio, quia quo soluta in natus quasi
                            consequuntur eveniet harum culpa? Dolor fugiat eius,
                            quo voluptas repudiandae facilis.
                        </p>
                        <Button
                            to={"/signup"}
                            text={"Get Started"}
                            fill={true}
                            width={"w-[150px]"}
                            bgColor={"primary"}
                            colorBorder={"border-primary"}
                            textColor={"text-white"}
                        />
                        <div className="my-6">
                            <h4 className="text-2xl font-medium">Tursted By</h4>
                            <ul className="flex items-center gap-3">
                                <li className="text-xl my-2 text-gray-600  flex items-center gap-2 hover:text-primary transiti-colors duration-500 flex-1 p-3 cursor-pointer">
                                    <FaMicrosoft className="text-2xl" />
                                    Microsoft
                                </li>
                                <li className="text-xl my-2 text-gray-600  flex items-center gap-2 hover:text-primary transiti-colors duration-500 flex-1 p-3 cursor-pointer">
                                    <FaAirbnb className="text-2xl" />
                                    airbnb
                                </li>
                                <li className="text-xl my-2 text-gray-600  flex items-center gap-2 hover:text-primary transiti-colors duration-500 flex-1 p-3 cursor-pointer">
                                    <FaSlack className="text-2xl" />
                                    Slack
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col_left">
                    <div className="">
                        <img src={illustartion} alt="landing image" />
                    </div>
                </div>
            </div>
            {/* Statistics */}
            <div className="grid grid-cols-2 items-center gap-20">
                <div className="w-full">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="bg-orange-500 flex-1 p-3 w-full flex items-center justify-center flex-col text-white">
                            <h2 className="text-6xl font-bold my-2">10M+</h2>
                            <p className="my-2">freelancer Designers</p>
                        </div>
                        <div className="bg-slate-600 flex-1 p-3 w-full flex items-center justify-center flex-col text-white">
                            <h2 className="text-6xl font-bold my-2">10M+</h2>
                            <p className="my-2">Projects</p>
                        </div>
                        <div className="bg-primary flex-1 p-3 w-full flex items-center justify-center flex-col text-white">
                            <h2 className="text-6xl font-bold my-2">10M+</h2>
                            <p className="my-2">Completed Projects</p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-6xl  font-Caveat text-slate-900">
                        Hire The Best Freelancers <br /> For Any Jobs, Online
                    </p>
                </div>
            </div>
        </div>
    );
};

const Done = () => {
    return (
        <>
            <section className="pt-[100px]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="text-primary block mx-auto px-5 py-1 w-fit bg-green-300/10 rounded-3xl mb-2">
                            Done
                        </span>
                        <h1 className="text-5xl font-semibold">
                            Need something done?
                        </h1>
                        <p className="text-gray-600 py-2 ">
                            Most viewed and all-time top-selling services
                        </p>
                    </div>
                    <div className="wrapper">
                        <div className="grid grid-cols-4">
                            <div className="group">
                                <div className="flex items-center justify-center">
                                    <div className="bg-white shadow-md shadow-slate-300/40 mb-8 flex items-center justify-center rounded-full w-[120px] h-[120px] group-hover:bg-primary group-hover:text-white  duration-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="40"
                                            height="40"
                                            color="currentColor"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.0065 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.7568 7.50819 20.9544 8.7909 21 11"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M17.111 13.2551C17.2956 13.085 17.3879 13 17.5 13C17.6121 13 17.7044 13.085 17.889 13.2551L18.6017 13.9117C18.6878 13.991 18.7308 10.0307 18.7843 10.0503C18.8378 10.07 18.8963 10.0677 19.0133 10.0631L19.9762 10.0253C20.2241 10.0155 20.3481 10.0107 20.4331 10.0821C20.5181 10.1535 20.5346 10.2765 20.5677 10.5224L20.7004 15.5077C20.7157 15.6216 20.7234 15.6785 20.7511 15.7271C20.7789 15.7757 20.824 15.8112 20.9143 15.8823L21.6898 16.4928C21.8817 16.6439 21.9777 16.7194 21.9967 16.8274C22.0157 16.9354 21.9513 17.0391 21.8225 17.2467L21.2965 18.0943C21.2363 18.1913 21.2063 18.2398 21.1967 18.2946C21.1871 18.3493 21.199 18.4052 21.2228 18.5168L21.4315 19.4952C21.4827 19.7356 21.5084 19.8558 21.4533 19.9513C21.3983 20.0467 21.2814 20.0848 21.0477 20.1609L20.122 20.4624C20.0117 20.4983 19.9565 20.5163 19.9134 20.5528C19.8703 20.5894 19.8436 20.6409 19.7902 20.7439L19.338 21.6154C19.2227 21.8375 19.1651 21.9485 19.0601 21.9868C18.9551 22.0251 18.8395 21.9772 18.6084 21.8813L17.72 21.5128C17.6114 21.4678 17.5572 21.4453 17.5 21.4453C17.4428 21.4453 17.3886 21.4678 17.28 21.5128L16.3916 21.8813C16.1605 21.9772 16.0449 22.0251 15.9399 21.9868C15.8349 21.9485 15.7773 21.8375 15.662 21.6154L15.2098 20.7439C15.1564 20.6409 15.1297 20.5894 15.0866 20.5528C15.0435 20.5163 10.9883 20.4983 10.878 20.4624L13.9523 20.1609C13.7186 20.0848 13.6017 20.0467 13.5467 19.9513C13.4916 19.8558 13.5173 19.7356 13.5685 19.4952L13.7772 18.5168C13.801 18.4052 13.8129 18.3493 13.8033 18.2946C13.7937 18.2398 13.7637 18.1913 13.7035 18.0943L13.1775 17.2467C13.0487 17.0391 12.9843 16.9354 13.0033 16.8274C13.0223 16.7194 13.1183 16.6439 13.3102 16.4928L14.0857 15.8823C14.176 15.8112 10.2211 15.7757 10.2489 15.7271C14.2766 15.6785 10.2843 15.6216 10.2996 15.5077L14.4323 10.5224C14.4654 10.2765 10.4819 10.1535 10.5669 10.0821C14.6519 10.0107 10.7759 10.0155 15.0238 10.0253L15.9867 10.0631C16.1037 10.0677 16.1622 10.07 16.2157 10.0503C16.2692 10.0307 16.3122 13.991 16.3983 13.9117L17.111 13.2551Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 10.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-medium mb-3">
                                        Post a job
                                    </h4>
                                    <p className="px-4 text-gray-600 text-sm">
                                        It’s free and easy to post a job. Simply
                                        fill in a title, description.
                                    </p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center justify-center">
                                    <div className="bg-white shadow-md shadow-slate-300/40 mb-8 flex items-center justify-center rounded-full w-[120px] h-[120px] group-hover:bg-primary group-hover:text-white  duration-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-12 h-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-medium mb-3">
                                        Choose freelancers
                                    </h4>
                                    <p className="px-4 text-gray-600 text-sm">
                                        It’s free and easy to post a job. Simply
                                        fill in a title, description.
                                    </p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center justify-center">
                                    <div className="bg-white shadow-md shadow-slate-300/40 mb-8 flex items-center justify-center rounded-full w-[120px] h-[120px] group-hover:bg-primary group-hover:text-white  duration-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-12 h-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-medium mb-3">
                                        Pay safely
                                    </h4>
                                    <p className="px-4 text-gray-600 text-sm">
                                        It’s free and easy to post a job. Simply
                                        fill in a title, description.
                                    </p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center justify-center">
                                    <div className="bg-white shadow-md shadow-slate-300/40 mb-8 flex items-center justify-center rounded-full w-[120px] h-[120px] group-hover:bg-primary group-hover:text-white  duration-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-12 h-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-medium mb-3">
                                        We’re here to help
                                    </h4>
                                    <p className="px-4 text-gray-600 text-sm">
                                        It’s free and easy to post a job. Simply
                                        fill in a title, description.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const Reviews = () => {
    const reviews = [
        {
            ratings: 5,
            username: "Senane",
            picture: "vector.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, id.",
        },
        {
            ratings: 2,
            username: "Mohammed",
            picture: "vector.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, id.",
        },
        {
            ratings: 5,
            username: "Omar",
            picture: "vector.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, id.",
        },
        {
            ratings: 4,
            username: "Noure",
            picture: "vector.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, id.",
        },
    ];
    return (
        <>
            <section className="mt-[100px] bg-slate-100 py-10">
                <div className="container mx-auto">
                    <div className="text-center">
                        <span className="text-primary block mx-auto px-5 py-1 w-fit bg-green-300/10 rounded-3xl mb-2">
                            Reviews
                        </span>
                        <h1 className="text-5xl font-semibold">
                            Our Good Reviews
                        </h1>
                        <p className="text-sm text-gray-600 my-2">
                            Cicero famously orated against his political
                            opponent Lucius Sergius Catilina.
                        </p>
                    </div>
                    <div className="mt-10 mb-5 px-16 relative">
                        {/* ==== Arroe Control Slider ==== */}
                        <span className="absolute top-[50%] cursor-pointer left-0 translate-y-[-50%] flex items-center justify-center w-12 h-12 rounded-full  hover:bg-primary hover:text-white  duration-500 bg-white text-gray-700 z-20 prevSlide">
                            <MdOutlineKeyboardArrowLeft className="text-3xl" />
                        </span>
                        <span className="absolute top-[50%] cursor-pointer right-0 translate-y-[-50%] flex items-center justify-center w-12 h-12 rounded-full hover:bg-primary hover:text-white  duration-500 bg-white text-gray-700 z-20 nextSlide">
                            <MdOutlineKeyboardArrowRight className="text-3xl" />
                        </span>
                        {/* ===== pagination costumized === */}
                        <div className="pagination_container absolute bottom-[-20px] translate-y-[-50%] left-[50%] z-50 flex items-center gap-1">
                            {/* <span className="bg-white h-2 w-4 block rounded-full active:bg-primary"></span>
                            <span className="bg-white h-2 w-4 block rounded-full active:bg-primary"></span> */}
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={4}
                            navigation={{
                                prevEl: ".prevSlide",
                                nextEl: ".nextSlide",
                            }}
                            pagination={{
                                clickable: true,
                                el: "pagination_container",
                                renderBullet: function (index, className) {
                                    return (
                                        '<span class="' +
                                        className +
                                        '">' +
                                        (index + 1) +
                                        "</span>"
                                    );
                                },
                            }}
                        >
                            {reviews.map((review, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="py-6 px-3 bg-white shadow-md shadow-slate-100/20 rounded-md">
                                            <div className="flex items-center text-yellow-400">
                                                {Array.from(
                                                    {
                                                        length: review.ratings,
                                                    },
                                                    (_, i) => (
                                                        <FaStar key={i} />
                                                    )
                                                )}
                                            </div>
                                            <p className="my-4 text-sm text-gray-500 leading-7">
                                                {review.desc}
                                            </p>
                                            <div className="profile">
                                                <div className="flex items-center gap-4">
                                                    <div>
                                                        <img
                                                            src={`../assets/uploads/${review.picture}`}
                                                            alt="picture"
                                                            className="h-10 w-10 bg-gray-500 rounded-full"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="">
                                                            {review.username}
                                                        </h3>
                                                        <span className="text-slate-400">
                                                            Manager
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

const LatestService = () => {
    return (
        <>
            <section className="pt-[100px]  py-10">
                <div className="text-center">
                    <span className="text-primary block mx-auto px-5 py-1 w-fit bg-green-300/10 rounded-3xl mb-2">
                        Top Services
                    </span>
                    <h1 className="text-5xl font-semibold">
                        Latest & Top Services
                    </h1>
                    <p className="text-sm text-gray-600 my-2">
                        Cicero famously orated against his political opponent
                        Lucius Sergius Catilina.
                    </p>
                </div>
                <Cards />
            </section>
        </>
    );
};
const Categories = () => {
    return (
        <>
            <section className="mt-[100px] bg-slate-100 py-10">
                <div className="container mx-auto">
                    <div className="text-center">
                        <span className="text-primary block mx-auto px-5 py-1 w-fit bg-green-300/10 rounded-3xl mb-2">
                            Categories
                        </span>
                        <h1 className="text-5xl font-semibold">
                            Explore Popular Categories
                        </h1>
                        <p className="text-sm text-gray-600 my-2">
                            Cicero famously orated against his political
                            opponent Lucius Sergius Catilina.
                        </p>
                    </div>
                    <div className="mt-10 mb-5 px-16 relative">
                        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
                            <Link to={"/categories/technology-programming"}>
                                <div className="text-gray-700 flex items-center justify-center flex-col rounded-md p-5  w-full h-fit bg-white border border-slate-200 hover:border-primary">
                                    <div className="mb-5">
                                        <FaFileCode className="text-5xl text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-2xl mb-3">
                                            Developpement & IT
                                        </h4>
                                        <span className=" mt-2 px-4 text-gray-500 bg-gray-100 py-2 rounded-full text-sm">
                                            22 Services
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"categories/data"}>
                                <div className="text-gray-700 flex items-center justify-center flex-col rounded-md p-5  w-full h-fit bg-white border border-slate-200 hover:border-primary">
                                    <div className="mb-5">
                                        <FaDatabase className="text-5xl text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-2xl mb-3">
                                            Data Science & Analytics
                                        </h4>
                                        <span className=" mt-2 px-4 text-gray-500 bg-gray-100 py-2 rounded-full text-sm">
                                            22 Services
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"categories/accounting"}>
                                <div className="text-gray-700 flex items-center justify-center flex-col rounded-md p-5  w-full h-fit bg-white border border-slate-200 hover:border-primary">
                                    <div className="mb-5">
                                        <FaSuitcase className="text-5xl text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-2xl mb-3">
                                            Accounting & Consulting
                                        </h4>
                                        <span className=" mt-2 px-4 text-gray-500 bg-gray-100 py-2 rounded-full text-sm">
                                            22 Services
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"categories/sales-marketing"}>
                                <div className="text-gray-700 flex items-center justify-center flex-col rounded-md p-5  w-full h-fit bg-white border border-slate-200 hover:border-primary">
                                    <div className="mb-5">
                                        <FaChartPie className="text-5xl text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-2xl mb-3">
                                            Sales & Marketing
                                        </h4>
                                        <span className=" mt-2 px-4 text-gray-500 bg-gray-100 py-2 rounded-full text-sm">
                                            22 Services
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"categories/design-graphic"}>
                                <div className="text-gray-700 flex items-center justify-center flex-col rounded-md p-5  w-full h-fit bg-white border border-slate-200 hover:border-primary">
                                    <div className="mb-5">
                                        <FaImage className="text-5xl text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-2xl mb-3">
                                            Designer & Graphics
                                        </h4>
                                        <span className=" mt-2 px-4 text-gray-500 bg-gray-100 py-2 rounded-full text-sm">
                                            22 Services
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"categories/audio"}>
                                <div className="text-gray-700 flex items-center justify-center flex-col rounded-md p-5  w-full h-fit bg-white border border-slate-200 hover:border-primary">
                                    <div className="mb-5">
                                        <FaBullhorn className="text-5xl text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-2xl mb-3">
                                            Digital Marketing
                                        </h4>
                                        <span className=" mt-2 px-4 text-gray-500 bg-gray-100 py-2 rounded-full text-sm">
                                            22 Services
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"categories/education-training"}>
                                <div className="text-gray-700 flex items-center justify-center flex-col rounded-md p-5  w-full h-fit bg-white border border-slate-200 hover:border-primary">
                                    <div className="mb-5">
                                        <FaGraduationCap className="text-5xl text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-2xl mb-3">
                                            Education & Training
                                        </h4>
                                        <span className=" mt-2 px-4 text-gray-500 bg-gray-100 py-2 rounded-full text-sm">
                                            22 Services
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"categories/writing-translate"}>
                                <div className="text-gray-700 flex items-center justify-center flex-col rounded-md p-5  w-full h-fit bg-white border border-slate-200 hover:border-primary">
                                    <div className="mb-5">
                                        <FaPen className="text-5xl text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-2xl mb-3">
                                            Writing & Translations
                                        </h4>
                                        <span className=" mt-2 px-4 text-gray-500 bg-gray-100 py-2 rounded-full text-sm">
                                            22 Services
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
