import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');

    return (
        <div className="w-full p-5 rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <div>
            <img src={image.webformatURL} alt='' className='w-full' />
            </div>
            <div>
                <p className='px-6 py-4'>
                    <p className='font-bold text-purple-500 text-xl mb-2'>
                        Photo by {image.user}
                    </p>
                    <ul>
                        <li>
                            <strong>Views: </strong>
                            {image.views}
                        </li>
                        <li>
                            <strong>Downloads: </strong>
                            {image.downloads}
                        </li>
                        <li>
                            <strong>Liks: </strong>
                            {image.likes}
                        </li>
                    </ul>
                </p>
                <p className='px-6 py-4'>
                    {tags.map(tag => (
                        <span className='inline-block bg-gray-200 rounded-full 
                       px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                            {tag}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default ImageCard;
