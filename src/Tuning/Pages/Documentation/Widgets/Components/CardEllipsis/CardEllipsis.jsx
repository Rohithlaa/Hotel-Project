import React from 'react'

const CardEllipsis = () => {
  return (
    <>
        <a href="#" className="dropdown-toggle after-none" data-bs-toggle="dropdown" aria-expanded="false">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillOpacity="1" d="M4 9.5C3.60218 9.5 3.22064 9.34196 2.93934 9.06066C2.65804 8.77936 2.5 8.39782 2.5 8C2.5 7.60218 2.65804 7.22064 2.93934 6.93934C3.22064 6.65804 3.60218 6.5 4 6.5C4.39782 6.5 4.77936 6.65804 5.06066 6.93934C5.34196 7.22064 5.5 7.60218 5.5 8C5.5 8.39782 5.34196 8.77936 5.06066 9.06066C4.77936 9.34196 4.39782 9.5 4 9.5ZM8 9.5C7.60218 9.5 7.22064 9.34196 6.93934 9.06066C6.65804 8.77936 6.5 8.39782 6.5 8C6.5 7.60218 6.65804 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5ZM12 9.5C11.6022 9.5 11.2206 9.34196 10.9393 9.06066C10.658 8.77936 10.5 8.39782 10.5 8C10.5 7.60218 10.658 7.22064 10.9393 6.93934C11.2206 6.65804 11.6022 6.5 12 6.5C12.3978 6.5 12.7794 6.65804 13.0607 6.93934C13.342 7.22064 13.5 7.60218 13.5 8C13.5 8.39782 13.342 8.77936 13.0607 9.06066C12.7794 9.34196 12.3978 9.5 12 9.5Z"/>
                <path fillOpacity="0.3" d="M14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14ZM2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0Z"/>
            </svg>
        </a>
        <ul className="dropdown-menu dropdown-menu-end shadow border-0 p-2 rounded-4">
            <li><a className="dropdown-item rounded-pill" href="#">File Info</a></li>
            <li><a className="dropdown-item rounded-pill" href="#">Copy to</a></li>
            <li><a className="dropdown-item rounded-pill" href="#">Move to</a></li>
            <li><a className="dropdown-item rounded-pill" href="#">Rename</a></li>
            <li><a className="dropdown-item rounded-pill" href="#">Block</a></li>
            <li><a className="dropdown-item rounded-pill" href="#">Delete</a></li>
        </ul>
    </>
    )
}

export default CardEllipsis