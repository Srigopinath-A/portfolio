import { RxGithubLogo , RxLinkedinLogo } from "react-icons/rx";
export default function Content(){
    return <section className=" relative h-screen ">
        <div className="absolute bg-black bg-cover inset-0 w-full h-full">
        <iframe
          src="https://gifer.com/embed/8mee"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full blur-sm"
          frameBorder="0"
          allowFullScreen
          title="Background GIF"
        ></iframe>
        </div>
        <div className="Content">
        <h1 className="text-4xl font-bold">Hii, Im Srigopinath</h1>
        <p className=" text-center max-w-3xl mt-4 text-lg font-semibold mb-4 font-Krona+One">Java Full Stack Developer <br/> Full-Stack Java Developer with 1+ years of experience building scalable applications using Spring Boot, REST APIs, and modern database technologies 
        (MySQL, MongoDB). Proficient in end-to-end development, automation, and cloud integration. Strong background in designing secure, high performance systems and integrating DevOps tools like Ansible</p>
        <div className="flex ">
          <a herf="#" className="pr-5 hover:text-black"><RxGithubLogo size={35}/></a>
          <a herf="#" className="pr-5 hover:text-sky-600"><RxLinkedinLogo size={35}/></a>
        </div>
        </div>
    </section>
}