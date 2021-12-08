import React from 'react'
import './ManagerPage.css'

function ManagerPage() {
    return (
        <div>
            <h2>Manager Page</h2>
            <div className="manager-container">
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Room number</th>
                            <th>Hotel ID</th>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>45</td>
                        <td>789</td>
                        <td>71223</td>
                        <td>10:00</td>
                        <td>10:45</td>
                        <td>
                            <input type="submit" value="Edit" />
                            <input type="submit" value="Delete" />
                        </td>
                    </tbody>
                </table>
                <h2>Add a new task</h2>
                <form>
                    <input type="number" name="employee_id" id="employee_id" required="required" placeholder="Enter Employee ID" />
                    <input type="number" name="r_number" id="r_number" required="required" placeholder="Enter Room Number" />
                    <input type="number" name="hotel_id" id="hotel_id" required="required" placeholder="Enter Hotel ID" />
                    <input type="time" name="start_time" id="start_time" required="required" placeholder="Enter Start time" />
                    <input type="time" name="end_time" id="end_time" required="required" placeholder="Enter End time" />
                    <input type="submit" value="Add" />
                </form>
                <br></br>
                <h2>Employee salary Estimation</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Hours Worked</th>
                            <th>Paying Rate</th>
                            <th>Salary</th>
                            <th>Save</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>7</td>
                        <td>
                            <input type="number" name="h_worked" id="h_worked" required="required" placeholder="Enter hours worked" />
                        </td>
                        <td id="rate">500</td>
                        <td>Tut on koroche pochitaet rate * h_worked</td>
                        <td>
                            <input type="submit" value="Save" />
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManagerPage
