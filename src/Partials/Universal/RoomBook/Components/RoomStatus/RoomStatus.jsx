import React from 'react'
import RoomStatusTable from './Components/RoomStatusTable'
import { RoomsData } from './Components/RoomsData'
import { Link } from 'react-router-dom'

const RoomStatus = () => {
    function cardBgColor(data){
        if(data === 'Ready'){
            return `bg-success`
        }else if(data === 'pending'){
            return `bg-warning`
        }else if(data === 'Booked'){
            return `bg-secondary`
        }
    }
  return (
    <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
        <div className="row g-3">
            <div className="col-sm-12">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h3 className="fw-bold mb-0">Room Status</h3>
                    <div className="col-auto d-flex w-sm-100">
                        <Link to="/room-booking" className="btn btn-dark btn-set-task w-sm-100 ">Room Book</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-body">
                    
                        {/* <RoomStatusTable/> */}
                        <div className="row g-3">
                                {RoomsData.map((data, index) => {
                                        return(
                                            <div className="col-md-4 col-lg-3" key={index}>
                                                <div className={`room-select border p-3 rounded h-130 ${data.statusColor}`} style={{ cursor: 'pointer' }}>
                                                    <div className="text-center">
                                                        <span className="fw-bold d-block text-primary fs-4">{data.roomNumber}</span>
                                                        <div className="mt-2">
                                                            <span className="text fw-bold d-block">{data.roomType}</span>
                                                        </div>
                                                        <div className={`mt-3`}>
                                                            <span className="badge text-white">{data.status}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomStatus