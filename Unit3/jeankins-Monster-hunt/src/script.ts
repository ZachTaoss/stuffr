abstract class Entity {
    constructor(
      public name: string, 
      public challenge: number,
      public weaknesses: string[],
      public habitats: string[],
      public desription: string = '',
      
  
      ) {}
  }
  
  enum EctoType{
  Banshee="Banshee", 
  Wraith="Wraith",
  Spirit="Spirit",
  Shade="Shade",
  Revenant="Revenant",
  Goryo="Goryo",
  Hantu="Hantu",
  Mare="Mare",
  Myling="Myling",
  Onryo="Onryo",
  Phantom="Phantom",
  Poltergeist="Poltergeist",
  Yokai="Yokai",
  Yurei="Yurei",
  Wisp="Wisp"
  }
  enum Tangible{
  one="not Tangible", //cant touch or be touched 
  two="gas-like Tangible", //acts like living gas only deterred with magic
  three="water-like Tangible", // feels and acts like a liquid only killed with magic
  four="slime-like Tangible", //feels and acts like a something slimy can be deterred with physical means
  five="gel-like Tangible",  //feels and acts like a a gel can be kill with physical means
  }
  
  //ghosts
  class Ectoplasmic extends Entity {
    constructor(
      name:string,
      challenge: number,
      weaknesses: string[],
      habitats:string[],
      desription:string,
      public type: EctoType,
      public tangible: Tangible
  
    ){
      super(name,challenge,weaknesses,habitats,desription)
    }
    }
  
    const jim = new Ectoplasmic("jim",3,["jim"],["home"],"that guy",EctoType.Shade,Tangible.four)
    console.log(jim);
    
  
  enum BloodProp{
  HotBlood, //burns
  WarmBlood, // like cold
  LukeBlood, // can be anywhere but not aswell as warm or cold
  ColdBlood, //likes heat
  CryoBlood, //freezing
  
  BugBlood, //green
  CopperBlood, // blue
  acidBlood, // corrosive
  Gelgelatinous  // slimes and sticky blood
  
  }
  enum Legs{
  no="Legless",
  one="Uniped",
  two="Biped",
  four="Quadruped",
  six="Hexapod",
  Eight="Arachnidruped",
  ten="Decapod",
  twelve="Symphylanpod",
  other="other"
  }
  enum Arms{
    no="Armless",
    one="Uniped",
    two="Biped",
    four="Quadruped",
    six="Hexapod",
    Eight="Arachnidruped",
    ten="Decapod",
    twelve="Symphylanpod",
    other="other"
  }
  enum Wings{
    no="Armless",
    two="Biped",
    four="Quadruped",
    six="Hexapod",
    Eight="Arachnidruped",
    ten="Decapod",
    twelve="Symphylanpod",
    other="other"
  }
  enum Skin{
    Hairy="Hairy",
    Smooth="Smooth",
    Rough="Rough",
    Feathered="Feathered",
    Scaly="Scaly",
    Spicky="Spicky"
  }
  
  
  //monsters
  class Beast extends Entity{
  constructor(
    name:string,
    challenge: number,
    weaknesses: string[],
    habitats:string[],
    desription:string,
    public bloodProp: BloodProp,
    public legs: Legs,
    public arms: Arms,
    public wings: Wings,
    public skin: Skin[],
    public other?: string[],
    
  
  ){super(name,challenge,weaknesses,habitats,desription)}
  }
  
  const joe = new Beast("joe",5,["fire"],["forest", "plains"],"a large and aggressive super predatory",BloodProp.CopperBlood,Legs.six,Arms.no,Wings.two,[Skin.Spicky,Skin.Scaly])
  console.log(joe);
  
  
  //humanity(human, elf...) humanlike monsters
  class Humanoids extends Entity{
  
  }
  
  enum Demontype{
    Demon,
    Raiju, //lighting
    Jinn, //fire
    Obake,
    Oni,
    Wastriliths, // water
  }
  
  // class Demonoids extends Entity{}