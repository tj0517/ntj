"use server"; 
import {fromZonedTime} from "date-fns-tz"; 
import {WORK_SCHEDULE} from "../data/working"
import { CUSTOM_DAYS } from "../data/custom";
import { format} from "date-fns"; 



export const buildDateSlots = async (date: Date) => {
const dateStr = format(date, 'yyyy-MM-dd');
  const override = CUSTOM_DAYS[dateStr as keyof typeof CUSTOM_DAYS];
 let SLOTS=[]
  if(override)
  {
    SLOTS=override.slots
  }else
  {
    SLOTS=WORK_SCHEDULE[date.getDay()].slots
  }


  const dateSlots = SLOTS.map(slot => {
    const cetDateTime = new Date(
      date.getFullYear(), 
      date.getMonth(), 
      date.getDate(),
      +slot.slice(0, 2),
      +slot.slice(3, 5)
    );
    return fromZonedTime(cetDateTime, 'Europe/Paris');
  })
  return dateSlots
}