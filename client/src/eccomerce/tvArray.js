import { IMAGES_DATA } from "../samsungImages/Photo"

let tvArray = [
    {name: "Neo8k", price: 5000, label: "pills-home", tv: "Out of this world contrast and color", text:"Save up to 2500$ with our Neo QLED 8k TV and get your first 3 months of xbox game pass on us"},
    {name: "Neo4k", price: 2400, label: "pills-profile", tv: "Experience vividly realistic 3D sound that puts you in the middle of the action.", text: "Brilliant details shine even in well-lit spaces/rooms with Samsung Neo QLED ultra-precise Mini LEDs."},
    {name: "Oled", price: 1000, label: "pills-contact", tv: "The best samsung OLED deal", text: "Quantum HDR OLED expands the dynamic range beyond what is possible in HD"},
    {name: "Crystal", price: 3000, label: "pills-disabled", tv: "Crystal Processor 4K transforms everything you watch into stunning 4K.", text: "Go beyond Smart TV with next-gen apps, super easy control, and a host of enhancements that elevate the TV watching experience."}
]

for (let i = 0; i < tvArray.length; i++) {
    tvArray[i].img = IMAGES_DATA[i + 22];
    tvArray[i].id = i + 22;
}

export default tvArray