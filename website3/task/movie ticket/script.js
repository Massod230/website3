function generateTicket(){

    const movie = document.getElementById("movie").value;
    const name = document.getElementById("name").value;
    const seat = document.getElementById("seat").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if(movie==="" || name==="" || seat==="" || date==="" || time===""){
        alert("Please fill all fields.");
        return;
    }

    document.getElementById("ticketMovie").innerText = movie;
    document.getElementById("ticketName").innerText = name;
    document.getElementById("ticketSeat").innerText = seat;
    document.getElementById("ticketDate").innerText = date;
    document.getElementById("ticketTime").innerText = time;

    document.getElementById("ticket").style.display = "flex";
}