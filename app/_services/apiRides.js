export const getRides = async () => {
    const res = await  fetch("https://bus-ticket-booking-system-zej3.onrender.com/api/rides")
    if(!res.ok){
        throw new Error("Failed to fetch rides")
    }
    return await res.json()
}