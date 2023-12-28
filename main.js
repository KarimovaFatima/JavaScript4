let months = prompt ("Zəhmət olmasa bir ay daxil edin.");
switch (months) {
    case "Yanvar":
        console.log("Yanvar- İlin ilk ayıdır. 31 gündən ibarətdir.");
        break;
    case "Fevral" :
        console.log("Fevral- İlin ikinci ayıdır. 28 Gündən ibarət olaraq, ilin ən qısa ayıdır.");
        break;
    case "Mart":
        console.log("Mart- İlin üçüncü ayıdır. 31 gündən ibarətdir.");
        break;
    case "Aprel":
        console.log("Aprel- İlin dördüncü ayıdır. 30 gündən ibarətdir.");
        break; 
    case "May":
        console.log("May- İlin beşinci ayıdır. 31 gündən ibarətdir.");
        break;
    case "Iyun":
        console.log("İyun- İlin altıncı ayıdır. 30 gündən ibarətdir.");
        break;
    case "Iyul":
        console.log("İyul- İlin yeddinci ayıdır. 31 gündən ibarətdir.");
        break;
    case "Avqust":
        console.log("Avqust- İlin səkkizinci ayıdır. 31 gündən ibarətdir.");
        break;
    case "Sentyabr":
        console.log("Sentyabr- İlin doqquzuncu ayıdır. 30 gündən ibarətdir.");
        break;
    case "Oktyabr":
        console.log("Oktyabr- İlin onuncu ayıdır. 31 gündən ibarətdir.");
        break;
    case "Noyabr":
        console.log("Noyabr- İlin on birinci ayıdır. 30 gündən ibarətdir.");
        break;
    case "Dekabr":
        console.log("Dekabr- İlin son ayı, on ikinci aydır. 31 gündən ibarət olub, qış fəslinin ilk ayıdır.");
        break;
    default:
        console.log ("Ilin aylarına aid deyil. Xahiş olunur, ay daxil edin.");
    }