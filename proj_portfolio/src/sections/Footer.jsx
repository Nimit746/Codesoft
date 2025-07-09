import React from 'react'

const Footer = () => {
    return (
        <footer className="h-auto p-3 flex justify-around items-center bg-gray-200 text-white text-center text-2xl font-bold mt-10">
            <div className="flex flex-col gap-10 w-1/2">
                <div className='flex flex-col'>
                    <p className="text-black">Contact Details</p>
                    <table className='self-center mt-5'>
                        <tr className="gap-7 flex text-xl">
                            <td>
                                <h1 className="text-black">Email: </h1>
                            </td>
                            <td>
                                <h1 className="text-black">guptanimit062@gmail.com</h1>
                            </td>
                        </tr>
                        <tr className="gap-7 flex text-xl">
                            <td>
                                <h1 className="text-black">LinkedIn: </h1>
                            </td>
                            <td>
                                <h1 className="text-black"><a href='https://www.linkedin.com/in/nimit-gupta-482734285?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkG1ncpx%2FRWi9jvAOM%2FSVcQ%3D%3D' target='_Black'>Nimit Gupta</a></h1>
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <p className="text-black">
                        Copyright &copy; 2025 Nimit Gupta. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer
