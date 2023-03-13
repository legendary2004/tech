import { IMAGES_DATA } from "../samsungImages/Photo";

let arrayOfPhoneZ = [
    {name: "Galaxy Z fold 4", storage: "256gb/512gb/1TB", ram: "12gb", chip: "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)", price: 1700, link: "https://www.gsmarena.com/samsung_galaxy_z_fold4-11737.php"},
    {name: "Galaxy Z flip 4", storage: "128gb/256gb/512gb", ram: "8gb", chip: "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)", price: 1000, link: "https://www.gsmarena.com/samsung_galaxy_z_flip4-11538.php"},
    {name: "Galaxy Z fold 3", storage: "256gb/512gb", ram: "12gb", chip: "Qualcomm SM8350 Snapdragon 888 5G (5 nm)", price: 1100, link: "https://www.gsmarena.com/samsung_galaxy_z_fold3_5g-10906.php"},
    {name: "Galaxy Z flip 3", storage: "128gb/256gb", ram: "8gb", chip: "Qualcomm SM8350 Snapdragon 888 5G (5 nm)", price: 700, link: "https://www.gsmarena.com/samsung_galaxy_z_flip3_5g-11044.php"}
]

for (let i = 0; i < arrayOfPhoneZ.length; i++) {
    arrayOfPhoneZ[i].img = IMAGES_DATA[i + 18];
    arrayOfPhoneZ[i].id = i + 18;
}

export default arrayOfPhoneZ;