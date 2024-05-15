select person.firstName, person.lastName, address.city, address.state from person
left join address ON person.personId = address.personId;