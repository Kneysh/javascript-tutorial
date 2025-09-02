let month = "february";

switch (month.toLowerCase()) {
    case "january":
        console.log("New year's just started!")
        break;
    case "february":
        console.log("This year's already boring!")
        break;
    case "march":
        console.log("Rethinking about life!")
        break;
    case "april":
        console.log("New year starts in the Nature!")
        break;
    case "may":
        console.log("Four months already gone!")
        break;
    case "june":
        console.log("Halfway to the year!")
        break;
    case "july":
        console.log("The rest doesn't even matter anymore!")
        break;

    default:
        console.log("No Month Selected!")
        break;
}

// if not break, then all of the next codes execute without matching the cases except default