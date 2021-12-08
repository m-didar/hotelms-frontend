import React, {useState} from 'react'
import "./ClerkPage.css"

function ClerkPage() {
    const [details, setDetails] = useState({res_id: "", guest_id: "", hotel_id: "", r_number: "", check_in: "", check_out: ""});


    return (
        <div>
        <form className="page">
            <h2>Clerk Page</h2>
            <h3>Create a reservation</h3>
            <div className="form-group">
                    <label>Reservation ID: </label>
                    <input type="number" name="res_id" id="res_id" onChange={e => setDetails({...details, res_id: e.target.value})} value={details.res_id} />
            </div>
            <div className="form-group">
                    <label>Guest ID: </label>
                    <input type="number" name="guest_id" id="guest_id" onChange={e => setDetails({...details, guest_id: e.target.value})} value={details.guest_id} />
            </div>
            <div className="form-group">
                    <label>Hotel ID: </label>
                    <input type="number" name="hotel_id" id="hotel_id" onChange={e => setDetails({...details, hotel_id: e.target.value})} value={details.hotel_id} />
            </div>
            <div className="form-group">
                    <label>Room Number: </label>
                    <input type="number" name="r_number" id="r_number" onChange={e => setDetails({...details, r_number: e.target.value})} value={details.r_number} />
            </div>
            <div className="form-group">
                    <label>Check IN date: </label>
                    <input type="date" name="check_in" id="check_in" onChange={e => setDetails({...details, check_in: e.target.value})} value={details.check_in} />
            </div>
            <div className="form-group">
                    <label>Check OUT date: </label>
                    <input type="date" name="check_out" id="check_out" onChange={e => setDetails({...details, check_out: e.target.value})} value={details.check_out} />
            </div>
            <input type="submit" value="Create Reservation" className="button" />
        </form>
        <br/><br/><br/>
        <p className="reservations">This is this reservation <input type="submit" value="Edit" className="but" /> <input type="submit" value="Delete" className="but"/> </p>
        </div>
    )
}

export default ClerkPage
