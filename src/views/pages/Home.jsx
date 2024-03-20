import React from "react";
import Button from "../../components/ui/Button";
import illustartion from "../../assets/images/illustrations.png";

const Home = () => {
    return (
        <>
            <div className="container mx-auto  py-[40px] px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 row gap-6">
                    <div className="col_left w-full ">
                        <div className="text-center lg:text-left max-w-xl">
                            <h4 className="text-primary text-3xl font-[Caveat]">
                                Encountering technical challenges?
                            </h4>
                            <h1 className="text-5xl font-semibold mt-5">
                                We Offer Cutting-Edge IT Solutions.
                            </h1>
                            <p className="text-gray-600 my-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorum perferendis dolores,
                                repudiandae distinctio, quia quo soluta in natus
                                quasi consequuntur eveniet harum culpa? Dolor
                                fugiat eius, quo voluptas repudiandae facilis.
                            </p>
                            <Button
                                to={"/"}
                                text={"Discover More"}
                                fill={true}
                                bgColor={"primary"}
                                colorBorder={"primary"}
                                textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <div className="col_left">
                        <div>
                            <img src={illustartion} alt="" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
