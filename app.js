let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const cuaderno = () => {
    for (let value of pronoun) {
        for (let value2 of adj) {
            for (let value3 of noun) {
                console.log(value + value2 + value3 + ".com")
            }

        }
    };

}


cuaderno();

