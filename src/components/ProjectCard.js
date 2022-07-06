import React from 'react'
import { Folder } from 'tabler-icons-react';

export const ProjectCard = ({title,description,tags,link}) => {
  return (
    <a href= {link} target="_blank">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 cursor-pointer">
            <Folder 
                className="mb-3"
                size={30}
                strokeWidth={1.5}
                color={'#7990d2'}
            />
            <h6 className="mb-2 font-semibold leading-5">{title}</h6>
            <p className="text-sm text-gray-900">{description}</p>
            <div className="flex items-stretch mt-2">
                {tags.map(tag =>{
                    return <p className="pr-5 text-gray-500" key={tag}>{tag}</p>;
                })}
            </div>
        </div>
    </a>
  )
}
