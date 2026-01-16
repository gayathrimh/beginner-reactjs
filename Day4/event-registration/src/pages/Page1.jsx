import React, {useState} from 'react';
import '../App.css';

export default function Page1(){

    const date=new Date();
    const today=date.toISOString().split('T')[0];

    const [formData,setformData]=useState({
        participantName:'',
        eventName:'',
        eventDate:''
});

    async function handleSubmit(event){
        event.preventDefault();

   alert(`Form Submitted Successfully! ${formData.participantName} has registered for ${formData.eventName} on ${formData.eventDate}`);

}

function handleChange(event){
    setformData({
        ...formData,
        [event.target.id]:event.target.value
    });
}

 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name of participant:
                    <input type='text' id='participantName' value={formData.participantName} onChange={handleChange}required/>
                </label>
                <label>
                    Event name:
                    <input type='text' id='eventName' value={formData.eventName} onchange={handleChange} required/>
                </label>
                <label>
                    Event date:
                    <input type='date' id='eventDate' value={formData.eventDate}  onChange={handleChange} min={today} required/>
                </label>

                <button className='submit-button' type='submit'>Submit</button>
                <button className='reset-button' type='reset'>Reset</button>


            </form>
        </div>
    );
}