//function experiencia(anos) { 
    // código aqui
// }
 
// const minhaExperiencia = experiencia(7);
//console.log(minhaExperiencia) //Jedi Master
 
 // De 0-1 ano: Iniciante
 // De 1-3 anos: Intermediário
 // De 3-6 anos: Avançado
 // De 7 acima: Jedi Master

const myExperience = 7;

function classifyExperience (experience) {
    switch (true){

        case experience <= 1:
            return "Iniciante";

            case experience <= 3:
                return"Intermediário";
        
            case experience < 7:
                return "Avançado";

            case experience >= 7:
                return "Jedi Master";
                
        default:
            return "você precisa informar a sua experiência usando um número";

    }
}

const myExperienceClassifiedAs = classifyExperience (myExperience);

console.log (myExperienceClassifiedAs);