import React from 'react'


interface ITimeline {
  company: string;
  designation: string;
  duration: string;
  description: string[];
}

const jobDescription: ITimeline[] = [
  {
    company: "Deerhold Ltd.",
    designation: "Fellowship",
    duration: "Mar 2022 - Aug 2022",
    description: ["Created user interface using React.js.", "Integrated RESTful APIs.", "Participated in code reviews, provided constructive feedback, and iteratively improved code quality."],
  },
  {
    company: "goTaxi Nepal",
    designation: "Frontend Developer",
    duration: "Aug 2022 - Jan 2024",
    description: ["Enhanced and Optimized user interface.", "Managed global state using Redux, ensuring consistent data flow and efficient state management.",
      "Integrated role based authentication and authorization.",
      "Built and deployed project to server.",
      "Integrated map (galliMaps) on the project.",
      "Integrated payment methods (eSewa and Khalti).",
      "Implemented websocket (Pusher)."
    ],
  },
  {
    company: "Micro Banker Nepal Pvt. Ltd.",
    designation: "Frontend Developer",
    duration: "Jan 2024 - Present",
    description: [
      "Created user interface for portal web app.",
      "Created legal website for all the products",
      "Integrated nepali date picker and created nepali date range picker.",
      "Optimized and enhanced user interface.",
      "Contributed in smart banking project."
    ]
  }
]

const Timeline = () => {

  return (
    <>
      <h1 className='font-bold text-black/90 dark:text-slate-300 text-3xl tracking-tighter '>My Journey</h1>
      <ol className="relative border-s-2 border-blue-300 dark:border-blue-500">
        {
          jobDescription.map((job) => (
            <li className="mb-10 ms-3" key={job.company}>
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-[7px] border border-white dark:border-blue-900 dark:bg-blue-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.company}</h3>
              <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">{job.designation} | {job.duration}</time>
              <ul className='pl-6 text-sm text-black/70 dark:text-slate-100 list-disc '>
                {
                  job.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))
                }
              </ul>

            </li>
          ))
        }


      </ol>
    </>


  )
}

export default Timeline