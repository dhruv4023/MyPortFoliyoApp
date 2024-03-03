const data = [
  {
    _id: 4,
    projectName: "Chatbot for Question Answering on Legal Documents",
    discription:
      "Developed a chatbot using the LangChain framework to provide answers related to Indian Jurisprudence, utilizing PDF sources such as Indian Penalty Laws.\n Integrated the Streamlit module for the front-end interface, ensuring user-friendly interaction.\n Employed models from the HuggingFaceHub to enhance the chatbot's natural language processing abilities for accurate responses.\n Focused on aiding lawyers in extracting case-relevant information from legal documents, with an additional feature to retrieve data from documents provided by the lawyer related to specific-case.\n Deployed on Streamlit community cloud",
    media: {
      type: "image",
      src: "https://res.cloudinary.com/dbnmraxnj/image/upload/v1709460285/PortFoliyo/lawchat.png",
    },
    repoLinks: {
      "Front-End":
        "https://github.com/dhruv4023/AppoinmentManagementSystem/tree/springserver",
      "Back-End": "https://github.com/jit205/AppointmentApp",
    },
    liveLink: "https://lawchat.streamlit.app/",
    colleborator: { Jittam: "https://github.com/jit205/" },
  },
  {
    _id: 2,
    projectName: "Appointment App",
    discription:
      "Focused on query optimization and robust database design for efficient data handling and retrieval in the context of car manufacturing.	Developed a comprehensive appointment management system allowing service providers to create profiles, view appointment lists, and modify statuses, enhancing operational efficiency and convenience.	Implemented a user-friendly QR code scanning feature, enabling seamless appointment booking for clients by simply scanning the provided QR code, streamlining the booking process and improving accessibility.	Designed intuitive user interfaces for service providers and clients, prioritizing ease of use and accessibility to ensure a positive user experience.	Utilized modern technologies and frameworks to create a robust and scalable system, ensuring reliability and adaptability to changing business needs.	Demonstrated a commitment to innovation and customer satisfaction by incorporating features that simplify appointment management and enhance communication between service providers and clients.	Developed this project in collaboration",
    media: {
      type: "image",
      src: "https://res.cloudinary.com/dljjltdo5/image/upload/v1695386974/PortFoliyo/aasdp.png",
    },
    repoLinks: {
      "Front-End":
        "https://github.com/dhruv4023/AppoinmentManagementSystem/tree/springserver",
      "Back-End": "https://github.com/jit205/AppointmentApp",
    },
    liveLink: "https://aasdp.vercel.app",
    colleborator: { Jittam: "https://github.com/jit205/" },
  },
  {
    _id: 1,
    projectName: "Chat Bot",
    discription: "aimed at optimizing appointment booking and cancellation processes, enhancing user experience and efficiency.	Utilized RASA framework for chatbot development and ReactJS framework for creating a user-friendly front-end interface, ensuring seamless interaction and accessibility.	Designed additional functionalities within the chatbot, including checking appointment statuses and facilitating appointment booking and cancellations, contributing to a comprehensive appointment management system.	Developed this project in collaboratio",
    media: {
      type: "image",
      src: "https://res.cloudinary.com/dljjltdo5/image/upload/v1695386964/PortFoliyo/chatbot.png",
      // src: "vid.mp4",
    },
    repoLinks: { "Source code": "https://github.com/VrajPatelK/Patient-Appointment" },
  },
  {
    _id: 3,
    projectName: "You Tube Clone",
    discription: "Developed a MERN (MongoDB, Express.js, React.js, Node.js) stack project replicating the functionality of YouTube, featuring core functionalities such as history tracking, like/dislike, comments, and an advanced search with suggestion feature.	Implemented a user-friendly interface allowing users to browse, watch, and interact with videos seamlessly, enhancing user engagement and satisfaction.	Integrated features for users to maintain a browsing history, interact with videos through likes and comments, and conduct searches with real-time suggestions, optimizing the user experience and engagement.	Implemented a secure authentication system allowing users to create accounts and upload videos, with video content stored on the Node.js server, ensuring data privacy and security.	Demonstrated proficiency in full-stack development and utilization of modern technologies to create a scalable and efficient video sharing platform, showcasing skills in both front-end and back-end development.	Deployed frontend on Netlify and backend on Vercel.",
    media: {
      type: "image",
      src: "https://res.cloudinary.com/dljjltdo5/image/upload/v1695386995/PortFoliyo/ytc.png",
    },
    repoLinks: {
      "Front-End & Back-End": "https://github.com/dhruv4023/youTubeClone",
    },
    liveLink: "https://dhruv4023youtubeclone.netlify.app",
  },
];

export const githubLinksStatic = () => {
  return data;
};
