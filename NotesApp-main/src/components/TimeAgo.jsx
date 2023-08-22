import { parseISO, formatDistanceToNow } from "date-fns";
import React from 'react'

function TimeAgo({timeStamp}) {
    let time =""

    if(timeStamp){
        const date = parseISO(timeStamp)
        const timePeriod = formatDistanceToNow(date)
        time = `${timePeriod} ago`
    }
  return (
    <span className="text-white" title={timeStamp}>
    &nbsp; <i>{time}</i>
  </span>
  )
}

export default TimeAgo
