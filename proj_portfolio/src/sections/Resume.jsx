import { Download } from "lucide-react";
import React from "react";

const Resume = () => {
    const downloadresume = () => {
        const link = document.createElement("a");
        link.href = "/CV.pdf";
        link.download = "Nimit_Gupta_Resume.pdf"; // filename when downloaded
        link.click();
    };

    return (
        <section id="resume" className="p-6 text-left mt-30">
            <h2 className="text-3xl font-bold mb-4">Resume</h2>

            <div className="flex items-center justify-between flex-col-reverse mt-20">
                <div className="flex flex-col items-center gap-0 mt-10">
                    <p className="mb-2 text-gray-600">
                        Click below to download my latest Resume.
                    </p>
                    <button
                        onClick={downloadresume}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer flex gap-3 mt-7 justify-center "
                    >
                        <p>Download Resume</p> <Download />
                    </button>
                </div>

                
                <div>
                    <img
                        src="/CV.png"
                        alt="Resume"
                        className="w-[30vw] aspect-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Resume;
