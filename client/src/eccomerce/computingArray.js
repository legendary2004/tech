import { IMAGES_DATA } from "../samsungImages/Photo";

let computingArray = [
    {name: "Galaxy chromebook2 360", price: 450, desc: "Flip from laptop power to tablet precision. With slimmer bezels for edge-to-edge viewing, this dazzling 12.4 touchscreen brings out the best in every detail. Take your work and play to the next level. Experience superior picture quality and fully expansive color, contrast and depth with the 4K AMOLED touchscreen display.", link: "https://www.samsung.com/us/computing/chromebooks/compare/"},
    {name: "Galaxy book2 pro 360", price: 1250, desc: "The latest 12th Gen Intel® Core™ processor delivers cutting-edge speed and jaw-dropping graphics. Double your productivity with a 360-degree hinge that flips from PC to tablet in a snap. Galaxy Book2 Pro 360 includes a S pen.  Write, draw and let your creative side go wild with a pen-on-paper feel in apps like Clip Studio Paint.", link: "https://www.samsung.com/us/computing/galaxy-books/compare/?device-1=galaxy-book-pro-360&device-2=galaxy-book-pro&device-3=none" },
    {name: "Odyssey Ark 4k", price: 3300, desc: "See more on the Samsung Odyssey Ark’s 55”, 1000R curved screen. Conquer every enemy, even at extreme speeds. Ark’s 165Hz refresh rate virtually eliminates lag for exhilarating gameplay with ultra-smooth action. Identify enemies with elite precision with the help of a 1ms response time, precise mouse movements, and blur-free frames, with minimized ghosting.", link: "https://www.samsung.com/us/monitors/"},
    {name: "Galaxy Tab S8 ultra", price: 1100, desc: "Our largest Super AMOLED display for a tablet brings your content to life in vivid detail — backed up by our upgraded Qualcomm Snapdragon chipset and smooth 120Hz refresh rate. And with an ultra-wide dual front camera and included S Pen, you can unleash your most creative self. Our fastest S Pen yet unleashes your most creative and productive self. Write, draw and doodle with near-zero latency. Or, press the button to change slides and take pictures.", link: "https://www.samsung.com/us/tablets/tab-s8/compare/?device-1=galaxy-tab-s8-ultra&device-2=galaxy-tab-s8%2B&device-3=galaxy-tab-s8"}
]

for (let i = 0; i < computingArray.length; i++) {
    computingArray[i].img = IMAGES_DATA[i + 26];
    computingArray[i].id = i + 26;
}

export default computingArray;