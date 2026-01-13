import Page2 from './Page2.jsx';

export default function Page1(){ 
    const cities = [
      { name : 'San Francisco', timezone: 'America/Los_Angeles' },
      { name: 'Chicago', timezone: 'America/Chicago' },
      { name: 'New York', timezone: 'America/New_York' },
      { name: 'London', timezone: 'Europe/London' },
      { name: 'Dubai', timezone: 'Asia/Dubai' },
      { name: 'Bengaluru', timezone: 'Asia/Kolkata' },
      { name: 'Singapore', timezone: 'Asia/Singapore' },
      { name: 'Tokyo', timezone: 'Asia/Tokyo' },
      { name: 'Sydney', timezone: 'Australia/Sydney' },
      { name: 'Wellington', timezone: 'Pacific/Auckland' }
   ];
  return(
   <div>
       <ul> {cities.map((cityObject, index) => (
        <Page2 key = {index} city = {cityObject}/> ))}
      </ul>
  </div>
);
}