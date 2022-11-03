export default function getTotalAttendance(records: Array<object>): number{
    let totalHours = 0;

    for(const record of records){
        if(!record.hours) continue;
        totalHours += record.hours;
    }
    return totalHours;
}