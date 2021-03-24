let team = {
    name: prompt("Enter the name of your team"),
    leader: prompt("Who is the leader of your team?"),
    members: prompt("Who are the members of your team? Separate each name with commas."),
    agenda: prompt("What are the goals and ideas of the team?"),
    isEvil: confirm("Is your team evil?"),
}

//важный момент с обратныйм апострофом ! Работает только с ним и переносит на другую строку
//так же используем салит без запятой и считаем сколько слов + 1 капитан команды 
alert(`Heres the team      
name - ${team.name}
leader - ${team.leader}
members - ${team.members}
memberCount - ${team.members.split(',').length + 1} 
agenda - ${team.agenda}
isEvil - ${team.isEvil}  
`)

