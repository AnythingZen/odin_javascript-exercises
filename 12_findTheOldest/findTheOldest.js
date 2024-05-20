function getAge (birth, dead) {
    if (!dead) {
        dead = new Date().getFullYear();
    }

    return dead - birth;
}

const findTheOldest = function(people) {
    const oldest = people.reduce((ageTotal, ageCurrent) => {
                    const person1 = getAge(ageTotal.yearOfBirth, 
                                        ageTotal.yearOfDeath);
                    const person2 = getAge(ageCurrent.yearOfBirth, 
                                        ageCurrent.yearOfDeath);

                    return person1 < person2 ? ageCurrent : ageTotal;
                });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
