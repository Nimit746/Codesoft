import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiNumpy, SiPandas } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { BiLogoCPlusPlus } from "react-icons/bi";

const Skills = () => {
    return (
        <div
            className="flex gap-6 flex-col items-center p-1 mt-30"
            id="skills"
        >
            <h1 className="self-start text-4xl font-bold text-center">Skill Set</h1>
            <div className="flex flex-wrap gap-6 justify-center items-center text-5xl p-5 text-[#3b3b3b]">
                <FaHtml5 title="HTML5" color="#e34c26" />
                <FaCss3Alt title="CSS3" color="#264de4" />
                <SiJavascript title="JavaScript" color="#f0db4f" />
                <FaReact title="React" color="#61DBFB" />
                <FaNodeJs title="Node.js" color="#68a063" />
                <SiMongodb title="MongoDB" color="#4DB33D" />
                <SiTailwindcss title="Tailwind CSS" color="#38B2AC" />
                <DiGit title="Git" color="#f1502f" />
                <BiLogoCPlusPlus title="C++" color="black" />
                <FaPython color="orange" />
                <SiMysql size={80} color="black" />
                <SiExpress color="red" />
                <FaJava color="black" />
                <FaGithub color="black" />
                <SiNumpy color="#013243" />
                <SiPandas title="Pandas" color="#150458" />
                <img
                    src="https://matplotlib.org/_static/images/logo2.svg"
                    alt="Matplotlib"
                    width={100}
                />
            </div>

            


        </div>
    );
};

export default Skills;
