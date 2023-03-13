import { IMAGES_DATA } from "../samsungImages/Photo"
import arrayOfPhoneS from "./phoneArray";

let arrayOfPhoneA = [
    {name:"Samsung A03", storage:"32gb/64gb", ram:"2gb/3gb/4gb", chip:"MediaTek MT6765 Helio P35 (12nm)", price:100, link: "https://www.gsmarena.com/samsung_galaxy_a03s-10937.php"},
    {name:"Samsung A13", storage:"32gb/64gb/128gb", ram:"4gb/6gb", chip:"Exynos 850 (8nm)", price:250, link: "https://www.gsmarena.com/samsung_galaxy_a13-11402.php"},
    {name:"Samsung A23", storage:"64gb/128gb", ram:"4gb/6gb/8gb", chip:"Qualcomm SM6225 Snapdragon 680 4G (6 nm)", price:250, link: "https://www.gsmarena.com/samsung_galaxy_a23-11373.php"},
    {name:"Samsung A32", storage:"64gb/128gb", ram:"4gb/6gb/8gb", chip:"Mediatek MT6769V/CU Helio G80 (12 nm)", price:250, link: "https://www.gsmarena.com/samsung_galaxy_a32-10753.php"},
    {name:"Samsung A33", storage:"128gb/256gb", ram:"4gb/6gb/8gb", chip:"Exynos 1280 (5 nm)", price:300, link: "https://www.gsmarena.com/samsung_galaxy_a33_5g-11429.php"},
    {name:"Samsung A42", storage:"128gb", ram:"4gb/6gb/8gb", chip:"Qualcomm SM7225 Snapdragon 750 5G (8 nm)", price:300, link: "https://www.gsmarena.com/samsung_galaxy_a42_5g-10412.php"},
    {name:"Samsung A52", storage:"128gb/256gb", ram:"4gb/6gb/8gb", chip:"Qualcomm SM7125 Snapdragon 720G (8 nm)", price:300, link: "https://www.gsmarena.com/samsung_galaxy_a52-10641.php"},
    {name:"Samsung A53", storage:"128gb/256gb", ram:"4gb/6gb/8gb", chip:"Exynos 1280 (5 nm)", price:500, link: "https://www.gsmarena.com/samsung_galaxy_a53_5g-11268.php"},
    {name:"Samsung A73", storage:"128gb/256gb", ram:"6gb/8gb", chip:"Qualcomm SM7325 Snapdragon 778G 5G (6 nm)", price:600, link: "https://www.gsmarena.com/samsung_galaxy_a73_5g-11257.php"},
]

for (let i = 0; i < arrayOfPhoneA.length; i++) {
    arrayOfPhoneA[i].img = IMAGES_DATA[i + 9];
    arrayOfPhoneA[i].id = i + 9
}

export default arrayOfPhoneA

