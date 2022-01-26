"use strict";
class Entity {
    constructor(name, challenge, weaknesses, habitats, desription = '') {
        this.name = name;
        this.challenge = challenge;
        this.weaknesses = weaknesses;
        this.habitats = habitats;
        this.desription = desription;
    }
}
var EctoType;
(function (EctoType) {
    EctoType["Banshee"] = "Banshee";
    EctoType["Wraith"] = "Wraith";
    EctoType["Spirit"] = "Spirit";
    EctoType["Shade"] = "Shade";
    EctoType["Revenant"] = "Revenant";
    EctoType["Goryo"] = "Goryo";
    EctoType["Hantu"] = "Hantu";
    EctoType["Mare"] = "Mare";
    EctoType["Myling"] = "Myling";
    EctoType["Onryo"] = "Onryo";
    EctoType["Phantom"] = "Phantom";
    EctoType["Poltergeist"] = "Poltergeist";
    EctoType["Yokai"] = "Yokai";
    EctoType["Yurei"] = "Yurei";
    EctoType["Wisp"] = "Wisp";
})(EctoType || (EctoType = {}));
var Tangible;
(function (Tangible) {
    Tangible["one"] = "not Tangible";
    Tangible["two"] = "gas-like Tangible";
    Tangible["three"] = "water-like Tangible";
    Tangible["four"] = "slime-like Tangible";
    Tangible["five"] = "gel-like Tangible";
})(Tangible || (Tangible = {}));
//ghosts
class Ectoplasmic extends Entity {
    constructor(name, challenge, weaknesses, habitats, desription, type, tangible) {
        super(name, challenge, weaknesses, habitats, desription);
        this.type = type;
        this.tangible = tangible;
    }
}
const jim = new Ectoplasmic("jim", 3, ["jim"], ["home"], "that guy", EctoType.Shade, Tangible.four);
console.log(jim);
var BloodProp;
(function (BloodProp) {
    BloodProp[BloodProp["HotBlood"] = 0] = "HotBlood";
    BloodProp[BloodProp["WarmBlood"] = 1] = "WarmBlood";
    BloodProp[BloodProp["LukeBlood"] = 2] = "LukeBlood";
    BloodProp[BloodProp["ColdBlood"] = 3] = "ColdBlood";
    BloodProp[BloodProp["CryoBlood"] = 4] = "CryoBlood";
    BloodProp[BloodProp["BugBlood"] = 5] = "BugBlood";
    BloodProp[BloodProp["CopperBlood"] = 6] = "CopperBlood";
    BloodProp[BloodProp["acidBlood"] = 7] = "acidBlood";
    BloodProp[BloodProp["Gelgelatinous"] = 8] = "Gelgelatinous"; // slimes and sticky blood
})(BloodProp || (BloodProp = {}));
var Legs;
(function (Legs) {
    Legs["no"] = "Legless";
    Legs["one"] = "Uniped";
    Legs["two"] = "Biped";
    Legs["four"] = "Quadruped";
    Legs["six"] = "Hexapod";
    Legs["Eight"] = "Arachnidruped";
    Legs["ten"] = "Decapod";
    Legs["twelve"] = "Symphylanpod";
    Legs["other"] = "other";
})(Legs || (Legs = {}));
var Arms;
(function (Arms) {
    Arms["no"] = "Armless";
    Arms["one"] = "Uniped";
    Arms["two"] = "Biped";
    Arms["four"] = "Quadruped";
    Arms["six"] = "Hexapod";
    Arms["Eight"] = "Arachnidruped";
    Arms["ten"] = "Decapod";
    Arms["twelve"] = "Symphylanpod";
    Arms["other"] = "other";
})(Arms || (Arms = {}));
var Wings;
(function (Wings) {
    Wings["no"] = "Armless";
    Wings["two"] = "Biped";
    Wings["four"] = "Quadruped";
    Wings["six"] = "Hexapod";
    Wings["Eight"] = "Arachnidruped";
    Wings["ten"] = "Decapod";
    Wings["twelve"] = "Symphylanpod";
    Wings["other"] = "other";
})(Wings || (Wings = {}));
var Skin;
(function (Skin) {
    Skin["Hairy"] = "Hairy";
    Skin["Smooth"] = "Smooth";
    Skin["Rough"] = "Rough";
    Skin["Feathered"] = "Feathered";
    Skin["Scaly"] = "Scaly";
    Skin["Spicky"] = "Spicky";
})(Skin || (Skin = {}));
//monsters
class Beast extends Entity {
    constructor(name, challenge, weaknesses, habitats, desription, bloodProp, legs, arms, wings, skin, other) {
        super(name, challenge, weaknesses, habitats, desription);
        this.bloodProp = bloodProp;
        this.legs = legs;
        this.arms = arms;
        this.wings = wings;
        this.skin = skin;
        this.other = other;
    }
}
const joe = new Beast("joe", 5, ["fire"], ["forest", "plains"], "a large and aggressive super predatory", BloodProp.CopperBlood, Legs.six, Arms.no, Wings.two, [Skin.Spicky, Skin.Scaly]);
console.log(joe);
//humanity(human, elf...) humanlike monsters
class Humanoids extends Entity {
}
var Demontype;
(function (Demontype) {
    Demontype[Demontype["Demon"] = 0] = "Demon";
    Demontype[Demontype["Raiju"] = 1] = "Raiju";
    Demontype[Demontype["Jinn"] = 2] = "Jinn";
    Demontype[Demontype["Obake"] = 3] = "Obake";
    Demontype[Demontype["Oni"] = 4] = "Oni";
    Demontype[Demontype["Wastriliths"] = 5] = "Wastriliths";
})(Demontype || (Demontype = {}));
// class Demonoids extends Entity{}
