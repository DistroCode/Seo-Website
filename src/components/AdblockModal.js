const AdblockModal = ({ openModal }) => {

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <>
            {openModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-[15px] shadow-lg relative flex flex-col lg:w-[600px] border border-gray-600 outline-none focus:outline-none">
                                <div className="flex flex-col justify-center items-center bg-white rounded-[15px] shadow relative p-4">
                                    <div className="flex justify-end p-2">
                                    </div>
                                    <img className="w-[60%]" src="/images/adblock.svg" alt="adblock logo" />
                                    <p className="mt-4 text-black">Please turn off your Adblocker to be able to use our services</p>
                                    <p onClick={reloadPage} className="cursor-pointer mt-2 text-white rounded-full bg-red-500 px-4 py-2">I turned off my Adblocker</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
export default AdblockModal