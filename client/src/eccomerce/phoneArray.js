import { IMAGES_DATA } from "../samsungImages/Photo";

let arrayOfPhoneS = [
    {name:"Samsung S22 Ultra", storage:"128gb/256gb/512gb/1TB", ram:"8gb/12gb", chip:"Exynos 2200 (4 nm) - International Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) - ROW", price:1200, link: "https://www.gsmarena.com/samsung_galaxy_s22_ultra_5g-11251.php"},
    {name:"Samsung S22+", storage:"128gb/256gb", ram:"8gb", chip:"Exynos 2200 (4 nm) - Europe Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) - ROW", price:1000, link: "https://www.gsmarena.com/samsung_galaxy_s22+_5g-11252.php"},
    {name:"Samsung S22", storage:"128gb/256gb", ram:"8gb", chip:"Exynos 2200 (4 nm) - Europe Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) - ROW", price:850, link: "https://www.gsmarena.com/samsung_galaxy_s22_5g-11253.php"},
    {name:"Samsung S21 Ultra", storage:"128gb/256gb/512gb", ram:"8gb/12gb", chip:"Exynos 2100 (5 nm) - InternationalQualcomm SM8350 Snapdragon 888 5G (5 nm) - USA/China", price:950, link: "https://www.gsmarena.com/samsung_galaxy_s21_ultra_5g-10596.php"},
    {name:"Samsung S21+", storage:"128gb/256gb/512gb", ram:"8gb/12gb", chip:"Exynos 2100 (5 nm) - InternationalQualcomm SM8350 Snapdragon 888 5G (5 nm) - USA/China", price:800, link: "https://www.gsmarena.com/samsung_galaxy_s21+_5g-10625.php"},
    {name:"Samsung S21 FE", storage:"128gb/256gb", ram:"6gb/8gb", chip:"Exynos 2100 (5 nm) - InternationalQualcomm SM8350 Snapdragon 888 5G (5 nm) - USA/China", price:600, link: "https://www.gsmarena.com/samsung_galaxy_s21_fe_5g-10954.php"},
    {name:"Samsung S20 Ultra", storage:"128gb/256gb/512gb", ram:"8gb/12gb", chip:"Exynos 990 (7 nm+) - Global Qualcomm SM8250 Snapdragon 865 5G (7 nm+) - USA", price:850, link: "https://www.gsmarena.com/samsung_galaxy_s20_ultra_5g-10040.php"},
    {name:"Samsung S20+", storage:"128gb/256gb", ram:"8gb", chip:"Exynos 990 (7 nm+) - Global Qualcomm SM8250 Snapdragon 865 5G (7 nm+) - USA", price:650, link: "https://www.gsmarena.com/samsung_galaxy_s20+-10080.php"},
    {name:"Samsung S20 FE", storage:"128gb/256gb", ram:"6gb/8gb", chip:"Exynos 990 (7 nm+) - Global Qualcomm SM8250 Snapdragon 865 5G (7 nm+) - USA", price:450, link: "https://www.gsmarena.com/samsung_galaxy_s20_fe_5g-10377.php"},
]

for (let i = 0; i < arrayOfPhoneS.length; i++) {
    arrayOfPhoneS[i].img = IMAGES_DATA[i];
    arrayOfPhoneS[i].id = i;
}

export default arrayOfPhoneS;